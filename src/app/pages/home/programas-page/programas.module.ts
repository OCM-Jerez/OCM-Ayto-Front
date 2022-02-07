import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { BtnCellRenderer } from '../../../commons/ag-grid/button-cell-renderer';
import { PageHeaderComponent } from '../../../commons/components/page-header/page-header.component';
import { CommonPagesModule } from '../common-pages.module';
import { ProgramasComponent } from './programas.component';

export const routes: Routes = [{ path: '', component: ProgramasComponent }]

@NgModule({
  declarations: [
    ProgramasComponent,
    PageHeaderComponent

  ],
  imports: [
    CommonModule,
    CommonPagesModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([BtnCellRenderer]),
  ]
})
export class ProgramasModule { }
