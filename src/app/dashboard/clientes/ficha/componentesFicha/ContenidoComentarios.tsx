import React, { FC } from 'react';
import CardComentario from './cards/CardComentario';

interface ContenidoComentariosProps {

}

const ContenidoComentarios: FC<ContenidoComentariosProps> = ({ }) => {
    return (
        <div className='flex flex-col'>
            <div className='text-right w-full '>
                <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/90' >
                    Añadir comentario
                </button>

            </div>
            <div className='flex flex-col py-5 gap-3'>
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
                <CardComentario />
            </div>
        </div>
    );
};

export default ContenidoComentarios;