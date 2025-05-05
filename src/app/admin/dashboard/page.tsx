'use client';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

type Evento = {
  autor: string;
  evento: string;
  dia: string;
  hora: string;
  comentarios: string;
};

const Dashboard: FC = () => {
  const router = useRouter();
  const [resultados] = useState<Evento[]>([
    {
      autor: 'Juan Pérez',
      evento: 'Inicio sesión',
      dia: '05/05/2025',
      hora: '10:00 AM',
      comentarios: 'Ninguna',
    },
    {
      autor: 'Ana López',
      evento: 'Cambio de contraseña',
      dia: '05/05/2025',
      hora: '03:15 PM',
      comentarios: 'Contraseña actualizada',
    },
    {
      autor: 'Carlos Gómez',
      evento: 'Cambio de email',
      dia: '05/05/2025',
      hora: '02:00 PM',
      comentarios: 'Email cambiado a carlos@example.com',
    },
    {
      autor: 'Luisa Martínez',
      evento: 'Actualización de perfil',
      dia: '05/05/2025',
      hora: '09:30 AM',
      comentarios: 'Foto de perfil actualizada',
    },
  ]);

  const handleLogout = () => {
    console.log('logout');
  };

  const handleInformes = () => {
    router.push('/admin/dashboard/informes');
  };

  const handleUsuarios = () => {
    router.push('/admin/dashboard/usuarios');
  };

  return (
    <div>
      <nav
        className="flex flex-row justify-between p-5 px-12 items-center border-b border-gray-600"
        style={{ backgroundColor: 'rgb(255, 255, 255, 0.04)' }}
      >
        <p className="text-2xl text-gray-300">Dashboard ADMIN</p>
        <div className="flex flex-row">
          <button
            className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
            onClick={handleInformes}
          >
            Sacar informes
          </button>
          <button
            className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
            onClick={handleUsuarios}
          >
            Gestionar usuarios
          </button>
          <button
            className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="bg-gray-100 min-h-screen ">
        <div className="p-6 px-12">
          <div className="text-xl text-gray-600 mb-4">Eventos de hoy</div>

          <div className="bg-white p-4 rounded shadow-md">
            <table className="min-w-full text-left text-gray-600">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Autor</th>
                  <th className="p-2">Evento</th>
                  <th className="p-2">Día</th>
                  <th className="p-2">Hora</th>
                  <th className="p-2">Comentarios</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((evento, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{evento.autor}</td>
                    <td className="p-2">{evento.evento}</td>
                    <td className="p-2">{evento.dia}</td>
                    <td className="p-2">{evento.hora}</td>
                    <td className="p-2">{evento.comentarios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
