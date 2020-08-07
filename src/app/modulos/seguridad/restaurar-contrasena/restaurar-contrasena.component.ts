import { Component, OnInit } from '@angular/core';
import { FormsConfig } from 'src/app/config/forms-config';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/modelos/usuario.model';
import { restaurarContrasenaModel } from 'src/app/modelos/seguridad/restaura-contrana.model';
import MD5 from 'crypto-js/md5'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-restaurar-contrasena',
  templateUrl: './restaurar-contrasena.component.html',
  styleUrls: ['./restaurar-contrasena.component.css']
})
export class RestaurarContrasenaComponent implements OnInit {

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
      nombreUsuario: ['', [Validators.required, Validators.minLength(this.longitudMinima)]],
      tipo: ['', [Validators.required]],
    });
  }

  restaurarContrasena(){

    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getRecuperarContrasenaData();
        this.servicio.recuperearContrasena(model).subscribe(
          data => {
            ShowNotificationMessage('Tu contraseña ha sido restaurada, por favor verifica tu telefono');
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

  getRecuperarContrasenaData(): restaurarContrasenaModel {
    let model = new restaurarContrasenaModel();
    model.nombreUsuario = this.fgv.nombreUsuario.value;
    model.tipo =parseInt(this.fgv.tipo.value);

    return model;
  }

}
