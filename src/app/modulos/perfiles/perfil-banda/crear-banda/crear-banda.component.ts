import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{PerfilService} from '../../../../servicios/perfil.service';
import{BandaModel} from '../../../../modelos/banda.model';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-banda',
  templateUrl: './crear-banda.component.html',
  styleUrls: ['./crear-banda.component.css']
})
export class CrearBandaComponent implements OnInit {

  fgValidator:FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      listaIntegrantes: [Validators.required],
      generoMusical: [Validators.required],
      codigoPais: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaCreacion: ['', [Validators.required]],
      ciudad: [Validators.required]
    });
  }

  crearBanda(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario Invalido')
    }else{
        let model=this.getPerfilDatos();
        this.servicio.CrearBanda(model).subscribe(data => {
          console.log(data);
          if(data){
            alert('Registro exitoso, consulta tu contraseña en el mesaje de texto');
          }
          else{
            alert('Error!');
          }
        });      
    }
  }
  get fgv(){
    return this.fgValidator.controls;
  }

  getPerfilDatos(): BandaModel{
    let model = new BandaModel();
    model.nombre = this.fgv.nombre.value;
    model.listaIntegrantes = [this.fgv.listaIntegrantes.value];
    model.generoMusical = this.fgv.generoMusical.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`;
    model.correo = this.fgv.correo.value;
    model.fechaCreacion = this.fgv.fechaCreacion.value;
    model.ciudad = this.fgv.ciudad.value;
    model.fotoPerfil = "";
    model.seguidores = [""];
    model.seguidos = [""];

    return model;
  }

}
