import React, { FC } from 'react';

interface Solicitud {
  empleado: string;
  original: {
    fecha: string;
    tipo: 'Entrada' | 'Pausa' | 'Salida';
    comentario: string;
  };
  solicitado: {
    fecha: string;
    tipo: 'Entrada' | 'Pausa' | 'Salida';
    comentario: string;
  };
}

interface SolicitudesProps {
  solicitudes: Solicitud[];
}

const Solicitudes: FC<SolicitudesProps> = ({ solicitudes }) => {
  return (
    <div>
      <div className="text-xl text-gray-600 mb-2">Nuevas solicitudes</div>
      <div className="bg-white p-4 rounded shadow-md overflow-x-auto">
        <table className="min-w-full text-left text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Empleado</th>
              <th className="p-2">Fecha y hora original vs solicitadas</th>
              <th className="p-2">Tipo de evento original vs solicitado</th>
              <th className="p-2">Comentario original vs nuevo</th>
              <th className="p-2">Contestar</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((sol, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{sol.empleado}</td>
                <td className="p-2">{sol.original.fecha} → {sol.solicitado.fecha}</td>
                <td className="p-2">{sol.original.tipo} → {sol.solicitado.tipo}</td>
                <td className="p-2">{sol.original.comentario} → {sol.solicitado.comentario}</td>
                <td className="p-2 flex gap-2">
                  <button className="p-1 rounded hover:bg-green-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l12-12-1.4-1.4z" />
                    </svg>
                  </button>
                  <button className="p-1 rounded hover:bg-red-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M18.3 5.71L12 12.01 5.71 5.71 4.29 7.12 10.59 13.4 4.29 19.7 5.71 21.1 12 14.83l6.29 6.29 1.42-1.41-6.29-6.29 6.29-6.29z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Solicitudes;