import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
import { CambiarContrasenaModel } from 'src/app/modelos/seguridad/cambiar.contrasena.model';

import MD5 from 'crypto-js/md5'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent implements OnInit {

  fgValidator: FormGroup;
  longitudMinima: number = FormsConfig.DOCUMENT_MIN;
  longitudContrasena: number = FormsConfig.CONTRASENA_MIN;

  constructor(
    private fb: FormBuilder,
    private servicio: SeguridadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({

      contrasenaActual: ['', [Validators.required]],
      contrasenaNueva: ['', [Validators.required]],
      contrasenaNueva2: ['', [Validators.required]],
    });
  }

  cambiarContrasena(){

    if(this.fgValidator.invalid || this.fgv.contrasenaNueva.value != this.fgv.contrasenaNueva2.value){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getCambiarContrasenaData();
        this.servicio.CambiarContrasena(model).subscribe(
          data => {
            ShowNotificationMessage('Tu contraseña ha sido Cambiada Exitosamente');
            this.router.navigate(["/seguridad/login"]);
          },
          err => {
            ShowNotificationMessage('Error al procesar los datos');
          }
        );      
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

  getCambiarContrasenaData(): CambiarContrasenaModel {
    let model = new CambiarContrasenaModel();
    model.id = this.servicio.getUsuarioId();
    model.contrasenaActual = MD5(this.fgv.contrasenaActual.value).toString();
    model.contrasenaNueva =MD5(this.fgv.contrasenaNueva.value).toString();

    return model;
  }
}
