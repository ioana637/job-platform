import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderListComponent} from './provider-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProviderListComponent
    ],
    exports: [
        ProviderListComponent
    ]
})
export class ProviderListModule {}
