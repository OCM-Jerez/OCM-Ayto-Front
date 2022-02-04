import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGastosComponent } from './dashboard-gastos.component';

export const routes: Routes = [{ path: '', component: DashboardGastosComponent }]

@NgModule({
  declarations: [
    DashboardGastosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardGastosModule { }
