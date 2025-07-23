"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface NotificacionesProps {
  
}

const Notificaciones: FC<NotificacionesProps> = ({ }) => {
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
    const router = useRouter()
  
  return (
    <div className='bg-white h-full min-h-screen p-12 text-gray-600'>
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
              <tr
                key={index}
                className={`hover:bg-gray-50 cursor-pointer ${notif.estado !== "Visualizado" ? "bg-white" : "bg-gray-200/60"
                  }`} onClick={()=>{router.push('/dashboard/notificaciones/notificacion')}}
              >
                <td className='p-2 border-b'>{notif.titulo}</td>
                <td className='p-2 border-b'>{notif.fechaHora}</td>
                <td className='p-2 border-b'>{notif.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  );
};

export default Notificaciones;