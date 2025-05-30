"use client";

import React, {FC, useEffect, useState} from 'react';
import EventoHistorial from './EventoHistorial';
import PopUpHistorial from './PopUpHistorial';
import FiltroTemporal from './FiltroTemporal';
import RegistroNav from '../registrocomponents/registronav';
import {TimeLogService} from "@/app/service/TimeLogService";

const Historial: FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<{
        employeeId: string;
        dia: string;
        hora: string;
        event: string;
        comments: string;
    } | null>(null);


    const handleEdit = (eventData: typeof selectedEvent) => {
        setSelectedEvent(eventData);
        setShowPopup(true);
    };

    const handleConfirm = () => {
        alert("Evento registrado correctamente");
        setShowPopup(false);
    };


    useEffect(()=>{
        try {
            const now = new Date();
            handleFilter(
                String(now.getMonth() + 1),
                String(now.getFullYear())
            );
        } catch (error){
            alert(error)
        }
    }, [])

    async function getTimeLogs(beforeTime: any, afterTime: any){
        try {
            const timeLogs = await TimeLogService.getTimeLogs(afterTime,beforeTime);
            console.log(timeLogs);
        } catch (error){
            alert(error)
        }
    }

    function handleFilter(monthStr: string, yearStr: string){
        const month = parseInt(monthStr, 10) - 1;
        const year = parseInt(yearStr, 10);

        const afterTime = new Date(year, month, 1, 0, 0, 0).toISOString();
        const beforeTime = new Date(year, month + 1, 0, 23, 59, 59).toISOString();
        getTimeLogs(afterTime, beforeTime);
    }
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
           <RegistroNav/>

            <div className='p-5 text-gray-700 bg-gray-100 justify-left '>
                <p className='font-bold text-3xl py-6 px-12'>Eventos de registro del usuario x</p>

                <div className='px-12'>
                    <FiltroTemporal onFiltrar={handleFilter} />


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