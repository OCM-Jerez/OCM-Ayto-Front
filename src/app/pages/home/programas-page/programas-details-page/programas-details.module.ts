import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../../../../commons/shared/shared-components.module';
import { ProgramasDetailsComponent } from './programas-details.component';

export const routes: Routes = [{ path: '', component: ProgramasDetailsComponent }]

@NgModule({
  declarations: [
    ProgramasDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),
    MatTabsModule,
  ]
})
export class ProgramasDetailsModule { }
