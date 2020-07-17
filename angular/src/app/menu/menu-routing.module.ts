import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegisterUsersComponent } from './register-users/register-users.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'register-users', component:RegisterUsersComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
