import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeModel } from 'src/app/modelos/parametros/mensaje.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'src/app/config/service.config';
import { SeguridadService } from '../seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  token: String = "";

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) { 
    this.token = this.seguridadService.getToken();
  }

  guardarNuevoRegistro(record:MensajeModel):Observable<MensajeModel>{
    return this.http.post<MensajeModel>(`${ServiceConfig.BESE_URL_MENSAJE}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
