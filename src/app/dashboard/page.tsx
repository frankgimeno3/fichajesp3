"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import VentanaFichaje from './0dashboardcomponents/VentanaFichaje';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = ({ }) => {
  const router = useRouter()

  const [usuarioActual] = useState("Usuario");
  const [userType] = useState("superadmin");

  const notificaciones = [
    { titulo: "Modificación de entrada aprobada", fechaHora: "2025-07-19 14:35", estado: "Pendiente" },
    { titulo: "Modificación de salida rechazada aprobada", fechaHora: "2025-07-18 10:20", estado: "Pendiente" },
    { titulo: "Nuevo seguimiento añadido por Frank", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Alerta generada por seguimiento", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Nuevo comentario de Frank en seguimientos", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Alerta de seguimiento de materiales", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Una página preferente ofrecida ya no está disponible", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Una página preferente ofrecida tiene una nueva oferta competidora", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Nuevo planillo de revista disponible", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Tu cliente X ha recibido una modificación", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
    { titulo: "Uno de tus informes está listo", fechaHora: "2025-07-17 08:00", estado: "Visualizado" },
  ];


  return (
    <div className='bg-white h-full min-h-screen p-12 text-gray-600'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col '>
          <p className='text-xl'>Bienvenido, {usuarioActual}</p>
          <p>Haz click en uno de los desplegables del menú izquierdo para comenzar.</p>
          <p>Se mostrarán módulos para usuario tipo {userType}.</p>
        </div>
          <VentanaFichaje />
      </div>


      <div className='mt-2'>
        <h2 className='text-lg font-semibold mb-4'>Tabla de Notificaciones</h2>
        <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
            <tr>
              <th className='text-left p-2 font-light'>Título</th>
              <th className='text-left p-2 font-light'>Fecha y Hora</th>
              <th className='text-left p-2 font-light'>Estado</th>
            </tr>
          </thead>
          <tbody>
            {notificaciones.map((notif, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 cursor-pointer ${notif.estado !== "Visualizado" ? "bg-white" : "bg-gray-200/60"
                  }`} onClick={() => { router.push('/dashboard/notificaciones/notificacion') }}
              >
                <td className='p-2 border-b border-gray-200'>{notif.titulo}</td>
                <td className='p-2 border-b border-gray-200'>{notif.fechaHora}</td>
                <td className='p-2 border-b border-gray-200'>{notif.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className='mt-12  bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
        onClick={() => { router.push('/dashboard/notificaciones') }}>
        Ver todas las notificaciones</button>
    </div>
  );
};

export default Dashboard;
