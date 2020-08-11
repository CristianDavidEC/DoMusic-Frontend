import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare const ShowNotificationMessage: any;

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {

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

    this.perfilUsuario =new PerfilModel();
    this.getPerfilMusico();
  }

  getPerfilMusico(){
    if(this.service.getSession()){
    let idPerfil = this.service.getIdPerfil().toString();
    this.servicePefil.getMusicoP(idPerfil).subscribe(records => {
      this.perfilUsuario = records;
      console.log(this.perfilUsuario)
      setTimeout(() => {
        this.spinner.hide();
      },1000)
    },
    error => {ShowNotificationMessage ("Hubo un problema con la comunicación en el Backend")})
  }
  console.log("no hay session")
}

}
