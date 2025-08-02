"use client";
import React, { FC, useState } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';
import { useRouter } from 'next/navigation';

interface Agente {
  id: number;
  nombre: string;
}

interface InformescomercialesProps {}

const mockAgentes: Agente[] = [
  { id: 1, nombre: 'Laura Martínez' },
  { id: 2, nombre: 'Carlos Pérez' },
  { id: 3, nombre: 'Lucía Gómez' },
  { id: 4, nombre: 'Javier Ruiz' },
  { id: 5, nombre: 'Marta Sánchez' },
  { id: 6, nombre: 'Andrés Torres' },
  { id: 7, nombre: 'Sofía Delgado' },
  { id: 8, nombre: 'Diego Fernández' },
];

const Informescomerciales: FC<InformescomercialesProps> = () => {
  const router = useRouter()
  const [agentes, setAgentes] = useState<Agente[]>(mockAgentes);

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal={` Informes Comerciales `} />

      <div className="bg-white min-h-screen p-4 text-gray-600 w-full">
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {agentes.map((agente) => (
                <tr key={agente.id} className="hover:bg-gray-50 cursor-pointer" onClick={()=>{router.push('/dashboard/administracion/informes/comercial')}}>
                  <td className="py-2 px-4 border-b">{agente.id}</td>
                  <td className="py-2 px-4 border-b">{agente.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Informescomerciales;
