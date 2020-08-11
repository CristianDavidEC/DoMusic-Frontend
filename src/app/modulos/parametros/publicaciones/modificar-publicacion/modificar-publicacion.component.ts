import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-modificar-publicacion',
  templateUrl: './modificar-publicacion.component.html',
  styleUrls: ['./modificar-publicacion.component.css']
})
export class ModificarPublicacionComponent implements OnInit {

  fgValidator: FormGroup;
  recordIdPublicacion: string = '';
  private idUsuarioP: any;
  private ret: any;


  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionesService,
    private seguridad: SeguridadService,
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
    });
  }

  verifPublicacion(eliminarPubliId: String): Boolean{
    this.servicio.getPublicacion2(eliminarPubliId).subscribe(
      data =>{
        this.idUsuarioP = (data.idUsuario);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicaciones"])
      }
    )
    if (this.idUsuarioP == this.seguridad.getUsuarioId()){
      this.ret = true;
    }else{
      this.ret = false;
    }
      return this.ret;
  } 

  modificarPublicacion(){
    if(this.verifPublicacion(this.recordIdPublicacion)){
      
    }
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
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
    return model;
  }
}
