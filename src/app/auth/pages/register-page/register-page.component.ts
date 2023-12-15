import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required] ],
    email: ['', [Validators.required] ],
    username: ['', [Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],
  });

  constructor(private fb: FormBuilder){}

  onSubmit(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
  }

  isValidField(field: string): any{

 }

}
