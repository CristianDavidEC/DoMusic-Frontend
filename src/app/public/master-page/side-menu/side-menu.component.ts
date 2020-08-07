import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  estaLogueado: Boolean= false;

  subscription: Subscription;
  role: String = "";

  constructor(private service: SeguridadService) { }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data =>{
      this.estaLogueado = data.estaLogueado;
      this.role = data.rol;
    });
  }

}
