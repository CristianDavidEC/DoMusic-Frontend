import{UsuarioModel} from '../modelos/usuario.model'
import { Data } from '@angular/router';

export class PerfilModel {
    idMusicoProfesional?: String;
    nombre: String;
    apellido: String;
    tipo: String;
    generoMusica: String;
    celular: String;
    correo: String;
    fechaNacimiento: String;
    ciudad: String;
    genero: string;
    fotoPerfil?: String;
    seguidores?: String[];
    seguidos?: String [];
    grupoXMusicoPId?:String;
    usuario?: UsuarioModel;
}