import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [MenuComponent, UsuariosComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule
  ]
})
export class MenuModule { }
