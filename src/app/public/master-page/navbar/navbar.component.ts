import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estaLogueado: Boolean= false;
  role: String = "";
  subscription: Subscription;
  perfilUsuario: PerfilModel;

  constructor(
    private service: SeguridadService,
    private servicePefil: PerfilService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.subscription= this.service.getUserData().subscribe(data =>{
      this.estaLogueado = data.estaLogueado;
      this.role = data.rol;
    });

    this.getPerfilMusico();
  }


  getPerfilMusico(){
    let idPerfil = this.service.getIdPerfil().toString();
    this.servicePefil.getMusicoP(idPerfil).subscribe(records => {
      this.perfilUsuario = records;
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }


}
