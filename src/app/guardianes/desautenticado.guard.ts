import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DesautenticadoGuard implements CanActivate {
  
  constructor(
    private servicio: SeguridadService,
    private router: Router
    ){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.servicio.existeSesion()){
      this.router.navigate(["/home"]);
      return false;
    }
    else{
      return true;
    }
  }
  
}
