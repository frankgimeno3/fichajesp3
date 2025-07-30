import React, { FC } from 'react';
import PropSvg from '../componentesPropuestas/PropSvg';
import { useRouter } from 'next/navigation';

interface Resultado {
  id: number;
  nombrePropuesta: string;
  creadaPor: string;
  fechaCreacion: string;
  valorTotal: number;
  estado: string;
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
    nombrePropuesta: 'Propuesta A',
    creadaPor: 'Juan Pérez',
    fechaCreacion: '2025-07-20',
    valorTotal: 15000,
    estado: 'Pendiente',
  },
  {
    id: 2,
    nombrePropuesta: 'Propuesta B',
    creadaPor: 'María Gómez',
    fechaCreacion: '2025-07-10',
    valorTotal: 32000,
    estado: 'Aprobada',
  },
  {
    id: 3,
    nombrePropuesta: 'Propuesta X',
    creadaPor: 'Carlos Ruiz',
    fechaCreacion: '2025-06-30',
    valorTotal: 7800,
    estado: 'Rechazada',
  },
];

const TablaPropuestasCliente: FC<TablaPropuestasProps> = ({
  clienteFiltro,
  agenteFiltro,
  fechaInicio,
  fechaFin,
}) => {
  const resultadosFiltrados = mockResultados.filter((r) => {
    const coincideCliente =
      clienteFiltro === '' ||
      r.nombrePropuesta.toLowerCase().includes(clienteFiltro.toLowerCase()) ||
      r.creadaPor.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideAgente =
      agenteFiltro === '' || r.creadaPor.toLowerCase().includes(agenteFiltro.toLowerCase());

    const coincideFecha =
      (!fechaInicio || new Date(r.fechaCreacion) >= new Date(fechaInicio)) &&
      (!fechaFin || new Date(r.fechaCreacion) <= new Date(fechaFin));

    return coincideCliente && coincideAgente && coincideFecha;
  });

  const router = useRouter();


  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left px-4 py-2'></th>
            <th className='text-left px-4 py-2'>Nombre Propuesta</th>
            <th className='text-left px-4 py-2'>Creada por</th>
            <th className='text-left px-4 py-2'>Fecha de creación</th>
            <th className='text-left px-4 py-2'>Valor total</th>
            <th className='text-left px-4 py-2'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
              onClick={() => {
                router.push('/dashboard/propuestas/propuesta');
              }}
            >
              <td className='px-4 py-2'><PropSvg /></td>
              <td className='px-4 py-2'>{res.nombrePropuesta}</td>
              <td className='px-4 py-2'>{res.creadaPor}</td>
              <td className='px-4 py-2'>{res.fechaCreacion}</td>
              <td className='px-4 py-2'>${res.valorTotal.toLocaleString()}</td>
              <td className='px-4 py-2'>{res.estado}</td>
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

export default TablaPropuestasCliente;
