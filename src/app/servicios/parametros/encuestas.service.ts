import { Injectable } from '@angular/core';
import { EncuestasModule } from 'src/app/modulos/encuestas/encuestas.module';
import { ServiceConfig } from 'src/app/config/service.config';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  token: String = "";

  constructor(
    private http: HttpClient,
  ) { }

  guardarNuevoRegistro(record:EncuestasModule):Observable<EncuestasModule>{
    return this.http.post<EncuestasModule>(`${ServiceConfig.BESE_URL_PUBLICACION}`, record, {
      headers:new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }
}
