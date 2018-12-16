import { ViewEncapsulation, Component, Input, OnInit } from "@angular/core";
import {CheckboxModule} from 'primeng/checkbox';


@Component({
    selector: 'app-provider-card',
    templateUrl: './provider-card.component.html',
    styleUrls: ['./provider-card.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProviderCardComponent implements OnInit{

    @Input() public fullName: string = '';
    @Input() public status: string = '';
    @Input() public rating: string = '';
    @Input() public abilitati: any[] = [];
    

    public ngOnInit(){
    }
}