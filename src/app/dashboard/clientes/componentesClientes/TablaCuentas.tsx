'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import resultados from '@/app/contents/cuentasContents.json';

interface Cuenta {
  id_cuenta: string;
  nombre_empresa: string;
  pais_cuenta: string;
  id_agente: string;
  datos_comerciales: {
    telefono_principal_cuenta: string;
  };
  fechaUltimoComentario?: string;  
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
  const router = useRouter();

  const resultadosFiltrados = resultados.filter((r: Cuenta) => {
    const coincideCliente =
      clienteFiltro === '' ||
      r.nombre_empresa.toLowerCase().includes(clienteFiltro.toLowerCase()) ||
      r.id_cuenta.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideAgente =
      agenteFiltro === '' || r.id_agente === agenteFiltro;

    const coincideTelefono =
      telFiltro === '' ||
      r.datos_comerciales.telefono_principal_cuenta.includes(telFiltro);

    // No hay dominio en tu JSON, así que siempre coincidimos
    const coincideDominio = true;

    return coincideCliente && coincideAgente && coincideTelefono && coincideDominio;
  });

  const handleRedirection = (id: string) => {
    router.push(`/dashboard/clientes/cuentas/${id}`);
  };

  return (
        <div className="">
      <table className="mt-5  rounded-lg shadow-xl bg-white min-w-full">
        <thead className="bg-blue-950/80 text-white rounded-lg">
          <tr>
            <th className="text-left p-2 font-light">Nombre Empresa </th>
            <th className="text-left p-2 font-light">ID Cuenta</th>
            <th className="text-left p-2 font-light">Agente Asignado</th>
            <th className="text-left p-2 font-light">País</th>
            <th className="text-left p-2 font-light">Tel principal</th>
           </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id_cuenta}
              className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
              onClick={() => handleRedirection(res.id_cuenta)}
            >
              <td className="p-2 border-b border-gray-200">{res.nombre_empresa}</td>
              <td className="p-2 border-b border-gray-200">{res.id_cuenta}</td>
              <td className="p-2 border-b border-gray-200">{res.id_agente}</td>
              <td className="p-2 border-b border-gray-200">{res.pais_cuenta}</td>
              <td className="p-2 border-b border-gray-200">
                {res.datos_comerciales.telefono_principal_cuenta}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      {resultadosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
};

export default Tablacuentas;
