import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicidadService } from 'src/app/servicios/parametros/publicidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicidadModel } from 'src/app/modelos/parametros/publicidad.model';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-modificar-publicidad',
  templateUrl: './modificar-publicidad.component.html',
  styleUrls: ['./modificar-publicidad.component.css']
})
export class ModificarPublicidadComponent implements OnInit {

  fgValidator: FormGroup;
  cargarArchivoForm: FormGroup;
  recordIdPublicidad: string = '';

  constructor(
    private fb: FormBuilder,
    private servicio: PublicidadService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recordIdPublicidad = this.route.snapshot.params['idPublicidad']
   }

  ngOnInit(): void {
    this.FormBuilding();
    this.getPublicidad();
    this.formCargaArchivo();
  }
  
  getPublicidad(){
    this.servicio.getPublicidad(this.recordIdPublicidad).subscribe(
      data =>{
        console.log("get publicidad" + data.idPublicidad)
        this.fgv.idPublicidad.setValue(data.idPublicidad);
        this.fgv.titulo.setValue(data.titulo);
        this.fgv.contenido.setValue(data.contenido);
        this.fgv.image.setValue(data.image)
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicidad"])
      }
    )
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      idPublicidad: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      contenido: ['', [Validators.required, Validators.minLength(2)]],
      image:[''],
    });
  }

  modificarPublicidad(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPublicidadDatos();
        this.servicio.modificarRegistro(model).subscribe(
          data => {
          
            ShowNotificationMessage('Modificación exitosamente');
            this.router.navigate(['/parametros/publicidad']);
          },
          error => {
            ShowNotificationMessage('Error!');
          }
        );      
    }
  }

  get fgv(){
    return this.fgValidator.controls; 
  }

  getPublicidadDatos(): PublicidadModel{
    let model = new PublicidadModel();
    model.idPublicidad = this.fgv.idPublicidad.value;
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
