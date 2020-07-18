import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
// Import library module
@NgModule({
  declarations: [MenuComponent, UsuariosComponent, RegisterUsersComponent, EditUserComponent ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  
})
export class MenuModule { }
