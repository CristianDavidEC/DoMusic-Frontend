import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
