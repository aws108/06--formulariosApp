import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validators';

import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern )  ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidatorService() ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ this.emailValidatorService ]], //1
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    // name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ]],
    // email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern) ]],
    // username: ['', [ Validators.required, customValidators.cantBeStrider ]], // se le está pasando la referencia a la función
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  }, {
    validators: [ // 2 
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2')
    ]
  });


  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) {}

  isValidField( field: string ) {
    return this.validatorsService.isValidField( this.myForm, field ); // devolverá si hay un error
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}

// 1-> Recuerda que esta estructura se hace porque el servicio aporta el lado asíncrono de la validación
// 2-> Validar que las dos contraseñas sean iguales. Por aquí se pasará implícito todo el formulario. Tienes acceso al form y sus campos