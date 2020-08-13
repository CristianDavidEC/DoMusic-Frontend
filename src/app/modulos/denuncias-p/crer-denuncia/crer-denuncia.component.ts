import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DenunciasPService } from 'src/app/servicios/parametros/denuncias-p.service';
import { DenunciasPModel } from 'src/app/modelos/parametros/denuncias-p.model';

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crer-denuncia',
  templateUrl: './crer-denuncia.component.html',
  styleUrls: ['./crer-denuncia.component.css']
})
export class CrerDenunciaComponent implements OnInit {

  private sub: any;
  private publicacionId: any;
  fgValidator:FormGroup;
  cargarArchivoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private servicio: DenunciasPService,
    private servicioSeguridad: SeguridadService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
    this.sub = this.route.params.subscribe(params => {
      this.publicacionId = params['idPublicacion'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      archivoPrueba: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
     
    });
  }

  
  crearDenuncia(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPerfilDatos();
        this.servicio.guardarNuevoRegistro(model).subscribe(data => {
          console.log(data);
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

  getPerfilDatos(): DenunciasPModel{
    let model = new DenunciasPModel();
    model.archivoPrueba = this.fgv.archivoPrueba.value;
    model.tipo = this.fgv.tipo.value;
    let day = new Date;
    model.fecha = (`Fecha:${day.getDate()}-${day.getMonth()+1}-${day.getFullYear()} Hora:${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`)
    model.usuarioId = (this.servicioSeguridad.getUsuarioId()).toString();
    model.publicacionId = this.publicacionId;
    console.log("id" + this.publicacionId)
    
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
        console.log("Filename. " + data);
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
