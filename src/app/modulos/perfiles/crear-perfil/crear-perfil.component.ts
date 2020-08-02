import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{PerfilService} from '../../../servicios/perfil.service'
import{PerfilModel} from '../../../modelos/perfil.model'

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
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
      codigoPais: ['', Validators.required, Validators.minLength(2), Validators.maxLength(4)],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      tipoPerfil: [Validators.required],
      pais: [Validators.required]
    });
  }

  crearPerfil(){
    console.log(this.fgValidator)

    if(this.fgValidator.invalid){
      alert('Formulario inválido');
    }else{
        let model=this.getPerfilDatos();
        // this.servicio.CrearPerfil(model);
      
    }
  }
  get fgv(){
    return this.fgValidator.controls;
  }

  getPerfilDatos(): PerfilModel{
    let model = new PerfilModel();
    model.nombre = this.fgv.nombre.value;
    model.correo = this.fgv.correo.value;
    model.fecha = this.fgv.fecha.value;
    model.telefono = `${this.fgv.codigoPais.value} ${this.fgv.telefono.value}`;
    model.tipoPerfil = this.fgv.tipoPerfil.value;
    model.pais = this.fgv.pais.value;

    return model;
  }
}
