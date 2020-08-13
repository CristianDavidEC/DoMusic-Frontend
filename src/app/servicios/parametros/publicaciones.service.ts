import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { PublicacionModel} from '../../modelos/parametros/publicacion.model'
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { SeguridadService } from '../seguridad.service';
import { CargarArchivosModel} from '../../modelos/cargarArchivos/cargaArchivos.model'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService

  ) { 
    this.token = this.seguridadService.getToken();
  }

  getAllRecords():Observable<PublicacionModel[]>{
    return this.http.get <PublicacionModel[]>(`${ServiceConfig.BESE_URL_PUBLICACION}`);
  }

  getPublicacion(recordIdPublicacion:String):Observable<PublicacionModel>{
    return this.http.get <PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}/${recordIdPublicacion}`);
  }

  getPubli(recordIdPublicacion:String){
    return this.http.get <PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}/${recordIdPublicacion}`);
  }

  getPublicacion2(recordIdPublicacion:String):Observable<PublicacionModel>{
    return this.http.get <PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}/${recordIdPublicacion}`);
  }

  getPublicacionUsuario(idUsuario:String):Observable<PublicacionModel>{
    return this.http.get <PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}/?filter[where][idUsuario]=${idUsuario}`);
  }

  modificarRegistro(record:PublicacionModel):Observable<PublicacionModel>{
    return this.http.put<PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}/${record.idPublicacion}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BESE_URL_PUBLICACION}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarNuevoRegistro(record:PublicacionModel):Observable<PublicacionModel>{
    return this.http.post<PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  CargaArchivo(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_PUBLICACION}`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
