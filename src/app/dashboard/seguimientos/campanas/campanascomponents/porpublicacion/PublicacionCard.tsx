
import React, { FC } from 'react';

interface PublicacionCardProps {
  
}

const PublicacionCard: FC<PublicacionCardProps> = ({ }) => {

    
  return (
           <div className='flex flex-row p-5 border border-gray-100 rounded-xl'  >
                        <div className='flex flex-row'>
                            <p>Detalles de la publicación: </p>
                            <p>Bla bla bla y tal y cual pascual de tal</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Fecha de publicación: </p>
                            <p>Bla bla bla y tal y cual pascual de tal</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Detalles de la publicación: </p>
                            <p className='pl-3'>12 / 12 / 2025</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Deadline material </p>
                            <p className='pl-3'>12 / 11 / 2025</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Estado material </p>
                            <p className='pl-3'>Material pendiente de solicitar</p>
                        </div>
                    </div>
                      );
};

export default PublicacionCard;