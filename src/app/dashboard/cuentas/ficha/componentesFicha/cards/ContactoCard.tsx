import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ContactoCardProps {
  
}

const ContactoCard: FC<ContactoCardProps> = ({ }) => {
    const router = useRouter()
  return (
    <div className='flex flex-row gap-12 border border-gray-100 rounded-lg p-6 shadow bg-white hover:bg-gray-100/50 '>
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
                <button 
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/clientes/contactos/contacto')}
        >
          Detalles completos
        </button>  
    </div>
  );
};

export default ContactoCard;