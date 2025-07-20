"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';


interface NotificacionProps { }

const Notificacion: FC<NotificacionProps> = ({ }) => {
    const router = useRouter()
    const notificationData = {
        titulo: "Modificación de entrada aprobada",
        fechaHora: "2025-07-19 14:35",
        estado: "Visualizado",
        detalles: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contenidoCTA: "redirección al origen",
        rutaCTA: "/dashboard/seguimientos"
    };

    const [isVisualizado, setIsVisualizado] = useState(false);

    const handleRedirection = (param: string) => {
        router.push(param)
    }
    return (
        <div className='bg-white h-full min-h-screen p-12 text-gray-600'>
            <div className='flex flex-row justify-between items-center py-2'>
                <h2 className='text-lg font-semibold mb-4'>{notificationData.titulo}</h2>
                <button
                    className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                    onClick={() => setIsVisualizado(!isVisualizado)}
                >
                    {isVisualizado ? <p>Marcar como no leído</p> : <p>Marcar como leído</p>}
                </button>
            </div>
            <table className='min-w-full border border-gray-300'>
                <thead className='bg-gray-100'>
                    <tr className='py-4'>
                        <th className='text-left p-2 border-b'>Fecha y Hora</th>
                        <th className='text-left p-2 border-b'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-50'>
                        <td className='p-2 border-b'>{notificationData.fechaHora}</td>
                        <td className='p-2 border-b items-center'>{notificationData.estado}</td>
                    </tr>
                </tbody>
            </table>

            <h2 className='text-lg font-semibold mb-4 pt-24'>Detalles de la notificación:</h2>
            <p>{notificationData.detalles}</p>
            <button
                className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                onClick={() => handleRedirection(notificationData.rutaCTA)}
            >
                {notificationData.contenidoCTA}
            </button>
        </div>
    );
};

export default Notificacion;
