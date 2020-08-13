import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DenunciasPModel } from 'src/app/modelos/parametros/denuncias-p.model';
import { SeguridadService } from '../seguridad.service';
import { ServiceConfig } from 'src/app/config/service.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CargarArchivosModel } from 'src/app/modelos/cargarArchivos/cargaArchivos.model';

@Injectable({
  providedIn: 'root'
})
export class DenunciasPService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) { 
    this.token = this.seguridadService.getToken();
  }

  getAllRecords():Observable<DenunciasPModel[]>{
    return this.http.get <DenunciasPModel[]>(`${ServiceConfig.BASE_URL_DENUNCIAS_PUBLI}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  getDenuncia(recordIdDenuncia:String){
    return this.http.get <DenunciasPModel>(`${ServiceConfig.BASE_URL_DENUNCIAS_PUBLI}/${recordIdDenuncia}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
  

  modificarRegistro(record:DenunciasPModel):Observable<DenunciasPModel>{
    return this.http.put<DenunciasPModel>(`${ServiceConfig.BASE_URL_DENUNCIAS_PUBLI}/${record.idDenunciaXPubli}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BASE_URL_DENUNCIAS_PUBLI}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarNuevoRegistro(record:DenunciasPModel):Observable<DenunciasPModel>{
    return this.http.post<DenunciasPModel>(`${ServiceConfig.BASE_URL_DENUNCIAS_PUBLI}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  CargarArchivo(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO}`, formData, {
      headers: new HttpHeaders({
      })
    });
  }
}
