import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { BtnCellRenderer } from '../../../commons/ag-grid/button-cell-renderer/button-cell-renderer';
import { SharedComponentsModule } from '../../../commons/shared/shared-components.module';
import { ProgramasComponent } from './programas.component';

export const routes: Routes = [{ path: '', component: ProgramasComponent }]

@NgModule({
  declarations: [
    ProgramasComponent,
    BtnCellRenderer
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([BtnCellRenderer]),
  ]
})
export class ProgramasModule { }
