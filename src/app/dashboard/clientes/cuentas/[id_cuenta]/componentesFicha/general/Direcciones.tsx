'use client';
import React, { FC } from 'react';

interface Direccion {
  nombre_direccion: string;
  pais_direccion: string;
  region_direccion: string;
  ciudad_direccion: string;
  codigo_postal: string;
  direccion_completa: string;
  telefono_direccion: string;
  descripcion_direccion: string;
}

interface DireccionesProps {
  direcciones: Direccion[];
}

const Direcciones: FC<DireccionesProps> = ({ direcciones }) => {
  if (!direcciones || direcciones.length === 0) {
    return <p className="text-gray-500">No hay direcciones registradas para esta cuenta.</p>;
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Direcciones</h2>

      {direcciones.map((d, idx) => (
        <table
          key={idx}
          className="min-w-full border border-gray-300 text-xs bg-white rounded shadow-sm overflow-hidden"
        >
          <thead className="bg-blue-950/80 text-white">
            <tr>
              <th className="text-left p-2 font-light">Nombre de la ubicación</th>
              <th className="text-left p-2 font-light">País</th>
              <th className="text-left p-2 font-light">Estado/Región</th>
              <th className="text-left p-2 font-light">Ciudad</th>
              <th className="text-left p-2 font-light">Código postal</th>
              <th className="text-left p-2 font-light">Dirección completa</th>
              <th className="text-left p-2 font-light">Teléfono principal</th>
              <th className="text-left p-2 font-light">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b">{d.nombre_direccion}</td>
              <td className="p-2 border-b">{d.pais_direccion}</td>
              <td className="p-2 border-b">{d.region_direccion}</td>
              <td className="p-2 border-b">{d.ciudad_direccion}</td>
              <td className="p-2 border-b">{d.codigo_postal}</td>
              <td className="p-2 border-b">{d.direccion_completa}</td>
              <td className="p-2 border-b">{d.telefono_direccion}</td>
              <td className="p-2 border-b">{d.descripcion_direccion}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Direcciones;
