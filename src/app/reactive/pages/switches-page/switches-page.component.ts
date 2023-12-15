import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue], // debe ser true para ser validado
  })

  person = {};

  constructor(private fb: FormBuilder){}

  onSave(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    const {termsAndConditions, ...newPerson} = this.myForm.value; //1
    this.person = newPerson;
  }

  isValidField(field: string): boolean | null{
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
 }

}


// 1-> Se hace para eliminar la propiedad termsAndConditions porque si se enviara a una BD, esta propiedad no estaría incluid en la BD y daría problemas
//     newPerson contendrá todas las propiedades menos termsAndConditions. Aparecerán sus datos en el html