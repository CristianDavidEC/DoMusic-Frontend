import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  estaLogueado: Boolean= false;
  role: String = "";
  subscription: Subscription;

  constructor(private service: SeguridadService) { }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data =>{
      this.estaLogueado = data.estaLogueado;
      this.role = data.rol;
    });
  }

}
