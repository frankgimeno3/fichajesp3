'use client';
import React, { FC } from 'react';

interface DatosCRMProps {
  nombre_empresa: string;
  id_agente: string;
  presente_en_qq: boolean;
  actividades: string[];
  fuente_novedades: string;
}

const DatosCRM: FC<DatosCRMProps> = ({
  nombre_empresa,
  id_agente,
  presente_en_qq,
  actividades,
  fuente_novedades,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos CRM</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre Empresa</th>
            <th className="text-left p-2 font-light">ID Agente</th>
            <th className="text-left p-2 font-light">Actividades</th>
            <th className="text-left p-2 font-light">QQ?</th>
            <th className="text-left p-2 font-light">Fuentes novedades</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-100/30">
            <td className="p-2 border-b border-gray-200">{nombre_empresa}</td>
            <td className="p-2 border-b border-gray-200">{id_agente}</td>
            <td className="p-2 border-b border-gray-200">{actividades.join(', ')}</td>
            <td className="p-2 border-b border-gray-200">{presente_en_qq ? 'Sí' : 'No'}</td>
            <td className="p-2 border-b border-gray-200">{fuente_novedades}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosCRM;
