import { Routes, RouterModule } from "@angular/router";
import { ModulosComponent } from './modulos.component';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { NgModule } from '@angular/core';

const modulosRoutes: Routes = [
  {
    path: '',
    component: ModulosComponent,
    children: [
      { path: 'intervaltime', component: IntervalTimeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(modulosRoutes)],
  exports: [RouterModule]
})

export class ModulosRoutingModule {}

