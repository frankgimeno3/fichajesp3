import React, { FC } from 'react';

interface Evento {
  autor: string;
  evento: 'Entrada' | 'Pausa' | 'Salida';
  diaHora: string;
  comentarios: string;
}

interface EventosHoyProps {
  eventos: Evento[];
}

const EventosHoy: FC<EventosHoyProps> = ({ eventos }) => {
  return (
    <div>
      <div className="text-xl text-gray-600 mb-4">Eventos de hoy</div>
      <div className="bg-white p-4 rounded shadow-md overflow-x-auto">
        <table className="min-w-full text-left text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Autor</th>
              <th className="p-2">Tipo de evento</th>
              <th className="p-2">Fecha y hora</th>
              <th className="p-2">Comentarios</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{evento.autor}</td>
                <td className="p-2">{evento.evento}</td>
                <td className="p-2">{evento.diaHora}</td>
                <td className="p-2">{evento.comentarios}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventosHoy;
