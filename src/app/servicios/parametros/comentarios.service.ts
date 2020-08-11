import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { ComentarioModel} from '../../modelos/parametros/comentario.model'
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';


@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService

  ) { 
    this.token = this.seguridadService.getToken();
  }

  

  getPublicacion(recordIdPublicacion:String):Observable<ComentarioModel>{
    return this.http.get <ComentarioModel>(`${ServiceConfig.BESE_URL_COMENTARIO}/${recordIdPublicacion}`);
  }

  /* modificarRegistro(record:ComentarioModel):Observable<ComentarioModel>{
    return this.http.put<ComentarioModel>(`${ServiceConfig.BESE_URL_COMENTARIO}/${record.idPublicacion}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  } */

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BESE_URL_COMENTARIO}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarComentario(record:ComentarioModel):Observable<ComentarioModel>{
    return this.http.post<ComentarioModel>(`${ServiceConfig.BESE_URL_COMENTARIO}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  getComentario(id:String){
    return this.http.get <ComentarioModel>(`${ServiceConfig.BESE_URL_COMENTARIO}?filter[where][publicacionId]=${id}`);

  }

  getComentarioOb(id:String): Observable<ComentarioModel[]>{
    return this.http.get <ComentarioModel[]>(`${ServiceConfig.BESE_URL_COMENTARIO}?filter[where][publicacionId]=${id}`);

  }

  getAllRecords():Observable<ComentarioModel[]>{
    return this.http.get <ComentarioModel[]>(`${ServiceConfig.BESE_URL_COMENTARIO}`);
  }
}
