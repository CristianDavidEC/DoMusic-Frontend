import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  fgValidator:FormGroup;

  constructor(
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
    this.FormBuilding();

  }

  FormBuilding(){ 
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
      codigoPais: ['', Validators.required, Validators.minLength(2), Validators.maxLength(4)],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      tipoPerfil: [],
      pais: []
    });
  }

  crearPerfil(){
    console.log(this.fgValidator)

    if(this.fgValidator.invalid){
      alert('Formulario inválido');
    }else{
      alert('Has sido Registrado');
    }
  }
}
