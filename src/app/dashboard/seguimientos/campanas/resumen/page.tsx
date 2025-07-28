import React, { FC } from 'react';

interface ResumenCampanaProps {

}

const ResumenCampana: FC<ResumenCampanaProps> = ({ }) => {
    return (
            <div className="bg-white h-full min-h-screen p-12 text-gray-600 p-12">
            <p>Resumen de la campaña</p>
            <div className='flex flex-col gap-6 bg-gray-100 p-12'>
                <div className='flex flex-row text-sm'>
                    <p className='font-bold text-gray-500'>Nombre de la empresa:</p>
                    <p className='pl-3'>Turomas</p>
                </div>
                <div className='flex flex-row text-sm'>
                    <p className='font-bold text-gray-500'>Fecha de firma:</p>
                    <p className='pl-3'>12 / 12 / 2025</p>
                </div>
                <div className='flex flex-col text-sm border border-gray-100 p-12'>
                    <p className='font-bold text-gray-500'>Contenidos</p>
                
                </div>
            </div>
        </div>
     );
};

export default ResumenCampana;