import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({providedIn: 'root'})

export class ValidatorsService { // Manera síncrona. Opción 1

    firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    cantBeStrider = (control: FormControl): ValidationErrors | null => { //por ejemplo, un formControlName. Esta función es síncrona, actúa cuando se está escribiendo
        const value: string = control.value.trim().toLowerCase();
    
        if (value === 'strider') {
            //devolver un objeto con el error si hay un error
            return {
                noStrider: true
            }
        }
    
        return null;
    }

    isValidField(form: FormGroup, field:string) { // formGroup porque te mandan el formulario entero
        return form.controls[field].errors && form.controls[field].touched
    }

}