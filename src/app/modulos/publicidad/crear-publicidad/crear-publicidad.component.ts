import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicidadService } from 'src/app/servicios/parametros/publicidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicidadModel } from 'src/app/modelos/parametros/publicidad.model';


declare const ShowNotificationMessage: any;


@Component({
  selector: 'app-crear-publicidad',
  templateUrl: './crear-publicidad.component.html',
  styleUrls: ['./crear-publicidad.component.css']
})
export class CrearPublicidadComponent implements OnInit {

  fgValidator: FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PublicidadService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      contenido: ['', [Validators.required, Validators.minLength(2)]],
      image:[''],
    });
  }

  crearPublicidad(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicio.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/parametros/publicidad']);
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


  getPubliDatos(): PublicidadModel{
    let model = new PublicidadModel();
    model.titulo = this.fgv.titulo.value;
    model.contenido = this.fgv.contenido.value;
    model.image = this.fgv.image.value;
    
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
    this.servicio.cargaArchivo(formData).subscribe(
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
