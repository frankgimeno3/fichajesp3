"use client"
import { useRouter, useParams } from 'next/navigation';
import React, { FC } from 'react';
 import data from '@/app/contents/contenidosContents.json'  

const MaterialesRevista: FC = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const idPublicacion = params.id;  

   const materiales = data.filter((item) => item.idPublicacion === idPublicacion);

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <h2 className="text-xl font-semibold mb-4">
        Materiales de la publicación {idPublicacion}
      </h2>

      <div className="overflow-x-auto bg-white rounded p-5 w-full">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left border">Empresa</th>
              <th className="px-4 py-2 text-left border">Tipo de material</th>
              <th className="px-4 py-2 text-left border">Especificaciones</th>
              <th className="px-4 py-2 text-left border">Agente</th>
              <th className="px-4 py-2 text-left border">Estado</th>
              <th className="px-4 py-2 text-left border">Deadline material</th>
            </tr>
          </thead>
          <tbody>
            {materiales.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  router.push(`/dashboard/produccion/publicaciones/${idPublicacion}/${item.idContenido}`)
                }
              >
                <td className="px-4 py-2 border">{item.idEmpresa}</td>
                <td className="px-4 py-2 border">{item.tipoContenido}</td>
                <td className="px-4 py-2 border">{item.especificaciones}</td>
                <td className="px-4 py-2 border">{item.idAgente}</td>
                <td className="px-4 py-2 border">{item.estado}</td>
                <td className="px-4 py-2 border">{item.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialesRevista;
