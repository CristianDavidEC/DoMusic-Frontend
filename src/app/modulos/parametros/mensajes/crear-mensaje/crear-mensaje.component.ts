import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MensajesService} from '../../../../servicios/parametros/mensajes.service'
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeModel} from '../../../../modelos/parametros/mensaje.model'


declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-mensaje',
  templateUrl: './crear-mensaje.component.html',
  styleUrls: ['./crear-mensaje.component.css']
})
export class CrearMensajeComponent implements OnInit {

  fgValidator: FormGroup;
  private sub: any;
  private idReceptor: any;


  constructor(
    private fb: FormBuilder,
    private servicioPublicacion : MensajesService,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.sub = this.route.params.subscribe(params => {
      this.idReceptor = params['idReceptor'];
   });
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      contenido:['', [Validators.required, Validators.minLength(1)]],
    });
  }

  crearMensaje(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicioPublicacion.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Registro exitoso');
            this.router.navigate(['/perfiles/profesionales']);
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


  getPubliDatos(): MensajeModel{
    let model = new MensajeModel();
    model.contenido = this.fgv.contenido.value;
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)
    model.idReceptor = this.idReceptor;
    model.idRemitente = (this.servicio.getUsuarioId()).toString();
    
    return model;
 }
}
