import { IAtribute } from "../../../../commons/interfaces/common.interface";

const commonValidators = [
    {
        name: 'required',
        message: 'El campo es requerido. Por favor, introduce un valor.'
    },
    {
        name: 'minlength',
        message: 'Debe tener al menos 3 caracteres.'
    },

]
export const PROGRAMA_VALIDATORS: IAtribute[] = [
    {
        formControlName: 'codPro',
        validators: commonValidators
    },
    {
        formControlName: 'descripcionAyto',
        validators: [...commonValidators, {
            name: 'pattern',
            message: 'Deber ser numeros'
        }]
    },
    {
        formControlName: 'descripcionOCM',
        validators: [
            {
                name: 'minlength',
                message: 'Debe tener al menos 3 caracteres.'
            },
        ]
    },


];