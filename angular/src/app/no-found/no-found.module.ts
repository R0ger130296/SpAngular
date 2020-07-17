import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoFoundRoutingModule } from './no-found-routing.module';
import { NoFoundComponent } from './no-found.component';


@NgModule({
  declarations: [NoFoundComponent],
  imports: [
    CommonModule,
    NoFoundRoutingModule
  ]
})
export class NoFoundModule { }
