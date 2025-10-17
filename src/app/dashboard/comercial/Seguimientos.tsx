"use client"
import React, { FC } from "react";
import seguimientos from "@/app/contents/seguimientosContents.json"; // Importamos el JSON

interface Seguimiento {
  id_seguimeinto: string;
  tema_seguimiento: string;
  descripcion_seguimiento: string;
  id_agente: string;
  link_seguimiento: string;
}

interface SeguimientosProps {
  agenteActual: string;
}

const Seguimientos: FC<SeguimientosProps> = ({ agenteActual }) => {
  // Filtramos los seguimientos del agente actual
  const data = (seguimientos as Seguimiento[]).filter(
    (item) => item.id_agente === agenteActual
  );

  return (
    <div>
      <div className="flex flex-row items-center justify-between pb-2">
        <h2 className="text-lg font-semibold">
          Tareas en curso para el agente {agenteActual}
        </h2>
      </div>

      <table className="min-w-full">
        <thead className="bg-blue-950 text-white ">
          <tr>
            <th className="text-left p-2 font-light">Tema</th>
            <th className="text-left p-2 font-light">Descripción de las gestiones</th>
            <th className="text-left p-2 font-light">Link al excel</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id_seguimeinto} className="bg-white hover:bg-white/50">
              <td className="p-2 border-b border-gray-200">
                {item.tema_seguimiento}
              </td>
              <td className="p-2 border-b border-gray-200">
                {item.descripcion_seguimiento}
              </td>
              <td className="p-2 border-b border-gray-200">
                <a
                  href={item.link_seguimiento}
                  className="text-blue-950 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver enlace
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Seguimientos;
