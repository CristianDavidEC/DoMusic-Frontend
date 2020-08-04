import { Injectable } from '@angular/core';
import { PerfilModel} from '../modelos/perfil.model';
import { AficionadoModel } from '../modelos/aficionado.model';
import { BandaModel } from '../modelos/banda.model';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServiceConfig} from '../config/service.config'

@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  entity: String = 'perfil'
  constructor(
    private http: HttpClient
  ) { }

  CrearPerfil(model: PerfilModel):Observable<PerfilModel>{
    console.log("Servicio del perfil")
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL} ${this.entity}`, model, {
      headers: new HttpHeaders({
      })
    })
  };
  
   CrearAficionado(model:AficionadoModel):Observable<AficionadoModel>{
    return this.http.post<AficionadoModel>(`${ServiceConfig.BASE_URL} ${this.entity}`, model, {
      headers: new HttpHeaders({
      })
    })
  };

  CrearBanda(model: BandaModel):Observable<BandaModel>{
    return this.http.post<BandaModel>(`${ServiceConfig.BASE_URL} ${this.entity}`, model, {
      headers: new HttpHeaders({
      })
    })
  };
}

