import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AficionadoModel} from '../../../../modelos/aficionado.model'
import { PerfilService} from '../../../../servicios/perfil.service'

@Component({
  selector: 'app-crear-aficionado',
  templateUrl: './crear-aficionado.component.html',
  styleUrls: ['./crear-aficionado.component.css']
})
export class CrearAficionadoComponent implements OnInit {

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
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: [Validators.required],   
      fechaNacimiento: ['', [Validators.required]],
      genero: [Validators.required],
      codigoPais: [Validators.required],
      temasInteres: [Validators.required],   
    });
  }

  crearAficionado(){
    if(this.fgValidator.invalid){
      alert('Formulario inválido');
    }else{
        let model=this.getPerfilDatos();
        this.servicio.CrearAficionado(model).subscribe(data => {
          console.log(data);
          if(data){
            alert('Registro exitoso, consulta tu contraseña en un mensaje de Texto a tu celular');
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

  getPerfilDatos(): AficionadoModel{
    let model = new AficionadoModel();
    model.nombre = this.fgv.nombre.value;
    model.apellido = this.fgv.apellido.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`
    model.correo = this.fgv.correo.value;
    model.ciudad = this.fgv.ciudad.value;
    model.fechaNacimiento = this.fgv.fechaNacimiento.value;    
    model.genero = this.fgv.genero.value;
    model.temasInteres = this.fgv.temasInteres.value;
    model.fotoPerfil = "";
    model.seguidores = [""];
    model.seguidos = [""];
    model.grupoXAficionadoId = "";

    return model;
  }

}
