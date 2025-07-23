import React, { FC } from 'react';

interface DetallesPropuestaProps {

}

const DetallesPropuesta: FC<DetallesPropuestaProps> = ({ }) => {
    return (
        <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
            <p>Detalles de la propuesta</p>

            <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
                <p>TABLA DATOS PROPUESTA</p>
            </div>

            <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
                <p>Tabla Contenido ofrecido</p>
            </div>
        </div>
    );
};

export default DetallesPropuesta;