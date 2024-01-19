import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class EmailValidatorService implements AsyncValidator{ // Manera 2: Asíncrono
    
    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     return of ({ //2
    //         emailTaken: true
    //     }).pipe (
    //         delay(2000) //retrasa la validación del formulario. Es una chapuza para crear una asincronía
    //     )
    // }

    validate(control: AbstractControl): Observable<ValidationErrors | null> { // valida el mail que metes en el form
        const email = control.value;
        const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
            if (email === 'fernando@google.com') { // si metes este mail, te lo da por mal, porque ya está usado
                subscriber.next({ emailTaken: true }); //emite un nuevo valor al subscribe
                subscriber.complete(); // se desuscribe
            }
            subscriber.next(null);
            subscriber.complete();
        }).pipe(
            delay(3000)
        );
        return httpCallObservable;
    }
    
}

// AbstractControl -> es el formControl
// Promise -> Le da la sincronía al método, es como un observable, pero más limitado aunque más directo (ver en gitHub en los apuntes)

// 2-> Crea un nuevo Observable que emite los valores que le proporcionas como argumentos y emite valores de manera síncrona

