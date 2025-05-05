"use client";

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import EventoHistorial from './EventoHistorial';
import PopUpHistorial from './PopUpHistorial';
import FiltroTemporal from './FiltroTemporal';

const Historial: FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<{
        employeeId: string;
        dia: string;
        hora: string;
        event: string;
        comments: string;
    } | null>(null);

    const router = useRouter();

    const handleEdit = (eventData: typeof selectedEvent) => {
        setSelectedEvent(eventData);
        setShowPopup(true);
    };

    const handleConfirm = () => {
        alert("Evento registrado correctamente");
        setShowPopup(false);
    };

    const handleLogout = () => {
        console.log('logout');
    };

    const handleIrRegistro = () => {
        router.push('/registro');
    };

    // Datos simulados para prueba
    const eventos = [
        {
            employeeId: '001',
            dia: '1/12/2024',
            hora: '12:33:21',
            event: 'Fichaje de entrada',
            comments: 'Descripción del comentario',
        },
        {
            employeeId: '001',
            dia: '1/12/2024',
            hora: '14:00:00',
            event: 'Fichaje de salida',
            comments: 'Sin observaciones',
        }
    ];

    return (
        <div className='flex flex-col'>
            <nav className="flex flex-row justify-between p-5 px-12 items-center border-b border-gray-600" style={{ backgroundColor: 'rgb(255, 255, 255, 0.04)' }}>
                <p className=" text-2xl text-gray-300">Historial de registros</p>
                <div className="flex flex-row">
                    <button
                        className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
                        onClick={handleIrRegistro}
                    >
                        Fichar Eventos
                    </button>
                    <button
                        className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            <div className='p-5 text-gray-700 bg-gray-100 justify-left '>
                <p className='font-bold text-3xl py-6 px-12'>Eventos de registro del usuario x</p>

                <div className='px-12'>
                    <FiltroTemporal onFiltrar={(mes, anio) => {
                        console.log(`Filtrar eventos para mes: ${mes}, año: ${anio}`);
                    }} />


                    {eventos.map((evento, index) => (
                        <EventoHistorial key={index} data={evento} onEdit={handleEdit} />
                    ))}
                </div>
            </div>

            {showPopup && selectedEvent && (
                <PopUpHistorial
                    data={selectedEvent}
                    onClose={() => setShowPopup(false)}
                    onCancel={() => setShowPopup(false)}
                    onConfirm={handleConfirm}
                />
            )}
        </div>
    );
};

export default Historial;
