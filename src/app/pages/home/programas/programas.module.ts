import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ProgramasComponent } from './programas.component';

export const routes: Routes = [{ path: '', component: ProgramasComponent }]

@NgModule({
  declarations: [
    ProgramasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ]
})
export class ProgramasModule { }
