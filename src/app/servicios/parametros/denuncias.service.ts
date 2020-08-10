import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeguridadService } from '../seguridad.service';
import { Observable } from 'rxjs';
import { DenunciasModel} from '../../modelos/parametros/denuncia.model'
import { ServiceConfig } from 'src/app/config/service.config';
import { CargarArchivosModel } from 'src/app/modelos/cargarArchivos/cargaArchivos.model';

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService

  ) { 
    this.token = this.seguridadService.getToken();
  }

  getAllRecords():Observable<DenunciasModel[]>{
    return this.http.get <DenunciasModel[]>(`${ServiceConfig.BASE_URL_DENUNCIAS}`);
  }

  getPublicidad(recordIdDenuncia:String):Observable<DenunciasModel>{
    return this.http.get <DenunciasModel>(`${ServiceConfig.BASE_URL_DENUNCIAS}/${recordIdDenuncia}`);
  }

  modificarRegistro(record:DenunciasModel):Observable<DenunciasModel>{
    return this.http.put<DenunciasModel>(`${ServiceConfig.BASE_URL_DENUNCIAS}/${record.idDenunciaXusuario}`, record,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  eliminarRegistro(recordId:String):Observable<any>{
    return this.http.delete<any>(`${ServiceConfig.BASE_URL_DENUNCIAS}/${recordId}`,{
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  guardarNuevoRegistro(record:DenunciasModel):Observable<DenunciasModel>{
    return this.http.post<DenunciasModel>(`${ServiceConfig.BASE_URL_DENUNCIAS}`, record, {
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
