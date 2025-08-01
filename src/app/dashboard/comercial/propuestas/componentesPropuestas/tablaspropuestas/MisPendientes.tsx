import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import PropSvg from '../svg/PropSvg';

interface Resultado {
  id: number;
  codigoPropuesta: string;
  nombrePropuesta: string;
  nombreEmpresa: string;
  codigoCRM: string;
  propuestasCreadas: number;
  enviadaDia: string;
  validaHasta: string;
}

interface MisPendientesProps {
  clienteFiltro: string;
  agenteFiltro: string;
  fechaInicio: string;
  fechaFin: string;
}

const mockResultados: Resultado[] = [
  {
    id: 1,
    codigoPropuesta: 'PR-001',
    nombrePropuesta: 'Propuesta Ventanas TVITEC',
    nombreEmpresa: 'TVITEC',
    codigoCRM: '56123',
    propuestasCreadas: 3,
    enviadaDia: '2025-01-12',
    validaHasta: '2025-02-12',
  },
  {
    id: 2,
    codigoPropuesta: 'PR-002',
    nombrePropuesta: 'Fachada Shencheng',
    nombreEmpresa: 'Shencheng',
    codigoCRM: '31451',
    propuestasCreadas: 5,
    enviadaDia: '2025-03-02',
    validaHasta: '2025-04-02',
  },
  {
    id: 3,
    codigoPropuesta: 'PR-003',
    nombrePropuesta: 'Opera Tower Madrid',
    nombreEmpresa: 'Opera',
    codigoCRM: '563423',
    propuestasCreadas: 2,
    enviadaDia: '2025-12-12',
    validaHasta: '2026-01-12',
  },
];

const MisPendientes: FC<MisPendientesProps> = ({
  clienteFiltro,
  agenteFiltro,
  fechaInicio,
  fechaFin,
}) => {
  const resultadosFiltrados = mockResultados.filter((r) => {
    const coincideCliente =
      clienteFiltro === '' ||
      r.nombreEmpresa.toLowerCase().includes(clienteFiltro.toLowerCase()) ||
      r.codigoCRM.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideAgente =
      agenteFiltro === '' ||
      r.nombrePropuesta.toLowerCase().includes(agenteFiltro.toLowerCase());

    const coincideFecha =
      (!fechaInicio || new Date(r.enviadaDia) >= new Date(fechaInicio)) &&
      (!fechaFin || new Date(r.enviadaDia) <= new Date(fechaFin));

    return coincideCliente && coincideAgente && coincideFecha;
  });

  const router = useRouter();
  const handleRedirection = (params: string) => {
    router.push(params);
  };

  return (
    <div className="h-full">
      <table className="min-w-full">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="text-left p-2 font-light"></th>
            <th className="px-4 py-2">Código Propuesta</th>
            <th className="text-left p-2 font-light">Nombre Propuesta</th>
            <th className="text-left p-2 font-light">Nombre Empresa</th>
            <th className="text-left p-2 font-light">Código CRM</th>
            <th className="text-left p-2 font-light">Propuestas creadas</th>
            <th className="px-4 py-2">Enviada día</th>
            <th className="px-4 py-2">Válida hasta</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() =>
                handleRedirection('/dashboard/comercial/propuestas/propuesta')
              }
            >
              <td className="p-2 border-b border-gray-200">
                <PropSvg />
              </td>
              <td className="p-2 border-b border-gray-200">{res.codigoPropuesta}</td>
              <td className="p-2 border-b border-gray-200">{res.nombrePropuesta}</td>
              <td className="p-2 border-b border-gray-200">{res.nombreEmpresa}</td>
              <td className="p-2 border-b border-gray-200">{res.codigoCRM}</td>
              <td className="p-2 border-b border-gray-200">{res.propuestasCreadas}</td>
              <td className="p-2 border-b border-gray-200">{res.enviadaDia}</td>
              <td className="p-2 border-b border-gray-200">{res.validaHasta}</td>
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

export default MisPendientes;
