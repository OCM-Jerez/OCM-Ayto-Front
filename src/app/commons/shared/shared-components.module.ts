import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderComponent } from '../../commons/components/page-header/page-header.component';

@NgModule({
    declarations: [
        PageHeaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [PageHeaderComponent]
})
export class SharedComponentsModule { }
