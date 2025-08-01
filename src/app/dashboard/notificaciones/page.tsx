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
      <div>
        <h2 className='text-lg font-semibold mb-4'>Tabla de Notificaciones <span className='font-light '>(último mes)</span></h2>
              <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900">
                 Marcar todas como leídas
              </button>
      </div>
        <table className='min-w-full'>
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
                  }`} onClick={()=>{router.push('/dashboard/notificaciones/notificacion')}}
              >
                <td className='p-2 border-b border-gray-200'>{notif.titulo}</td>
                <td className='p-2 border-b border-gray-200'>{notif.fechaHora}</td>
                <td className='p-2 border-b border-gray-200'>{notif.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  );
};

export default Notificaciones;