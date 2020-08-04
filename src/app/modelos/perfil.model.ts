import{UsuarioModel} from '../modelos/usuario.model'

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
    seguidores?: String [];
    seguidos?: String [];
    // usuario?: UsuarioModel
}