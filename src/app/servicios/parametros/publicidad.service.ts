import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { PublicidadModel } from 'src/app/modelos/parametros/publicidad.model';
import { ServiceConfig } from 'src/app/config/service.config';
import { Observable } from 'rxjs';
import { CargarArchivosModel } from 'src/app/modelos/cargarArchivos/cargaArchivos.model';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService

  ) { 
    this.token = this.seguridadService.getToken();
  }

  getAllRecords():Observable<PublicidadModel[]>{
    return this.http.get <PublicidadModel[]>(`${ServiceConfig.BESE_URL_PUBLICIDAD}`);
  }

  getPublicidad(recordIdPublicidad:String):Observable<PublicidadModel>{
    return this.http.get <PublicidadModel>(`${ServiceConfig.BESE_URL_PUBLICIDAD}/${recordIdPublicidad}`);
  }

  modificarRegistro(record:PublicidadModel):Observable<PublicidadModel>{
    return this.http.put<PublicidadModel>(`${ServiceConfig.BESE_URL_PUBLICIDAD}/${record.idPublicidad}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BESE_URL_PUBLICIDAD}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarNuevoRegistro(record:PublicidadModel):Observable<PublicidadModel>{
    return this.http.post<PublicidadModel>(`${ServiceConfig.BESE_URL_PUBLICIDAD}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  cargaArchivo(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_PUBLICIDAD}`, formData, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
