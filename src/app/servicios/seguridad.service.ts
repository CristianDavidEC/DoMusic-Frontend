import { Injectable } from '@angular/core';
import { UsuarioModel } from '../modelos/usuario.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ServiceConfig} from '../config/service.config'
import { PerfilModel } from '../modelos/perfil.model';
import { restaurarContrasenaModel } from '../modelos/seguridad/restaura-contrana.model';
import { CambiarContrasenaModel } from '../modelos/seguridad/cambiar.contrasena.model';
import { PerfilesModule } from '../modulos/perfiles/perfiles.module';

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

  get(id:String){
    return this.http.get<PerfilesModule>(`${ServiceConfig.BASE_URL_MUSICO}/id`)
  }

  LoginUsuario(model: UsuarioModel):Observable<PerfilModel>{
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL_LOGIN}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  recuperearContrasena(model: restaurarContrasenaModel): Observable<Boolean>{
    return this.http.post<Boolean>(`${ServiceConfig.BESE_URL_RECUPERACONTRASENA}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  CambiarContrasena(model: CambiarContrasenaModel): Observable<Boolean>{
    return this.http.post<Boolean>(`${ServiceConfig.BESE_URL_CAMBIARCONTRASENA}`, model, {
      headers: new HttpHeaders({
        Autorizacion: `Bearer ${this.getToken()}`
      })
    })
  }

  saveSession(sessionData: any): Boolean{
    let currentSession = localStorage.getItem('session');
    if(currentSession){
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
    return currentSession
  }

  existeSesion():Boolean{
    return (this.getSession()) ? true: false
  }

  esUsuario(rolId):Boolean{
    let currentSession = this.getSession();
    if (JSON.parse(currentSession).rol == rolId){
      return true;
    }
  }
   
  getToken():String{
    let currentSession = this.getSession();
    return JSON.parse(currentSession).token;
  }

  getUsuarioId():String{
    let currentSession = this.getSession();
    return JSON.parse(currentSession).idUsuario;
  }

  getRol():String{
    let currentSession = this.getSession();
    return JSON.parse(currentSession).rol;
  }

  getIdPerfil():String{
    let session = this.getSession();
    return JSON.parse(session).musicoProfesionalId;
  }

  getIdPerfilAdmin():String{
    let session = this.getSession();
    return JSON.parse(session).administradorId;
  }

  Logout(){
    localStorage.removeItem('session');
    this.setUserData(new UsuarioModel());
  }

}
