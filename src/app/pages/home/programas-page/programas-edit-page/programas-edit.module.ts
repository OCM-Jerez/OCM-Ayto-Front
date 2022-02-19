import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../../../../commons/shared/shared-components.module';
import { ProgramasEditComponent } from './programas-edit.component';

export const routes: Routes = [{ path: '', component: ProgramasEditComponent }]

@NgModule({
  declarations: [
    ProgramasEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class ProgramasEditModule { }
