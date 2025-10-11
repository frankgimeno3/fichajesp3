'use client';
import React, { FC, ChangeEvent } from 'react';
import agentes from "@/app/contents/agentesContents.json";

interface DatosCRMProps {
  nombre_empresa: string;
  id_agente: string;
  presente_en_qq: boolean;
  actividades: string;  
  fuente_novedades: string;
  onChange: (field: string, value: string | boolean) => void; 
}

const DatosCRM: FC<DatosCRMProps> = ({
  nombre_empresa,
  id_agente,
  presente_en_qq,
  actividades,
  fuente_novedades,
  onChange
}) => {
  const agente = agentes.find((a) => a.id_agente === id_agente);
  const nombreAgente = agente ? agente.nombre_agente : id_agente;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange('presente_en_qq', e.target.value === 'Sí');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos generales</h2>
      <table           className="min-w-full border border-gray-300 text-xs bg-white rounded shadow-sm overflow-hidden"
>
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre Empresa</th>
            <th className="text-left p-2 font-light">Agente Asignado</th>
            <th className="text-left p-2 font-light">Actividades</th>
            <th className="text-left p-2 font-light">QQ?</th>
            <th className="text-left p-2 font-light">Fuentes novedades</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-100/30">
             <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                name="nombre_empresa"
                value={nombre_empresa}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>

             <td className="p-2 border-b border-gray-200">
              {nombreAgente}
            </td>

             <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                name="actividades"
                value={actividades}  
                onChange={handleInputChange}  
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>

             <td className="p-2 border-b border-gray-200">
              <select
                name="presente_en_qq"
                value={presente_en_qq ? 'Sí' : 'No'}
                onChange={handleSelectChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </select>
            </td>

             <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                name="fuente_novedades"
                value={fuente_novedades}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosCRM;
