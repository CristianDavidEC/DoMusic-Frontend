import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { PublicacionModel} from '../../modelos/parametros/publicacion.model'
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/config/service.config';
import { SeguridadService } from '../seguridad.service';

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

  guardarNuevoRegistro(record:PublicacionModel):Observable<PublicacionModel>{
    return this.http.post<PublicacionModel>(`${ServiceConfig.BESE_URL_PUBLICACION}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

}
