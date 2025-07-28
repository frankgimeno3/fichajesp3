import React, { FC } from 'react';
import CardComentarioContacto from './CardComentarioContacto';

interface ContenidoComentariosContactoProps {
  
}

const ContenidoComentariosContacto: FC<ContenidoComentariosContactoProps> = ({ }) => {
  return (
    <div>
        <p>Aviso: Los comentarios agregados aquí se agregarán automáticamente también en la ficha de la empresa</p>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
        <CardComentarioContacto/>
    </div>
  );
};

export default ContenidoComentariosContacto;