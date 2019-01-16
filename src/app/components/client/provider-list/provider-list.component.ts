import {
  ViewEncapsulation,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  ChangeDetectorRef, OnDestroy
} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {ProviderService} from '../../../services/provider.service';
import {MessageService} from 'primeng/api';
import {AbilityComponent} from '../../shared/abilities/ability.component';
import {Subscription} from 'rxjs/index';


@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderListComponent implements OnInit, OnDestroy {

  abilityNumber = 1;
  @ViewChild('abilities', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;
  abilityComponents: ComponentRef<AbilityComponent>[] = [];

  protected providers: any[] = [];
  protected limit: number = 7;
  protected pageNumber: number = 0;
  protected selectedProviders: string[] = [];
  protected display: boolean = false;
  protected rating: string = '';

  private subs: Subscription[] = [];

  constructor(private providerService: ProviderService,
              private factoryResolver: ComponentFactoryResolver,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs.forEach((s)=>s.unsubscribe());
  }

  private loadData(): void {
    this.pageNumber = 0;
    this.subs.push(this.providerService.getProviders(this.limit, this.pageNumber)
      .subscribe(
        (result) => {
          this.providers = result;
        },
        (error) => {
          this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi incarcate.'});
        }
      ));
  }

  protected getNextProvidersPage(): void {
    this.pageNumber += 1;
    this.subs.push(this.providerService.getProviders(this.limit, this.pageNumber).subscribe(
      (result) => {
        this.providers = result;
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi incarcate.'});
      }
    ));
  }

  protected getPreviousProviders(): void {
    this.pageNumber -= 1;
    this.subs.push(this.providerService.getProviders(this.limit, this.pageNumber).subscribe(
      (result) => {
        this.providers = result;
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Datele nu au putut fi incarcate.'});
      }
    ));
  }

  protected onJobAssign(jobId: string): void {
    this.subs.push(this.providerService.assingJob(jobId, this.selectedProviders).subscribe(
      (result) => {
        this.displaySuccess();
      },
      (error) => {
        this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'A aparut o eroare, incercati din nou mai tarziu'});
      }
    ));
  }

  protected onCheckboxClick(providerId: string) {
    if (this.selectedProviders.indexOf('5') === -1) {
      this.selectedProviders.push(providerId);
    } else {
      this.selectedProviders = this.selectedProviders.filter(id => id !== providerId);
    }
  }

  protected applyFilters() {
    const abilitati: any[] = this.getAbilities();
    const ids = abilitati.map((abl) => abl.id);
    if (abilitati.length > 0) {
      this.pageNumber = 0;
      this.subs.push(this.providerService.getFilteredProviders(ids).subscribe(
        (result) => {
          this.providers = result;
        },
        (error) => {
          console.log(error);
        }
      ));
    } else {
      console.log('Rating: ', this.rating);
      if (this.rating != null && this.rating != '') {
        if (+this.rating > 5 || +this.rating < 0) {
          this.messageService.add({severity: 'warn', summary: 'Rating incorect', detail: 'Rating trebuie sa fie intre 0 si 5'});
          this.rating = '';
        } else {
          this.subs.push(this.providerService.getProvidersWithStar(this.rating).subscribe(
            (result) => {
              this.providers = result;
            },
            (error) => {
              console.log(error);
            }
          ));
        }
      } else {
        this.loadData();
      }
    }
  }

  protected clearFilters(): void {
    this.loadData();
    this.rating = null;
    console.log(this.abilityComponents);
    this.abilityComponents.forEach((comp) => {
      comp.destroy();
    });
    this.abilityComponents = [];
    this.abilityNumber = 1;
  }

  private showDialog(): void {
    if (this.selectedProviders.length < 1) {
      this.displayWarning();
    } else {
      this.display = true;
    }
  }

  private onDialogClose(event): void {
    this.display = event;
  }

  private displayWarning() {
    this.messageService.add({severity: 'warn', summary: 'Asignare anulata', detail: 'Selecteaza un provider'});
  }

  private displaySuccess() {
    this.messageService.add({severity: 'success', summary: 'Job assigned', detail: 'Job was assigned'});
  }


  protected addAbilityComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(AbilityComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    const instance = ref.instance;
    instance.number = this.abilityNumber;
    this.subs.push(instance.deleted.subscribe(value => {
      if (value) {
        this.abilityComponents.splice(this.abilityComponents.indexOf(ref), 1);
        ref.destroy();
        for (let i = 0; i < this.abilityNumber - 2; i++) {
          this.abilityComponents[i].instance.number = i + 1;
        }
        this.abilityNumber--;
        console.log(this.abilityComponents);
      }
    }));
    this.abilityNumber++;
    this.abilityComponents.push(ref);
  }

  private getAbilities() {
    const abilities = [];
    this.abilityComponents.forEach(component => {
      const ability = component.instance.getAbilityOnly();
      if (ability) {
        abilities.push(ability);
      }
    });

    return abilities;
  }

  private compareAbilities(providerAbilities: any[], filterAbilities): boolean {
    providerAbilities.map((abl) => {
      filterAbilities.map((filtAbl) => {
        if (abl.code === filtAbl.code) {
          return true;
        }
      });
    });
    return false;
  }
}
