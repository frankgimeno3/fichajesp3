import React, { FC } from 'react';
import CardComentario from './CardComentario';

interface ContenidoComentariosProps {
  
}

const ContenidoComentarios: FC<ContenidoComentariosProps> = ({ }) => {
  return (
    <div>
        <p>Comentarios</p>
        <p>Apartado para buscar comentarios</p>
        <CardComentario/>
    </div>
  );
};

export default ContenidoComentarios;