import {ViewEncapsulation, Component, Input, OnInit} from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';


@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ProviderCardComponent implements OnInit {

  @Input() public fullName = '';
  @Input() public status = '';
  @Input() public rating = '';
  @Input() public abilitati: any[] = [];


  public ngOnInit() {
  }

  protected getInitials(fullname: string): string {
    return fullname[0] + fullname[fullname.indexOf(' ') + 1];
  }
}
