import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderListComponent} from './provider-list.component';
import { ToolbarProviderComponent } from '../toolbar-provider/toolbar-provider.component';

@NgModule({
    imports: [
        CommonModule,
        ToolbarProviderComponent
    ],
    declarations: [
        ProviderListComponent
    ],
    exports: [
        ProviderListComponent
    ]
})
export class ProviderListModule {}
