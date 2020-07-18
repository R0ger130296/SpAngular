import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guard/auth-guard.service'

const routes: Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  {path: 'no-found', loadChildren: () => import('./no-found/no-found.module').then(m => m.NoFoundModule) },
  {
    path: '**',
    redirectTo: 'no-found',
  },
  {
  path: '',
  component: LoginComponent,
  canActivate: [AuthGuardService] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
