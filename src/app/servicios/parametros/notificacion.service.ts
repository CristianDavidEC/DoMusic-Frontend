import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { ServiceConfig } from 'src/app/config/service.config';
import { Observable } from 'rxjs';
import {NotificacionModel} from '../../modelos/parametros/notificacion.model'

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService

  ) { 
    this.token = this.seguridadService.getToken();
  }

  

  getNotificacion(recordIdNotificacion:String):Observable<NotificacionModel>{
    return this.http.get <NotificacionModel>(`${ServiceConfig.BASE_URL_NOTIFICACION}/${recordIdNotificacion}`);
  }

  /* modificarRegistro(record:NotificacionModel):Observable<NotificacionModel>{
    return this.http.put<NotificacionModel>(`${ServiceConfig.BESE_URL_COMENTARIO}/${record.idPublicacion}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  } */

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BASE_URL_NOTIFICACION}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarNotificacion(record:NotificacionModel):Observable<NotificacionModel>{
    return this.http.post<NotificacionModel>(`${ServiceConfig.BASE_URL_NOTIFICACION}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  getNotif(id:String){
    return this.http.get <NotificacionModel>(`${ServiceConfig.BASE_URL_NOTIFICACION}?filter[where][idNotificacion]=${id}`);

  }

  getNotifOb(id:String): Observable<NotificacionModel[]>{
    return this.http.get <NotificacionModel[]>(`${ServiceConfig.BASE_URL_NOTIFICACION}?filter[where][idNotificacion]=${id}`);

  }

  getAllRecords():Observable<NotificacionModel[]>{
    return this.http.get <NotificacionModel[]>(`${ServiceConfig.BASE_URL_NOTIFICACION}`);
  }
}

