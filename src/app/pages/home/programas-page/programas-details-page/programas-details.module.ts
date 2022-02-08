import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramasDetailsComponent } from './programas-details.component';

export const routes: Routes = [{ path: '', component: ProgramasDetailsComponent }]

@NgModule({
  declarations: [
    ProgramasDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgramasDetailsModule { }
