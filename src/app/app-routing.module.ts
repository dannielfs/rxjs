import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalTimeComponent } from './modulos/interval-time/interval-time.component';


const routes: Routes = [
  { path: '', loadChildren: './modulos/modulos.module#ModulosModule' },
  { path: 'modulos', loadChildren: './modulos/modulos.module#ModulosModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
