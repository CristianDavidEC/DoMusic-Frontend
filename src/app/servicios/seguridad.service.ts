import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ServiceConfig} from '../config/service.config'
import { PerfilModel } from '../modelos/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {



  constructor(
    private http: HttpClient
  ) { }

  LoginUsuario(model: UsuarioModel):Observable<PerfilModel>{
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL_LOGIN}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  saveSession(sessionData: any): Boolean{
    console.log(sessionData)
    let currentSession = localStorage.getItem('session');
    if(currentSession){
      return false
    }else{
      sessionData.estaLogueado=true;
      
      let data:UsuarioModel={
        usuarioId: sessionData.data.usuarioId,
        nombreUsuario: sessionData.data.nombreUsuario,
        token: sessionData.token,
        estaLogueado: true
      }
      localStorage.setItem('session', JSON.stringify(data));
      return true;
    }
  }
}
