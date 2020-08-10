import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl, FormArray} from '@angular/forms';
import { AficionadoModel} from '../../../../modelos/aficionado.model'
import { PerfilService} from '../../../../servicios/perfil.service'

declare const ShowNotificationMessage:any;

@Component({
  selector: 'app-crear-aficionado',
  templateUrl: './crear-aficionado.component.html',
  styleUrls: ['./crear-aficionado.component.css']
})
export class CrearAficionadoComponent implements OnInit {

  fgValidator:FormGroup;
  formIntereses: FormGroup;
  cargarArchivoForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private servicio: PerfilService,
    
  ) {
   }

  ngOnInit(): void {
    this.FormBuilding();
    this.formCargaArchivo();
  }

  Intereses: Array<any> = [
    { name: 'Salsa', value: 'Salsa' },
    { name: 'Vallenato', value: 'Vallenato' },
    { name: 'Electronica', value: 'Electronica' },
    { name: 'Pop', value: 'Pop' },
    { name: 'Clasica', value: 'Clasica' },
    { name: 'Rock', value: 'Rock' }
  ];
  
  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      celular: ['', [Validators.required, Validators.minLength(8)]],
      correo: ['', [Validators.required, Validators.email]],
      ciudad: [Validators.required],   
      fechaNacimiento: ['', [Validators.required]],
      genero: [Validators.required],
      codigoPais: [Validators.required],
      image:['']   
    });
  }

  intereses = [];
  
  check(event){
    
    if(event.target.checked){
      this.intereses.push(event.target.value);
    } else{
      const index = this.intereses.indexOf(event.target.value);
      if (index > -1) {
      this.intereses.splice(index, 1);
    }
    }
    
  }

  crearAficionado(){
    if(this.fgValidator.invalid){
      alert('Formulario inválido');
    }else{
        let model=this.getPerfilDatos();
        this.servicio.CrearAficionado(model).subscribe(data => {
          console.log(data);
          if(data){
            ShowNotificationMessage('Registro exitoso, consulta tu contraseña en un mensaje de texto a tu celular');
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

  getPerfilDatos(): AficionadoModel{
    let model = new AficionadoModel();
    model.nombre = this.fgv.nombre.value;
    model.apellido = this.fgv.apellido.value;
    model.celular = `${this.fgv.codigoPais.value} ${this.fgv.celular.value}`
    model.correo = this.fgv.correo.value;
    model.ciudad = this.fgv.ciudad.value;
    model.fechaNacimiento = this.fgv.fechaNacimiento.value;    
    model.genero = this.fgv.genero.value;
    model.temasInteres = this.intereses;
    model.image =this.fgv.image.value;
    model.seguidores = [""];
    model.seguidos = [""];
    model.grupoXAficionadoId = "";

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
    this.servicio.CargarArchivoAficionado(formData).subscribe(
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
