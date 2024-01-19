import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

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

    isFieldOneEqualFieldTwo( field1: string, field2: string ) { //1
        // return ( formGroup: FormGroup ): ValidationErrors | null => { //devuelve una función, que devuelve el formulario
        return ( formGroup: AbstractControl ): ValidationErrors | null => { //devuelve una función, que devuelve el formulario
          const fieldValue1 = formGroup.get(field1)?.value;
          const fieldValue2 = formGroup.get(field2)?.value;

          if ( fieldValue1 !== fieldValue2 ) {
            formGroup.get(field2)?.setErrors({ notEqual: true }); //establece en el input el error
            return { notEqual: true } // mostraré el formulario un error
          }
    
          formGroup.get(field2)?.setErrors(null); // si son diferentes, limpias los errores
          return null;
        }
    }

}

//1->  Cuando Angular ejecuta esta función de validación, automáticamente le pasa el FormGroup como el argumento formGroup. 
//      Este objeto representa todo el formulario con sus controles.. Esto "ValidationErrors" lo devuelve asíncrono
// Con AbstractControl puedes enviar el formGroup, formControl etc