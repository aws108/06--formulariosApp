import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'template', loadChildren: () => import('./template/template.module').then(
    mod => mod.TemplateModule) },
  {path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(
    mod => mod.ReactiveModule) },
  {path: '**', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
