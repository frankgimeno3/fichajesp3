import React, { FC } from 'react';

interface EventoHistorialProps {
    data: {
        id: string;
        createdBy: string;
        type: string;
        createdAt: any,
        comment: string;
        modifications: any
    };
    onEdit: (data: EventoHistorialProps["data"]) => void;
}

const EventoHistorial: FC<EventoHistorialProps> = ({ data, onEdit }) => {
    return (
        <div
            className='flex flex-row border-y border-gray-200 p-3 px-5 justify-between items-start bg-white text-gray-600 shadow'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <p className='font-bold'>Id Evento:</p>
                    <p className='pl-3'>d32432424</p>
                </div>

                <div className='flex flex-row'>
                    <p className='font-bold'>Usuario:</p>
                    <p className='pl-3'>{data.createdBy}</p>
                </div>

                <div className='flex flex-row'>
                    <p className='font-bold'>Día y hora:</p>
                    <div className='pl-5 flex flex-row'>
                        <p className='pl-1'>{new Date(data.createdAt).toLocaleDateString('es-ES')}</p>
                        <p className='pl-1'>{new Date(data.createdAt).toLocaleTimeString('es-ES', { hour12: false })}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <p className='font-bold'>Tipo de evento:</p>
                    <p className='pl-3'>{data.type}</p>
                </div>
                <div className='flex flex-row'>
                    <p className='font-bold'>Descripción:</p>
                    <p className='pl-3'>{data.comment}</p>
                </div>
            </div>
 
        </div>
    );
};

export default EventoHistorial;