import { UsuarioModel} from '../../modelos/usuario.model';


export class NotificacionModel {
    idNotificacion?: string;
    tipo: string;
    contenido?: string;
    fecha: string;
    idRemitente: string;
    usuario?: UsuarioModel;

}

