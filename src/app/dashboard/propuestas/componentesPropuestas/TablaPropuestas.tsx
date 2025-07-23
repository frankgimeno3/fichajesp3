import React, { FC } from 'react';
import FolderSvg from './FolderSvg';
import { useRouter } from 'next/navigation';

interface Resultado {
  id: number;
  nombreEmpresa: string;
  codigoCRM: string;
  numeroPropuestas: number;
  agenteAsignado: number;
  fechaUltimaPropuesta: string;
}

interface TablaPropuestasProps {
  clienteFiltro: string;
  agenteFiltro: string;
  fechaInicio: string;
  fechaFin: string;
}

const mockResultados: Resultado[] = [
  {
    id: 1,
    nombreEmpresa: 'Empresa A',
    codigoCRM: 'CRM001',
    numeroPropuestas: 3,
    agenteAsignado: 123,
    fechaUltimaPropuesta: '2025-07-20',
  },
  {
    id: 2,
    nombreEmpresa: 'Empresa B',
    codigoCRM: 'CRM002',
    numeroPropuestas: 5,
    agenteAsignado: 456,
    fechaUltimaPropuesta: '2025-07-10',
  },
  {
    id: 3,
    nombreEmpresa: 'Cliente X',
    codigoCRM: 'CRM999',
    numeroPropuestas: 2,
    agenteAsignado: 123,
    fechaUltimaPropuesta: '2025-06-30',
  },
];

const TablaPropuestas: FC<TablaPropuestasProps> = ({
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
      agenteFiltro === '' || r.agenteAsignado.toString() === agenteFiltro;

    const coincideFecha =
      (!fechaInicio || new Date(r.fechaUltimaPropuesta) >= new Date(fechaInicio)) &&
      (!fechaFin || new Date(r.fechaUltimaPropuesta) <= new Date(fechaFin));

    return coincideCliente && coincideAgente && coincideFecha;
  });

  const router = useRouter()
  const handleRedirection = (params:string)=>{
    router.push(params)
  }
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left px-4 py-2'></th>
            <th className='text-left px-4 py-2'>Nombre Empresa</th>
            <th className='text-left px-4 py-2'>Código CRM</th>
            <th className='text-left px-4 py-2'>Propuestas creadas</th>
            <th className='text-left px-4 py-2'>Agente Asignado</th>
            <th className='text-left px-4 py-2'>Fecha Última Propuesta</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr key={res.id} className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
            onClick={()=>{handleRedirection('/dashboard/propuestas/cliente')}}>
              <td className='px-4 py-2'><FolderSvg /></td>
              <td className='px-4 py-2'>{res.nombreEmpresa}</td>
              <td className='px-4 py-2'>{res.codigoCRM}</td>
              <td className='px-4 py-2'>{res.numeroPropuestas}</td>
              <td className='px-4 py-2'>{res.agenteAsignado}</td>
              <td className='px-4 py-2'>{res.fechaUltimaPropuesta}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {resultadosFiltrados.length === 0 && (
        <p className='mt-4 text-center text-gray-500'>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default TablaPropuestas;
