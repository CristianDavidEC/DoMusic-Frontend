import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService} from '../../../servicios/perfil.service';
import { PerfilModel } from 'src/app/modelos/perfil.model';
import { SeguridadService} from '../../../servicios/seguridad.service'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  fgValidator: FormGroup;
  cargarArchivoForm: FormGroup;
  recordidMusicoProfesional: String = '';

  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService,
    private route: ActivatedRoute,
    private router: Router,
    private seguridad: SeguridadService
  ) {
    this.recordidMusicoProfesional = this.seguridad.getIdPerfil()
   }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
    this.getPublicacion();
  }
  
  getPublicacion(){
    this.servicio.getMusicoP(this.recordidMusicoProfesional.toString()).subscribe(
      data =>{
        this.fgv.nombre.setValue(data.nombre);
        this.fgv.apellido.setValue(data.apellido);
        this.fgv.tipo.setValue(data.tipo);
        this.fgv.generoMusica.setValue(data.generoMusica);
        this.fgv.celular.setValue(data.celular);
        this.fgv.correo.setValue(data.correo);
        this.fgv.fechaNacimiento.setValue(data.generoMusica);
        this.fgv.ciudad.setValue(data.celular);
        this.fgv.genero.setValue(data.correo);
        this.fgv.image.setValue(data.image);
      },
      error =>{
        ShowNotificationMessage('Hubo un error');
        this.router.navigate(["/seguridad/home"])
      }
    )
  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      tipo: [Validators.required],
      generoMusica: [Validators.required],
      codigoPais: [Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required]],
      ciudad: [Validators.required],
      genero: [Validators.required],
      image:[''],
    });
  }

  modificarPerfil(){
    if(this.fgValidator.invalid){
      ShowNotificationMessage('Formulario inválido')
    }else{
        let model=this.getPubliDatos();
        this.servicio.modificarRegistro(model).subscribe(
          data => {
          
            ShowNotificationMessage('Modificación exitosamente');
            this.router.navigate(['/perfiles/profesionales']);
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

  getPubliDatos(): PerfilModel{
    let model = new PerfilModel();
    model.idMusicoProfesional = this.recordidMusicoProfesional.toString();
    model.nombre = this.fgv.nombre.value;
    model.apellido = this.fgv.apellido.value;
    model.tipo = this.fgv.tipo.value;
    model.generoMusica = this.fgv.generoMusica.value;
    model.celular = `${this.fgv.codigoPais.value}${this.fgv.celular.value}`;
    model.correo = this.fgv.correo.value;
    model.fechaNacimiento = (this.fgv.fechaNacimiento.value);
    model.ciudad = this.fgv.ciudad.value;
    model.genero = this.fgv.genero.value;
    model.image = this.fgv.image.value;
    model.seguidores = [""];
    model.seguidos = [""];
    model.grupoXMusicoPId ="";

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
    this.servicio.CargaArchivoMusico(formData).subscribe(
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
