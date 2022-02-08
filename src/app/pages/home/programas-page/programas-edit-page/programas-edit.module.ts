import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasEditComponent } from './programas-edit.component';

export const routes: Routes = [{ path: '', component: ProgramasEditComponent }]

@NgModule({
  declarations: [
    ProgramasEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgramasEditModule { }
