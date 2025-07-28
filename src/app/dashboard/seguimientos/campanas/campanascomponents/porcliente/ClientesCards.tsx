import React, { FC } from 'react';

interface ClientesCardsProps {

}

const ClientesCards: FC<ClientesCardsProps> = ({ }) => {
    return (
        <div className='flex flex-col bg-gray-100/60 hover:bg-gray-100/40 cursor-pointer border border-gray-100 px-6 py-3'>
            <p className='font-bold text-gray-600'>Turomas</p>
            <div className='flex flex-row gap-6'>
            <div className='flex flex-row text-sm'>
                <p className='font-bold text-gray-500'>Fecha de firma:</p>
                <p className='pl-3'>12 / 12 / 2025</p>
            </div>
            <div className='flex flex-row text-sm'>
                <p className='font-bold text-gray-500'>Fecha próxima deadline:</p>
                <p className='pl-3'>10 / 11 / 2025</p>
            </div>
                        <div className='flex flex-row text-sm'>
                <p className='font-bold text-gray-500'>Persona de contacto:</p>
                <p className='pl-3'>Miguel rodriguez5</p>
            </div>
            </div>
        </div>
    );
};

export default ClientesCards;