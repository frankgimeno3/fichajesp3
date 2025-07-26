import React, { FC } from 'react';

interface ContactoCardProps {
  
}

const ContactoCard: FC<ContactoCardProps> = ({ }) => {
  return (
    <div className='flex flex-col border border-gray-100 rounded-xl shadow bg-white hover:bg-gray-100/50 '>
        <div className='flex flex-row'>
            <p>Nombre y apellidos del contacto: </p>
            <p>Valor</p>
        </div>
                <div className='flex flex-row'>
            <p>Cargo: </p>
            <p>Valor</p>
        </div>
                        <div className='flex flex-row'>
            <p>Exempleado de: </p>
            <p>Valor</p>
        </div>
                        <div className='flex flex-row'>
            <p>Idiomas: </p>
            <p>Valor</p>
        </div>
                                <div className='flex flex-row'>
            <p>Telefonos de contacto: </p>
            <p>Valor</p>
        </div>
                                <div className='flex flex-row'>
            <p>Email: </p>
            <p>Valor</p>
        </div>
    </div>
  );
};

export default ContactoCard;