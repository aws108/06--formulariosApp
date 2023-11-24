import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    favoriteGames: this.fb.array([//array de juegos
      ['Metal Gear', Validators.required], //Valores iniciales
      ['F1 championship', Validators.required],
    ]) 
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  // get favoriteGamesControls(){ //Manera 1 del HTML
  //   return this.myForm.get('favoriteGames') as FormArray;
  // }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) { // El formulario no contiene el name? Más info en basic-page.ts
      return null;
    }
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) { 
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `El campo requiere mínimo ${errors['minlength'].requiredLength} carácteres.`;
      }
    }
    return null;
  }

  isValidFieldInArray(i: number): any {
    const favoriteGamesArray = this.myForm.get('favoriteGames') as FormArray;
    return favoriteGamesArray.controls[i].errors && favoriteGamesArray.controls[i].touched;
  }

  onAddFavorites(): void {
    // Se ha creado un formulario para agregar favoritos
    if (this.newFavorite.invalid) {return;}
    const newGame = this.newFavorite.value;

    const favoriteGamesArray = this.myForm.get('favoriteGames') as FormArray;
    favoriteGamesArray.push(
      this.fb.control(newGame, Validators.required)
    );
    this.newFavorite.reset();
  }

  onDeleteFavorite(i: number): void {
    const favoriteGamesArray = this.myForm.get('favoriteGames') as FormArray;
    favoriteGamesArray.removeAt(i); // elimina elementos del array de favoriteGames, por ejemplo, el de f1
  }

  onSubmit(): void{
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
