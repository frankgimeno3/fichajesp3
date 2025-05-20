'use client';
import React, { FC, useState } from 'react';
import EventosHoy from './admincomponents/EventosHoy';
import Solicitudes from './admincomponents/Solicitudes';
import AdminNav from './admincomponents/AdminNav';

const Dashboard: FC = () => {
 
  const eventosHoy = [
    {
      autor: 'Juan Pérez',
      evento: 'Entrada' as 'Entrada',
      diaHora: '05/05/25 08:00:00',
      comentarios: 'Ninguno',
    },
    {
      autor: 'Ana López',
      evento: 'Pausa' as 'Pausa',
      diaHora: '05/05/25 13:00:00',
      comentarios: 'Salí a almorzar',
    },
    {
      autor: 'Carlos Gómez',
      evento: 'Salida' as 'Salida',
      diaHora: '05/05/25 17:30:00',
      comentarios: 'Ninguno',
    },
    {
      autor: 'Luisa Martínez',
      evento: 'Entrada' as 'Entrada',
      diaHora: '05/05/25 07:55:00',
      comentarios: 'Llegué temprano por reunión',
    },
  ];

  const solicitudes = [
    {
      empleado: 'Mario Ruiz',
      original: {
        fecha: '05/05/25 08:00:00',
        tipo: 'Entrada' as 'Entrada',
        comentario: 'Ninguno',
      },
      solicitado: {
        fecha: '05/05/25 08:30:00',
        tipo: 'Entrada' as 'Entrada',
        comentario: 'Ninguno',
      },
    },
    {
      empleado: 'Laura Torres',
      original: {
        fecha: '05/05/25 17:00:00',
        tipo: 'Salida' as 'Salida',
        comentario: 'Ninguno',
      },
      solicitado: {
        fecha: '05/05/25 16:45:00',
        tipo: 'Salida' as 'Salida',
        comentario: 'Ninguno',
      },
    },
    {
      empleado: 'Pedro Sánchez',
      original: {
        fecha: '05/05/25 13:00:00',
        tipo: 'Pausa' as 'Pausa',
        comentario: 'Ninguno',
      },
      solicitado: {
        fecha: '05/05/25 13:00:00',
        tipo: 'Entrada' as 'Entrada',
        comentario: 'Ninguno',
      },
    },
  ];


  return (
    <>
   <AdminNav/>
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="p-6 px-12">
        <Solicitudes solicitudes={solicitudes} />
      </div>
      <div className="p-6 px-12">
        <EventosHoy eventos={eventosHoy} />
      </div>
    </div>
    </>
  );
};

export default Dashboard;