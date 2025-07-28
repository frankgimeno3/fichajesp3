import React, { FC } from 'react';
import PublicacionCard from '../campanascomponents/porpublicacion/PublicacionCard';

interface ResumenCampanaProps {

}

const ResumenCampana: FC<ResumenCampanaProps> = ({ }) => {
    return (
        <div className='flex flex-col'>
            <p>Resumen de la campaña</p>
            <div className='flex flex-row gap-6'>
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
                    <PublicacionCard/>
                    <PublicacionCard/>
                    <PublicacionCard/>
                    <PublicacionCard/>
                    <PublicacionCard/>
                    <PublicacionCard/>
                </div>
            </div>
        </div>
    );
};

export default ResumenCampana;