import React, {FC} from 'react';

interface EventoHistorialProps {
    data: {
        createdBy: string;
        type: string;
        createdAt: any,
        comment: string;
        modifications: any
    };
    onEdit: (data: EventoHistorialProps["data"]) => void;
}

const EventoHistorial: FC<EventoHistorialProps> = ({data, onEdit}) => {
    return (
        <div
            className='flex flex-row border-y border-gray-200 p-3 px-5 justify-between items-start bg-white text-gray-600 shadow'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <p>Día y hora:</p>
                    <div className='pl-5 flex flex-row'>
                        <p className='pl-1'>{new Date(data.createdAt).getDay()}</p>
                        <p className='pl-1'>{new Date(data.createdAt).getHours()}</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <p>Evento:</p>
                    <p className='pl-3'>{data.type}</p>
                </div>
                <div className='flex flex-row'>
                    <p>Comentarios:</p>
                    <p className='pl-3'>{data.comment}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='mr-4'>Modificaciones:</p>
                    <div className='flex flex-col pt-1'>
                        <div className='flex flex-col pl-3 border border-gray-200 p-1 px-2'>
                            <div className='flex flex-row'>
                                <p>Autor de modificacion:</p>
                                <p className='pl-2'>Usuario 000X</p>
                            </div>
                            <div className='flex flex-row'>
                                <p>Fecha de modificacion:</p>
                                <p className='pl-2'>12/02/2025</p>
                                <p className='pl-2'>22:34:43</p>
                            </div>
                            <div className='flex flex-row'>
                                <p>Cambios realizados:</p>
                                <p className='pl-2'>El campo "Evento" ha cambiado de "Registrar Pausa" a "Fichaje de
                                    entrada"</p>
                            </div>
                        </div>
                        <div className='flex flex-col pl-3 border border-gray-200 p-1 px-2'>
                            <div className='flex flex-row'>
                                <p>Autor de modificacion:</p>
                                <p className='pl-2'>Usuario 000X</p>
                            </div>
                            <div className='flex flex-row'>
                                <p>Fecha de modificacion:</p>
                                <p className='pl-2'>12/02/2025</p>
                                <p className='pl-2'>22:34:43</p>
                            </div>
                            <div className='flex flex-row'>
                                <p>Cambios realizados:</p>
                                <p className='pl-2'>El campo "Evento" ha cambiado de "Registrar Pausa" a "Fichaje de
                                    entrada"</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button
                className='py-1 px-3 border border-gray-200 rounded hover:bg-gray-200 hover:text-gray-700'
                onClick={() => onEdit(data)}
            >
                Solicitar cambios
            </button>
        </div>
    );
};

export default EventoHistorial;