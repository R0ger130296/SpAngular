import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PermisosService } from '../services/permisos.service';

@Injectable()
export class AuthGuardService implements  CanActivate{

  constructor(
    private permisosService:PermisosService,
     private router: Router,
  ) { }

  canActivate():boolean{
 if (JSON.parse(this.permisosService.getUserRol()) !== "Administrador"){
  // console.log((this.permisosService.getUserRol())
          this.router.navigate(['**'])
          return false
 }else{
    return true
  }

}

}
