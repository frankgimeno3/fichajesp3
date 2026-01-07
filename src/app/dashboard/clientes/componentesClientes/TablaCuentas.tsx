'use client';

import React, { FC, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import resultados from '@/app/contents/cuentasContents.json';
import agentesContents from '@/app/contents/agentesContents.json';

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
  codigoCrmFiltro: string;
  agenteFiltro: string;
  telFiltro: string;
}

const Tablacuentas: FC<TablacuentasProps> = ({
  clienteFiltro,
  codigoCrmFiltro,
  agenteFiltro,
  telFiltro,
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const resultadosFiltrados = useMemo(() => {
    return resultados.filter((r: Cuenta) => {
      const coincideCliente =
        clienteFiltro === '' ||
        r.nombre_empresa.toLowerCase().includes(clienteFiltro.toLowerCase());

      const coincideCodigoCrm =
        codigoCrmFiltro === '' ||
        r.id_cuenta.toLowerCase().includes(codigoCrmFiltro.toLowerCase());

      const coincideAgente =
        agenteFiltro === '' || r.id_agente === agenteFiltro;

      const coincideTelefono =
        telFiltro === '' ||
        r.datos_comerciales.telefono_principal_cuenta.includes(telFiltro);

      return coincideCliente && coincideCodigoCrm && coincideAgente && coincideTelefono;
    });
  }, [clienteFiltro, codigoCrmFiltro, agenteFiltro, telFiltro]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [clienteFiltro, codigoCrmFiltro, agenteFiltro, telFiltro]);

  const totalPages = Math.ceil(resultadosFiltrados.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const resultadosPaginados = resultadosFiltrados.slice(startIndex, endIndex);

  const getNombreCompletoAgente = (idAgente: string) => {
    const agente = agentesContents.find((a) => a.id_agente === idAgente);
    return agente ? agente.nombre_completo_agente : idAgente;
  };

  const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>, href: string) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
  };

  return (
        <div className="">
      <table className="mt-5  rounded-lg shadow-xl bg-white min-w-full">
        <thead className="bg-blue-950/80 text-white rounded-lg">
          <tr>
            <th className="text-left p-2 font-light pl-6">Nombre Empresa </th>
            <th className="text-left p-2 font-light">ID Cuenta</th>
            <th className="text-left p-2 font-light">Agente Asignado</th>
            <th className="text-left p-2 font-light">País</th>
            <th className="text-left p-2 font-light">Tel principal</th>
           </tr>
        </thead>
        <tbody>
          {resultadosPaginados.map((res) => (
            <tr
              key={res.id_cuenta}
              onClick={(e) => handleRowClick(e, `/dashboard/clientes/cuentas/${res.id_cuenta}`)}
              className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
            >
              <td className="p-2 border-b border-gray-200 pl-6">{res.nombre_empresa}</td>
              <td className="p-2 border-b border-gray-200">{res.id_cuenta}</td>
              <td className="p-2 border-b border-gray-200">{getNombreCompletoAgente(res.id_agente)}</td>
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
      {resultadosFiltrados.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-950 text-white hover:bg-blue-900 cursor-pointer'
            }`}
          >
            Anterior
          </button>
          <span className="text-gray-600">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-950 text-white hover:bg-blue-900 cursor-pointer'
            }`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Tablacuentas;
