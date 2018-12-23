import { ViewEncapsulation, Component, Input, OnInit, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DialogBoxComponent implements OnInit{

    @Input() display: boolean;
    @Output() displayChange = new EventEmitter();
    // @Output() jobAssigned = new EventEmitter();
  
    onClose(){
      this.displayChange.emit(false);
    }
  
    // Work against memory leak if component is destroyed
    ngOnDestroy() {
      this.displayChange.unsubscribe();
    }
    

    public ngOnInit(){
    }

}