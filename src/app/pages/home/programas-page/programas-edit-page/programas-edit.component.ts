import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PROGRAMA_VALIDATORS } from './programa.validators';

@Component({
  selector: 'app-programas-edit',
  templateUrl: './programas-edit.component.html',
  styleUrls: ['./programas-edit.component.scss']
})
export class ProgramasEditComponent {
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this._loadForm();
  }

  private _loadForm(): void {
    this.formGroup = this._formBuilder.group(
      {
        codPro: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^(0|[1-9][0-9]*)$')]],
        descripcionAyto: ['', [Validators.required, Validators.minLength(3)]],
        descripcionOCM: ['', [Validators.minLength(3)]],
        WebOCM: ['', [Validators.minLength(3)]],
        proCreatedDate: ['', [Validators.minLength(3)]],
        proDeletedDate: ['', [Validators.minLength(3)]],
        uso: ['', [Validators.minLength(3)]],
        observaciones: ['', [Validators.minLength(3)]],
        codOrg: ['', [Validators.minLength(3)]],
      }
    );
  }

  getError(controlName: string): string {
    const control = this.formGroup.get(controlName)
    if (control?.invalid && control?.touched) {
      const atributeError = PROGRAMA_VALIDATORS.find((x) => x.formControlName == controlName);
      const validator = atributeError?.validators.find(
        (validator) => control.errors![validator.name]
      );
      return validator!.message;
    }
    return '';
  }


}