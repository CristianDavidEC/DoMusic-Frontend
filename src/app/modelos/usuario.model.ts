export class UsuarioModel {
    idUsuario?: String;
    nombreUsuario: String;
    contrasena?: String;
    musicoProfesionalId?: String;
    bandaId?:String;
    aficionadoId?: String;
    estaLogueado: Boolean = false;
    token?:String;
}