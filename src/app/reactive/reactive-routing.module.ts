import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basicos', component: BasicosComponent},
      {path: 'dinamicos', component: DinamicosComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: '**', redirectTo: 'basicos'}
    ] //1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }

//1-> Las rutas children son las rutas que pertenecen a este módulo