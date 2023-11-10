import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const televisor = {
  name: 'Samsung',
  price: 800,
  inStorage: 7,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{
  // myForm: FormGroup = new FormGroup({ //Manera 1
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0)
  // });

  myForm: FormGroup = this.fb.group({
    // name: ['', [], []], //1
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]], //2
    price: [null, [Validators.required, Validators.min(0)]], //3
    inStorage: [null, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder){} // Manera 2

  ngOnInit(): void {
    // this.myForm.reset(televisor) //5
  }

  onSave(): void {
    if(this.myForm.invalid){return;}
    console.log(this.myForm.value); 
    this.myForm.reset(); //4 
  }

}


// 1-> Valor inicial, validador síncrono, validador asíncrono
// 2-> Con los validadores se pueden hacer cosas como esta: ['', [Validators.minLength(5)]] -> Por ejemplo, que tenga un mínimo de 3 letras
// 3-> min es el valor mínimo
// 4-> resetea el formulario cuando ya has guardado. Una vez se hace, deja los campos a null. Si se quiere dejar como hace el profe, dejar el campo a 0:
// this.myForm.reset({price: 0, inStorage: 0});
// 5-> Inicializa el formulario. Eso se hace en el caso de que a una web le llegue info de algún sitio o backend y la tenga que mostrar en un formulario. 