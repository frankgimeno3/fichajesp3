'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import resultados from './clientsdata.json'; // ✅ Importamos desde JSON

interface Resultado {
  id: number;
  nombreEmpresa: string;
  codigoCRM: string;
  numerocuentas: number;
  agenteAsignado: number;
  fechaUltimoComentario: string;
  telefono: string;
  dominio: string;
  pais: string;
  telprincipal: string;
}

interface TablacuentasProps {
  clienteFiltro: string;
  agenteFiltro: string;
  telFiltro: string;
  dominioFiltro: string;
}

const Tablacuentas: FC<TablacuentasProps> = ({
  clienteFiltro,
  agenteFiltro,
  telFiltro,
  dominioFiltro,
}) => {
  const resultadosFiltrados = resultados.filter((r: Resultado) => {
    const coincideCliente =
      clienteFiltro === '' ||
      r.nombreEmpresa.toLowerCase().includes(clienteFiltro.toLowerCase()) ||
      r.codigoCRM.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideAgente =
      agenteFiltro === '' || r.agenteAsignado.toString() === agenteFiltro;

    const coincideTelefono =
      telFiltro === '' || r.telefono.includes(telFiltro);

    const coincideDominio =
      dominioFiltro === '' ||
      r.dominio.toLowerCase().includes(dominioFiltro.toLowerCase());

    return coincideCliente && coincideAgente && coincideTelefono && coincideDominio;
  });

  const router = useRouter();

  const handleRedirection = (params: string) => {
    router.push(params);
  };

  return (
    <div className="p-12">
      <table className='min-w-full '>
          <thead className='bg-blue-950/80 text-white '>
              <tr>
            <th className='text-left p-2 font-light'>Nombre Empresa</th>
            <th className='text-left p-2 font-light'>Código CRM</th>
            <th className='text-left p-2 font-light'>Agente Asignado</th>
            <th className='text-left p-2 font-light'>País</th>
            <th className='text-left p-2 font-light'>Tel principal</th>
            <th className='text-left p-2 font-light'>Fecha Último Comentario</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
              onClick={() => handleRedirection('/dashboard/clientes/cuentas/ficha')}
            >
               <td className='p-2 border-b border-gray-200'>{res.nombreEmpresa}</td>
               <td className='p-2 border-b border-gray-200'>{res.codigoCRM}</td>
               <td className='p-2 border-b border-gray-200'>{res.agenteAsignado}</td>
               <td className='p-2 border-b border-gray-200'>{res.pais}</td>
               <td className='p-2 border-b border-gray-200'>{res.telprincipal}</td>
               <td className='p-2 border-b border-gray-200'>{res.fechaUltimoComentario}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {resultadosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default Tablacuentas;
