import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { PublicacionesService } from 'src/app/servicios/parametros/publicaciones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionModel } from 'src/app/modelos/parametros/publicacion.model';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: PublicacionesService,
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
      //fecha: ['', [Validators.required]],
    });
  }

  crearPublicacion(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicio.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/parametros/publicaciones']);
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
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`);
    
    return model;
  }

}
