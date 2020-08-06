import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ServiceConfig} from '../config/service.config'

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(
    private http: HttpClient
  ) { }

  LoginUsuario(model: UsuarioModel):Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${ServiceConfig.BASE_URL_LOGIN}`, model, {
      headers: new HttpHeaders({
      })
    })
  }
}
