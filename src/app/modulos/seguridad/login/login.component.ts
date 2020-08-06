import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { FormsConfig} from '../../../config/forms-config'
import { SeguridadService} from '../../../servicios/seguridad.service'
import { UsuarioModel} from '../../../modelos/usuario.model'
import { NgPlural } from '@angular/common';
import MD5 from 'crypto-js/md5'


declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidator: FormGroup;
  longitudMinima: number = FormsConfig.DOCUMENT_MIN;
  longitudContrasena: number = FormsConfig.CONTRASENA_MIN;

  constructor(
    private fb: FormBuilder,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(this.longitudMinima)]],
      contrasena: ['', [Validators.required, Validators.minLength(this.longitudContrasena)]],
     
    });
  }

  LoginUsuario(){

    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPerfilDatos();
        this.servicio.LoginUsuario(model).subscribe(
          data => {
            ShowNotificationMessage('Bienvenido');
            let res = this.servicio.saveSession(data)
          },
          err => {
            ShowNotificationMessage('El usuario o la contraseña ingresada son inválidos');
          }
        );      
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

  getPerfilDatos(): UsuarioModel{
    let model = new UsuarioModel();
    model.nombreUsuario = this.fgv.nombreUsuario.value;
    model.contrasena = MD5(this.fgv.contrasena.value).toString();
    console.log(model)

    return model;
  }
  

}
