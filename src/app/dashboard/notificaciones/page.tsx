"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import notifsContents from '../../contents/notifsContents.json';  

interface Notificacion {
  id_notif: string;
  id_usuario: string;
  estado_notif: string;
  fecha_notif: string;
  hora_notif: string;
  tipo_notif: string;
  titulo_notif: string;
  contenido_notif: string;
  redireccion_notif: string;
}

const Notificaciones: FC = () => {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);
  const router = useRouter();

  useEffect(() => {
    setNotificaciones(notifsContents as Notificacion[]);
  }, []);

  const marcarTodasComoLeidas = () => {
    setNotificaciones((prev) =>
      prev.map((notif) => ({ ...notif, estado_notif: "leida" }))
    );
  };

  const formatearFecha = (fechaExcel: string, hora: string) => {
    // Excel date serial -> convertir a fecha real
    const baseDate = new Date(1899, 11, 30); 
    const fecha = new Date(baseDate.getTime() + Number(fechaExcel) * 86400000);
    return `${fecha.toLocaleDateString()} ${hora}`;
  };

  return (
    <div className='bg-white h-full min-h-screen p-12 text-gray-600'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold'>
          Tabla de Notificaciones{" "}
          <span className='font-light'>(último mes)</span>
        </h2>
        <button
          onClick={marcarTodasComoLeidas}
          className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
        >
          Marcar todas como leídas
        </button>
      </div>

      <table className='min-w-full border'>
        <thead className='bg-blue-950 text-white'>
          <tr>
            <th className='text-left p-2 font-light'>Título</th>
            <th className='text-left p-2 font-light'>Fecha y Hora</th>
            <th className='text-left p-2 font-light'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {notificaciones.map((notif) => (
            <tr
              key={notif.id_notif}
              className={`hover:bg-gray-50 cursor-pointer ${
                notif.estado_notif === "pendiente" ? "bg-white" : "bg-gray-200/60"
              }`}
              onClick={() => {
                router.push(`/dashboard/notificaciones/${notif.id_notif}`);
              }}
            >
              <td className='p-2 border-b border-gray-200'>{notif.titulo_notif}</td>
              <td className='p-2 border-b border-gray-200'>
                {formatearFecha(notif.fecha_notif, notif.hora_notif)}
              </td>
              <td className='p-2 border-b border-gray-200 capitalize'>{notif.estado_notif}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notificaciones;
