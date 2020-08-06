import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from './servicios/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoMusicNG';
  estaLogueado: Boolean= false;

  subscription: Subscription;

  constructor(private service: SeguridadService) { }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data =>{
      console.log(data.estaLogueado)
      this.estaLogueado = data.estaLogueado;
    });
  }
}
