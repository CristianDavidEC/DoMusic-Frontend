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
      codigoPais: [],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
      tipoPerfil: [],
      pais: []
    });
  }

  crearperfil(){
    
  }
}
