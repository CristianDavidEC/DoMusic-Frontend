import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PerfilService} from '../../../servicios/perfil.service'
import {PerfilModel} from '../../../modelos/perfil.model'
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

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
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      tipo: [Validators.required],
      generoMusica: [Validators.required],
      codigoPais: [Validators.required],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      ciudad: [Validators.required],
      genero: [Validators.required]
    });
  }

  crearPerfil(){
    console.log(this.fgValidator)

    if(this.fgValidator.invalid){
      alert('Formulario inválido');
    }else{
        let model=this.getPerfilDatos();
        this.servicio.CrearPerfil(model).subscribe(data => {
          console.log(data);
          if(data){
            alert('Registro exitoso, consulta tu contraseña en tu correo');
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

  getPerfilDatos(): PerfilModel{
    let model = new PerfilModel();
    model.idMusicoProfesional = "";
    model.nombre = this.fgv.nombre.value;
    model.apellido = this.fgv.apellido.value;
    model.tipo = this.fgv.tipo.value;
    model.generoMusica = this.fgv.generoMusica.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`
    model.correo = this.fgv.correo.value;
    model.fechaNacimiento = this.fgv.fechaNacimiento.value;
    model.ciudad = this.fgv.ciudad.value;
    model.genero = this.fgv.genero.value;
    model.fotoPerfil = "//";
    model.seguidores = ["//"];
    model.seguidos = ["//"];

    return model;
  }
}
