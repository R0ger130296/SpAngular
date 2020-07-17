import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegisterUsersComponent } from './register-users/register-users.component';


@NgModule({
  declarations: [MenuComponent, UsuariosComponent, RegisterUsersComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule
  ]
})
export class MenuModule { }
