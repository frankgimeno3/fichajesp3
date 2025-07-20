"use client"
import React, { FC, useState } from 'react';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({ }) => {
  const [usuarioActual] = useState("Usuario");
  const [userType] = useState("superadmin");

  const notificaciones = [
    { titulo: "Modificación de entrada aprobada", fechaHora: "2025-07-19 14:35", estado: "Completado" },
    { titulo: "Modificación de salida rechazada aprobada", fechaHora: "2025-07-18 10:20", estado: "Pendiente" },
    { titulo: "Nuevo seguimiento añadido por Frank", fechaHora: "2025-07-17 08:00", estado: "En progreso" },
    { titulo: "Alerta generada por seguimiento", fechaHora: "2025-07-17 08:00", estado: "En progreso" },
    { titulo: "Nuevo comentario de Frank en seguimientos", fechaHora: "2025-07-17 08:00", estado: "En progreso" },
  ];

  return (
    <div className='bg-white h-full min-h-screen p-12 text-gray-600'>
      <p className='text-xl'>Bienvenido, {usuarioActual}</p>
      <p>Haz click en uno de los desplegables del menú izquierdo para comenzar.</p>
      <p>Se mostrarán módulos para usuario tipo {userType}.</p>

      <div className='mt-8'>
        <h2 className='text-lg font-semibold mb-4'>Tabla de Notificaciones</h2>
        <table className='min-w-full border border-gray-300'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='text-left p-2 border-b'>Título</th>
              <th className='text-left p-2 border-b'>Fecha y Hora</th>
              <th className='text-left p-2 border-b'>Estado</th>
            </tr>
          </thead>
          <tbody>
            {notificaciones.map((notif, index) => (
              <tr key={index} className='hover:bg-gray-50'>
                <td className='p-2 border-b'>{notif.titulo}</td>
                <td className='p-2 border-b'>{notif.fechaHora}</td>
                <td className='p-2 border-b'>{notif.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='mt-12  bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'> 
        Ver todas las notificaciones</button>
    </div>
  );
};

export default Dashboard;
