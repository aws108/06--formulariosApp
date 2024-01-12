import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class EmailValidatorService implements AsyncValidator{ // Manera 2: Asíncrono
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;
        return of ({ //2
            emailTaken: true
        }).pipe (
            delay(2000) //retrasa la validación del formulario. Es una chapuza para crear una asincronía
        )
    }

    
}

// AbstractControl -> es el formControl
// Promise -> Le da la sincronía al método, es como un observable, pero más limitado aunque más directo (ver en gitHub en los apuntes)

// 2-> Crea un nuevo Observable que emite los valores que le proporcionas como argumentos y emite valores de manera síncrona

