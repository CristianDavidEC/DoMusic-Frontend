import { Injectable } from '@angular/core';
import { PerfilModel } from '../modelos/perfil.model';
import { AficionadoModel } from '../modelos/aficionado.model';
import { BandaModel } from '../modelos/banda.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service.config'
import { CargarArchivosModel } from '../modelos/cargarArchivos/cargaArchivos.model'


@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  constructor(
    private http: HttpClient
  ) { }

  CrearPerfil(model: PerfilModel): Observable<PerfilModel> {
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL_MUSICO}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  CrearAficionado(model: AficionadoModel): Observable<AficionadoModel> {
    return this.http.post<AficionadoModel>(`${ServiceConfig.BASE_URL_AFICIONADO}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  CrearBanda(model: BandaModel): Observable<BandaModel> {
    return this.http.post<BandaModel>(`${ServiceConfig.BASE_URL_BANDA}`, model, {
      headers: new HttpHeaders({
      })
    })
  }

  CargaArchivo(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_PUBLICACION}`, formData, {
      headers: new HttpHeaders({
      })
    });
  }

  CargaArchivoMusico(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_MUSICO}`, formData, {
      headers: new HttpHeaders({
      })
    });
  }

  CargaArchivoBanda(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_BANDA}`, formData, {
      headers: new HttpHeaders({
      })
    });
  }


  CargarArchivoAficionado(formData): Observable<CargarArchivosModel> {
    return this.http.post<CargarArchivosModel>(`${ServiceConfig.BASE_URL_CARGA_ARCHIVO_AFICIONADO}`,formData, {
      headers: new HttpHeaders({
      })
    });
  }
  
  getAllRecords():Observable<PerfilModel[]>{
    return this.http.get <PerfilModel[]>(`${ServiceConfig.BASE_URL_MUSICO}`);
  }

  getMusico(recordIdMusico:String){
    return this.http.get <PerfilModel>(`${ServiceConfig.BASE_URL_MUSICO}?filter[where][idMusicoProfesional]=${recordIdMusico}`);
  }

  getAllRecordsAficionado():Observable<AficionadoModel[]>{
    return this.http.get <AficionadoModel[]>(`${ServiceConfig.BASE_URL_AFICIONADO}`);
  }

}
