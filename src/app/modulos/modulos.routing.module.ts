import { Routes, RouterModule } from "@angular/router";
import { ModulosComponent } from './modulos.component';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { NgModule } from '@angular/core';
import { FromEventComponent } from './from-event/from-event.component';

const modulosRoutes: Routes = [
  {
    path: '',
    component: ModulosComponent,
    children: [
      { path: 'intervaltime', component: IntervalTimeComponent },
      { path: 'fromevent', component: FromEventComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(modulosRoutes)],
  exports: [RouterModule]
})

export class ModulosRoutingModule {}

