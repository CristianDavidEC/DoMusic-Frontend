import { UsuarioModel} from '../../modelos/usuario.model';
import { PublicacionModel} from '../../modelos/parametros/publicacion.model'

export class ComentarioModel{
    idComentario?: string;
    contenido: string;
    fecha: string;
    publicacionId?: string;
    usuarioId?: string;
    hijo: boolean;
}