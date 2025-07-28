import React, { FC } from 'react';

interface ClientesCardsProps {

}

const ClientesCards: FC<ClientesCardsProps> = ({ }) => {
    return (
        <div className='flex flex-col bg-gray-100/50 border border-gray-100 p-12'>
            <p>Turomas</p>
            <div className='flex flex-row'>
                <p>Fecha de firma:</p>
                <p className='pl-5'>12 / 12 / 2025</p>
            </div>
            <div className='flex flex-row'>
                <p>Fecha próxima deadline:</p>
                <p className='pl-5'>10 / 11 / 2025</p>
            </div>
                        <div className='flex flex-row'>
                <p>Persona de contacto:</p>
                <p className='pl-5'>Miguel rodriguez5</p>
            </div>
        </div>
    );
};

export default ClientesCards;