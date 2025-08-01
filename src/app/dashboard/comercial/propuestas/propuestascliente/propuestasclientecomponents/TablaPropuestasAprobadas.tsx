import React, { FC } from 'react';
import PropSvg from '../../componentesPropuestas/svg/PropSvg';
import { useRouter } from 'next/navigation';

interface Resultado {
  id: number;
  nombrePropuesta: string;
  creadaPor: string;
  fechaCreacion: string;
  valorTotal: number;
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
    valorTotal: 15000  },
  {
    id: 2,
    nombrePropuesta: 'Propuesta B',
    creadaPor: 'María Gómez',
    fechaCreacion: '2025-07-10',
    valorTotal: 32000  },
  {
    id: 3,
    nombrePropuesta: 'Propuesta X',
    creadaPor: 'Carlos Ruiz',
    fechaCreacion: '2025-06-30',
    valorTotal: 7800  },
];

const TablaPropuestasAprobadas: FC<TablaPropuestasProps> = ({
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
    <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
          <tr>
            <th className='text-left p-2 font-light'></th>
            <th className='text-left p-2 font-light'>Nombre Propuesta</th>
            <th className='text-left p-2 font-light'>Creada por</th>
            <th className='text-left p-2 font-light'>Fecha de creación</th>
            <th className='text-left p-2 font-light'>Valor total</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
              onClick={() => {
                router.push('/dashboard/comercial/propuestas/propuesta');
              }}
            >
              <td className='p-2 border-b border-gray-200'><PropSvg /></td>
              <td className='p-2 border-b border-gray-200'>{res.nombrePropuesta}</td>
              <td className='p-2 border-b border-gray-200'>{res.creadaPor}</td>
              <td className='p-2 border-b border-gray-200'>{res.fechaCreacion}</td>
              <td className='p-2 border-b border-gray-200'>${res.valorTotal.toLocaleString()}</td>
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

export default TablaPropuestasAprobadas;
