import React, { FC } from 'react';

interface CardComentarioProps {

}

const CardComentario: FC<CardComentarioProps> = ({ }) => {
    return (
        <div className='flex flex-row justify-between bg-white border border-gray-100 rounded shadow p-6'>
            <div className='flex flex-5 flex-col w-full'>
                <div className='flex flex-row'>
                    <p className='font-bold pr-1'>Autor:</p>
                    <p>Frank Gimeno</p>
                </div>
                <div className='flex flex-row'>
                <p className='font-bold pr-1'>Fecha:</p>
                    <p>24 Febrero 2025</p>
                </div>
                <div className='flex flex-col'>
                <p className='font-bold '>Contenido:</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt iusto cum quae molestiae perspiciatis. Ducimus quibusdam voluptatibus, numquam excepturi debitis, nobis asperiores quas doloremque ab ipsa vitae est sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt iusto cum quae molestiae perspiciatis. Ducimus quibusdam voluptatibus, numquam excepturi debitis, nobis asperiores quas doloremque ab ipsa vitae est sequi.</p>
                </div>
            </div>
            <div className='flex flex-col flex-1 text-center justify-center items-center gap-3 '>
            <button className='text-gray-500 bg-gray-100/30 hover:bg-gray-100/50 cursor-pointer rounded-lg shadow px-5 py-2' > Editar</button>
            <button className='text-gray-500 bg-gray-100/30 hover:bg-gray-100/50 cursor-pointer rounded-lg shadow px-5 py-2' > Borrar</button>
            </div>
        </div>
    );
};

export default CardComentario;