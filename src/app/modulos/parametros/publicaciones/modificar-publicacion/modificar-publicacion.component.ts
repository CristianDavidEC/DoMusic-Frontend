import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-modificar-publicacion',
  templateUrl: './modificar-publicacion.component.html',
  styleUrls: ['./modificar-publicacion.component.css']
})
export class ModificarPublicacionComponent implements OnInit {

  fgValidator: FormGroup;
  recordIdPublicacion: string = '';

  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.recordIdPublicacion = this.route.snapshot.params['idPublicacion']
   }

  ngOnInit(): void {
    this.FormBuilding();
    this.getPublicacion();
  }
  
  getPublicacion(){
    this.servicio.getPublicacion(this.recordIdPublicacion).subscribe(
      data =>{
        console.log(data)
        this.fgv.idPublicacion.setValue(data.idPublicacion);
        this.fgv.titulo.setValue(data.titulo);
        this.fgv.contenido.setValue(data.contenido);
        this.fgv.fecha.setValue(data.fecha);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicaciones"])
      }
    )
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      idPublicacion: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      contenido: ['', [Validators.required, Validators.minLength(2)]],
      fecha: ['', [Validators.required]],
    });
  }

  modificarPublicacion(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicio.modificarRegistro(model).subscribe(
          data => {
          
            ShowNotificationMessage('Modificación exitosamente');
            this.router.navigate(['/parametros/publicaciones']);
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

  getPubliDatos(): PublicacionModel{
    let model = new PublicacionModel();
    model.idPublicacion = this.fgv.idPublicacion.value;
    model.titulo = this.fgv.titulo.value;
    model.contenido = this.fgv.contenido.value;
    model.fecha = (this.fgv.fecha.value);
    return model;
  }

}
