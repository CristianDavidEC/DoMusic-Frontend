import { UsuarioModel} from '../../modelos/usuario.model';
import { PublicacionModel} from '../../modelos/parametros/publicacion.model'

export class ComentarioModel{
    idComentario?: string;
    contenido: string;
    fecha: string;    
    idPadre?: string;
    hijo?: boolean;
    idPublicacion?: string;
    idUsuario?: string;
    publicacion?: PublicacionModel;
    usuario?: UsuarioModel;
}