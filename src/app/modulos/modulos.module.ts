import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalTimeComponent } from './interval-time/interval-time.component';
import { ModulosComponent } from './modulos.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ModulosRoutingModule } from './modulos.routing.module'


@NgModule({
  declarations: [IntervalTimeComponent, ModulosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModulosRoutingModule
  ],
  exports: [
    IntervalTimeComponent
  ]
})
export class ModulosModule { }
