"use client";
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { Publicacion } from '../page';
 
interface FaseConfirmacionProps {
  selectedItems: string[];
  publicaciones: Publicacion[];
  setFase: (value: string) => void;
}

const FaseConfirmacion: FC<FaseConfirmacionProps> = ({ selectedItems, publicaciones, setFase }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Confirmación de Publicaciones</h2>

      {publicaciones.map((pub, index) => (
        <div key={index} className="border p-4 rounded-lg shadow flex flex-col gap-2">
          <h3 className="font-semibold">{pub.name}</h3>
          <p><strong>Deadline máximo materiales:</strong> {pub.deadline}</p>
          <p><strong>Fecha de publicación:</strong> {pub.fechaPublicacion}</p>
          {pub.edicionEspecial && <p><strong>Edición especial:</strong> {pub.edicionEspecial}</p>}
          {pub.tematica && <p><strong>Temática:</strong> {pub.tematica}</p>}
          {pub.desdeNumero && <p><strong>Desde número:</strong> {pub.desdeNumero}</p>}
          {pub.hastaNumero && <p><strong>Hasta número:</strong> {pub.hastaNumero}</p>}
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setFase('crearPublicaciones')}
        >
          Volver
        </button>
        <button
          className="bg-blue-950 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => router.push("/dashboard/produccion/servicios")}
        >
          Confirmar y crear
        </button>
      </div>
    </div>
  );
};

export default FaseConfirmacion;
