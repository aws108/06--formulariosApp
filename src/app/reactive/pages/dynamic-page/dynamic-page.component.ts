import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    favouriteGames: this.fb.array([//array de juegos
      ['Metal Gear', Validators.required], //Valores iniciales
      ['F1 championship', Validators.required],
    ]) 
  })

  constructor(private fb: FormBuilder){}
  
  // get favouriteGamesControls(){ //Manera 1 del HTML
  //   return this.myForm.get('favouriteGames') as FormArray;
  // }

  onSubmit(): void{
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value)
    this.myForm.reset();
  }
}
