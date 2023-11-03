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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //1 
  exports: [RouterModule]
})
export class TemplateRoutingModule { }



// 1-> importas rutas hijas para luego exportarlas. Podrías no exportarlas porque ya está a nivel global 