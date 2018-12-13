import { ViewEncapsulation, Component, Input } from "@angular/core";
import {CheckboxModule} from 'primeng/checkbox';


@Component({
    selector: 'app-provider-card',
    templateUrl: './provider-card.component.html',
    styleUrls: ['./provider-card.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProviderCardComponent{

    @Input() public fullName: string = '';
    @Input() public abilitate1: string = '';
    @Input() public label1: string = '';
    @Input() public abilitate2: string = '';
    @Input() public label2: string = '';
    @Input() public status: string = '';
    
}