import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DenunciasService} from '../../../servicios/parametros/denuncias.service'
import { ActivatedRoute, Router } from '@angular/router';
import { DenunciasModel } from 'src/app/modelos/parametros/denuncia.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-denuncia',
  templateUrl: './crear-denuncia.component.html',
  styleUrls: ['./crear-denuncia.component.css']
})
export class CrearDenunciaComponent implements OnInit {

  private sub: any;
  private idUsuarioReportado: any;
  fgValidator:FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: DenunciasService,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
    this.sub = this.route.params.subscribe(params => {
      this.idUsuarioReportado = params['idMusicoProfesional'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      archivoPrueba: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      asunto: ['', [Validators.required, Validators.minLength(2)]]
     
    });
  }

  
  crearDenuncia(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPerfilDatos();
        this.servicio.guardarNuevoRegistro(model).subscribe(data => {
          if(data){
            ShowNotificationMessage('Tu denuncia ha sido reportada, pronto daremos respuesta.');
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

  getPerfilDatos(): DenunciasModel{
    let model = new DenunciasModel();
    model.archivoPrueba = this.fgv.archivoPrueba.value;
    model.tipo = this.fgv.tipo.value;
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)
    model.asunto = this.fgv.asunto.value;
    model.usuarioId = (this.servicioSeguridad.getUsuarioId()).toString();
    model.idUsuarioReportado = this.idUsuarioReportado;
    
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
    this.servicio.CargarArchivo(formData).subscribe(
      data => {
        this.fgv.archivoPrueba.setValue(data.filename);
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
