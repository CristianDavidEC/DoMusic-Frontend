export class UsuarioModel {
    usuarioId?: String;
    nombreUsuario: String;
    contrasena?: String;
    musicoProfesionalId?: String;
    bandaId?:String;
    aficionadoId?: String;
    estaLogueado: Boolean = false;
    token?:String;
}