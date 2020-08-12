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

  constructor(
    private fb: FormBuilder,
    private servicio: PublicidadService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      contenido: ['', [Validators.required, Validators.minLength(2)]],
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
    
    return model;
  }


}
