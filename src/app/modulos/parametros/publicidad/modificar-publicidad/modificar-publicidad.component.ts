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
  }
  
  getPublicidad(){
    this.servicio.getPublicidad(this.recordIdPublicidad).subscribe(
      data =>{
        console.log(data)
        this.fgv.idPublicidad.setValue(data.idPublicidad);
        this.fgv.titulo.setValue(data.titulo);
        this.fgv.contenido.setValue(data.contenido);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/parametros/publicidad"])
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
    return model;
  }


}
