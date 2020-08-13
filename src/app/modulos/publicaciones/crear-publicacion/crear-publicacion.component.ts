import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  fgValidator: FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioPublicacion : PublicacionesService,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      titulo:['', [Validators.required, Validators.minLength(2)]],
      contenido:['', [Validators.required, Validators.minLength(2)]],
      image:[''],
      reacciones:[''],
      userReacciones:[''],

    });
  }

  crearPublicacion(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicioPublicacion.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/publicaciones/listar-publicaciones']);
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


  getPubliDatos(): PublicacionModel{
    let model = new PublicacionModel();
    model.titulo = this.fgv.titulo.value;
    model.contenido = this.fgv.contenido.value;
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)
    model.idUsuario = (this.servicio.getUsuarioId()).toString();
    model.image = this.fgv.image.value;
    model.reacciones = 0;
    model.userReacciones = [""];
    
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
    this.servicioPublicacion.CargaArchivo(formData).subscribe(
      data => {
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
