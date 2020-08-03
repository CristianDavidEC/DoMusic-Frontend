import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import{PerfilService} from '../../../servicios/perfil.service'
import{BandaModel} from '../../../../modelos/banda.model'

@Component({
  selector: 'app-crear-banda',
  templateUrl: './crear-banda.component.html',
  styleUrls: ['./crear-banda.component.css']
})
export class CrearBandaComponent implements OnInit {

  fgValidator:FormGroup;


  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      listaIntegrantes: [Validators.required],
      generoMusical: [Validators.required],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fotoPerfil: [],
      fechaCreacion: ['', [Validators.required]],
      ciudad: [Validators.required],
      seguidores: [],
      seguidos: [],
      
    });
  }

  crearBanda(){
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

  getPerfilDatos(): BandaModel{
    let model = new BandaModel();
    model.nombre = this.fgv.nombre.value;
    model.listaIntegrantes = this.fgv.listaIntegrantes.value;
    model.generoMusical = this.fgv.generoMusical.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`
    model.correo = this.fgv.correo.value;
    model.fotoPerfil = this.fgv.fotoPerfil.value;
    model.fechaCreacion = this.fgv.fechaCreacion.value;
    model.ciudad = this.fgv.ciudad.value;
    model.seguidores = this.fgv.seguidores.value;
    model.seguidos = this.fgv.seguidos.value;


    return model;
  }

}
