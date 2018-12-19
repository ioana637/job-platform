import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../shared/model';
import {forkJoin, Observable} from 'rxjs';
import {RecommendationService} from '../../../services/recommendation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JobService} from '../../../services/job.service';
import {UserService} from '../../../services/user.service';
import {MessageService} from 'primeng/api';
import {convertTimestampToDate} from '../../../services/utils';

@Component({
  selector: 'app-recommandation-add',
  templateUrl: './recommandation-add.component.html',
  styleUrls: ['./recommandation-add.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class RecommandationAddComponent implements OnInit {
  clients: User[] = [];
  providers: User[] = [];
  form: FormGroup;

  constructor(private service: RecommendationService,
              private formBuilder: FormBuilder,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.buildForm();
    forkJoin(this.service.getClients(), this.service.getProviders()).subscribe(results => {
      this.clients = results[0];
      this.providers = results[1];
    });

  }


  onCancel() {
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Modificările au fost anulate!'});
    this.buildForm();
  }

  onSubmit() {
    if (this.form.valid) {
      const {recommender, recommendedProvider, description} = this.form.value;
      const date = new Date().toJSON();
      this.service.addRecommendation({
        recommender,
        recommendedProvider,
        description,
        date: date.slice(0, date.length - 2)
      }).subscribe(
        succes => {
          this.messageService.add({severity: 'info', summary: 'Informare', detail: 'Recomandarea a fost adaugata cu succes!'});
          this.form.reset();
        },
        error => this.messageService.add({severity: 'error', summary: 'Eroare', detail: error})
      );
    } else {
      this.messageService.add({severity: 'error', summary: 'Eroare', detail: 'Trebuie să completați câmpurile obligatorii!'});
    }
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        recommendedProvider: ['', Validators.required],
        recommender: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }
}
