import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../shared/model';
import {forkJoin, Subscription} from 'rxjs';
import {RecommendationService} from '../../../services/recommendation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-recommandation-add',
  templateUrl: './recommandation-add.component.html',
  styleUrls: ['./recommandation-add.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RecommandationAddComponent implements OnInit, OnDestroy {
  clients: User[] = [];
  providers: User[] = [];
  form: FormGroup;
  user: User = null;
  subs: Subscription[] = [];

  constructor(private service: RecommendationService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.buildForm();
    this.user = this.userService.getUser();
    this.subs.push(forkJoin(this.service.getClients(), this.service.getProviders()).subscribe(results => {
      this.clients = results[0].filter(cl => cl.id !== this.user.id);
      this.providers = results[1];
    }));
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }


  onCancel() {
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Modificările au fost anulate!'});
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      const {userFor, recommendedProvider, description} = this.form.value;
      const date = new Date().toJSON();
      this.subs.push(this.service.addRecommendation({
        recommender: this.user,
        recommendedProvider,
        userFor,
        description,
        date: date.slice(0, date.length - 2)
      }).subscribe(
        succes => {
          this.messageService.add({severity: 'info', summary: 'Informare', detail: 'Recomandarea a fost adaugata cu succes!'});
          this.form.reset();
        },
        error => this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'A aparut o eroare, incercati din nou mai tarziu'})
      ));
    } else {
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
    }
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        recommendedProvider: ['', Validators.required],
        userFor: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }
}
