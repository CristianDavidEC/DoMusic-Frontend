import { Injectable } from '@angular/core';
import { PerfilModel} from '../modelos/perfil.model';
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
    return this.http.post<PerfilModel>(`${ServiceConfig.BASE_URL} ${this.entity}`, model, {
      headers: new HttpHeaders({

      })
    })

  } 

}

