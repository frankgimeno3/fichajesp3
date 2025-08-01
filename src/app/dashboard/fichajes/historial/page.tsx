"use client";

import React, {FC, use, useEffect, useState} from 'react';
import EventoHistorial from './EventoHistorial';
import PopUpHistorial from './PopUpHistorial';
import FiltroTemporal from './FiltroTemporal';
import {TimeLogService} from "@/app/service/TimeLogService";
import {ModificationService} from "@/app/service/ModificationService";

const Historial: FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [timeLogs, setTimeLogs] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState<{
        id: string;
        createdBy: string;
        type: string;
        createdAt: Date,
        comment: string;
        modifications: any
    } | null>(null);


    const handleEdit = (eventData: typeof selectedEvent) => {
        setSelectedEvent(eventData);
        setShowPopup(true);
    };

    const handleConfirm = async (newType: string, newDate: string, comment: string) => {
        try {
            const modification = await ModificationService.createModification(selectedEvent?.id, newType, newDate, comment);
            alert("Evento registrado correctamente");
        } catch (e: any) {
            alert(e.message)
        }
        setShowPopup(false);
    };


    useEffect(() => {
        try {
            const now = new Date();
            handleFilter(
                String(now.getMonth() + 1),
                String(now.getFullYear())
            );
        } catch (error) {
            alert(error)
        }
    }, [])

    async function getTimeLogs(afterTime: any, beforeTime: any) {
        try {
            const timeLogs = await TimeLogService.getUserTimeLogs(afterTime, beforeTime);
            setTimeLogs(timeLogs);
        } catch (error) {
            alert(error)
        }
    }

    function handleFilter(monthStr: string, yearStr: string) {
        const month = parseInt(monthStr, 10) - 1;
        const year = parseInt(yearStr, 10);

        const afterTime = new Date(year, month, 1, 0, 0, 0).toISOString();
        const beforeTime = new Date(year, month + 1, 0, 23, 59, 59).toISOString();
        getTimeLogs(afterTime, beforeTime);
    }

    return (
    <div className="flex flex-col bg-white h-full min-h-screen p-12 text-gray-600">
                        <p className='font-bold text-3xl py-6  '>Eventos de registro del usuario x</p>
           
        <div className='p-5 text-gray-700 bg-gray-100 justify-left '>

                <div className='px-12'>
                    <FiltroTemporal onFiltrar={handleFilter}/>
                    {timeLogs.map((evento, index) => (
                        <EventoHistorial key={index} data={evento} onEdit={handleEdit}/>
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