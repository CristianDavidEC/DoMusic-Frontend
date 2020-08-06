import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ServiceConfig} from '../config/service.config'
import { PerfilModel } from '../modelos/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {


  userData = new BehaviorSubject<UsuarioModel>(new UsuarioModel());

  constructor(
    private http: HttpClient
  ) {
    this.verificarSesionActiva();
   }

  verificarSesionActiva(){
    let sesionActual = this.getSession();
    console.log(sesionActual);
    if(sesionActual){
      let userData = JSON.parse(sesionActual);
      this.setUserData(userData);
    }
  }

  setUserData(value: UsuarioModel){
    this.userData.next(value);
  }

  getUserData(){
    return this.userData.asObservable();
  }

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
      console.log("Ya existe")
      return false
    }else{
      sessionData.estaLogueado=true;
      
      let data:UsuarioModel={
        
        idUsuario: sessionData.data.idUsuario,
        musicoProfesionalId: sessionData.data.musicoProfesionalId,
        nombreUsuario: sessionData.data.nombreUsuario,
        token: sessionData.token,
        rol:sessionData.data.rol,
        estaLogueado: true
      }
      localStorage.setItem('session', JSON.stringify(data));
      this.setUserData(data)
      return true;
    }
  }

  getSession(){
    let currentSession = localStorage.getItem('session');
    console.log(currentSession)
    return currentSession
  }

  Logout(){
    localStorage.removeItem('session');
    this.setUserData(new UsuarioModel());

  }

}
