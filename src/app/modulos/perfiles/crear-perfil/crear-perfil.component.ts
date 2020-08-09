import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PerfilService} from '../../../servicios/perfil.service'
import {PerfilModel} from '../../../modelos/perfil.model'
import { ActivatedRoute, Router } from '@angular/router';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})

export class CrearPerfilComponent implements OnInit {

  fgValidator:FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      tipo: [Validators.required],
      generoMusica: [Validators.required],
      codigoPais: [Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      ciudad: [Validators.required],
      genero: [Validators.required],
      image:['', [Validators.required]],
    });
  }

  crearPerfil(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPerfilDatos();
        this.servicio.CrearPerfil(model).subscribe(data => {
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

  getPerfilDatos(): PerfilModel{
    let model = new PerfilModel();
    model.nombre = this.fgv.nombre.value;
    model.apellido = this.fgv.apellido.value;
    model.tipo = this.fgv.tipo.value;
    model.generoMusica = this.fgv.generoMusica.value;
    model.celular = `${this.fgv.codigoPais.value}${this.fgv.celular.value}`;
    model.correo = this.fgv.correo.value;
    model.fechaNacimiento = (this.fgv.fechaNacimiento.value);
    model.ciudad = this.fgv.ciudad.value;
    model.genero = this.fgv.genero.value;
    model.image = this.fgv.image.value;
    model.seguidores = [""];
    model.seguidos = [""];
    model.grupoXMusicoPId ="";

    return model;
  }

  formCargaArchivo(){
    this.cargarArchivoForm = this.fb.group({
      file: ['', [Validators.required]],
    })
  }

  get fgArchivo(){
    return this.cargarArchivoForm.controls;
  }

  cargarArchivo(){
    const formData = new FormData();
    formData.append('file', this.fgArchivo.file.value);
    this.servicio.CargaArchivo(formData).subscribe(
      data => {
        console.log("Filename. " + data);
        this.fgv.image.setValue(data.filename);
        ShowNotificationMessage("El archivo cargó con éxito.");
      },
      err => {
        ShowNotificationMessage("Error al cargar el archivo.");
      }
    );
  }

  onFileSelect(event) { 
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.fgArchivo.file.setValue(f);
    }
  }
}
