import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorModel} from '../../../modelos/administrador.model'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  fgValidator:FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      tipo: [Validators.required],
      celular: ['', [Validators.required, Validators.minLength(8)]],      
      codigoPais: [Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

    
  crearPerfil(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model= this.getPerfilDatos();
        this.servicio.CrearAdministrador(model).subscribe(data => {
          console.log(data);
          if(data){
            ShowNotificationMessage('Registro exitoso, consulta tu contraseña en un mensaje de texto a tu celular');
            this.router.navigate(['/seguridad/login']);
          }
          else{
            ShowNotificationMessage('Error!');
          }
        });      
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

  getPerfilDatos(): AdministradorModel{
    let model = new AdministradorModel();
    model.nombre = this.fgv.nombre.value;
    model.tipo = this.fgv.tipo.value;
    model.celular = `${this.fgv.codigoPais.value}${this.fgv.celular.value}`;
    model.correo = this.fgv.correo.value;
    return model;
  }
}
