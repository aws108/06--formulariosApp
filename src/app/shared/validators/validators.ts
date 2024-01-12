import { FormControl, ValidationErrors } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// Lista de funciones que no están en un servicio

// Se va a validar si el username es strider, si es strider, el formulario no es valido.

export const cantBeStrider = (control: FormControl): ValidationErrors | null => { //por ejemplo, un formControlName. Esta función es síncrona, actúa cuando se está escribiendo
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
        //devolver un objeto con el error si hay un error
        return {
            noStrider: true
        }
    }

    return null;

}