import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { ModulosComponent } from './modulos.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModulosRoutingModule } from './modulos.routing.module'
import { FromEventComponent } from './from-event/from-event.component';


@NgModule({
  declarations: [
    IntervalTimeComponent,
    ModulosComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulosRoutingModule
  ],
  exports: [
    IntervalTimeComponent,
    FromEventComponent
  ]
})
export class ModulosModule { }
