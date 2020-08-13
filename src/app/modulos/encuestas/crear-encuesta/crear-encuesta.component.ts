import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { EncuestasService} from '../../../servicios/parametros/encuestas.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestaModel} from '../../../modelos/parametros/encuesta.model'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicioEncuesta: EncuestasService,
    private servicio: SeguridadService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      pregunta:['', [Validators.required, Validators.minLength(2)]],
      respuestas:['', [Validators.required, Validators.minLength(2)]],
      respuestaUsuario:[''],

    });
  }

  crearEncuesta(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicioEncuesta.guardarNuevoRegistro(model).subscribe(data => {
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


  getPubliDatos(): EncuestaModel{
    let model = new EncuestaModel();
    model.pregunta = this.fgv.pregunta.value;
    model.respuestas = [this.fgv.respuestas.value];

    
    return model;
  }


}
