import { Injectable } from '@angular/core';
import{PerfilModel} from '../modelos/perfil.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private http: HttpClient
  ) { }

   CrearPerfil(model: PerfilModel){
    return this.http.post('http://localhost:3000/musico-profesionals', model, {
      headers: new HttpHeaders({

      })
    })

  } 

}
