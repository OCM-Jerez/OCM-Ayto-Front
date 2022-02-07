import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { BtnCellRenderer } from '../../../commons/ag-grid/button-cell-renderer';
import { EconomicosGastosComponent } from './economicos-gastos.component';

export const routes: Routes = [{ path: '', component: EconomicosGastosComponent }]


@NgModule({
  declarations: [
    EconomicosGastosComponent,

  ],
  imports: [
    CommonModule,
    // CommonPagesModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([BtnCellRenderer]),
  ]
})
export class EconomicosGastosModule { }
