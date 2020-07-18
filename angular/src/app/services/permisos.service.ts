import { Injectable } from '@angular/core';
import { Datarx } from '../models/datarx';
import { Usuario } from '../models/usuario';
import * as  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {
datarx:Datarx;
private token: string;
private usuarioLogin:Usuario;
private sessionID:string;
private rol : string;
  constructor() {
    this.token=null;
    this.usuarioLogin;
  }
decodificarToken(token: string): boolean {
  const decoded = jwt_decode(token);
  if (decoded) {
    this.token = token || null;
    this.usuarioLogin = decoded.data || null;
    this.sessionID = this.usuarioLogin.sessionID || null;
    this.rol= JSON.stringify(Object(this.usuarioLogin).rol)
    console.log(this.rol)
    delete this.usuarioLogin.sessionID;
    delete this.usuarioLogin.passw;
    return true;
  } else {
    return false;
  }
}

obtenerToken(): string {
  return this.token;
}

destruirToken(): void {
  this.token = null;
}

getUserLogin(): object {
  return this.usuarioLogin;
}

getUserRol(): string {
  return this.rol;
}

obtenerSession(): string {
  return this.sessionID;
}
}
