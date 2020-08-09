import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{PerfilService} from '../../../../servicios/perfil.service';
import{BandaModel} from '../../../../modelos/banda.model';
import { Router } from '@angular/router';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-banda',
  templateUrl: './crear-banda.component.html',
  styleUrls: ['./crear-banda.component.css']
})
export class CrearBandaComponent implements OnInit {

  fgValidator:FormGroup;
  cargarArchivoForm: FormGroup;
  


  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();

  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      listaIntegrantes: ["", Validators.required],
      generoMusical: [Validators.required],
      codigoPais: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaCreacion: ['', [Validators.required]],
      ciudad: [Validators.required],
      image:[''],
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

  getPerfilDatos(): BandaModel{
    let model = new BandaModel();
    model.nombre = this.fgv.nombre.value;
    model.listaIntegrantes = [this.fgv.listaIntegrantes.value];
    model.generoMusical = this.fgv.generoMusical.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`;
    model.correo = this.fgv.correo.value;
    model.fechaCreacion = this.fgv.fechaCreacion.value;
    model.ciudad = this.fgv.ciudad.value;
    model.image = this.fgv.image.value;
    model.seguidores = [""];
    model.seguidos = [""];

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
    this.servicio.CargaArchivoBanda(formData).subscribe(
      data => {
        console.log("Filename. " + data.filename);
        this.fgv.image.setValue(data.filename);
        ShowNotificationMessage("El archivo cargó con éxito.");
      },
      err => {
        ShowNotificationMessage("Error al cargar la imagen.");
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
