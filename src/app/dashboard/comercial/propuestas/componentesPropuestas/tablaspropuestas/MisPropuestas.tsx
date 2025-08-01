import React, { FC } from 'react';
 import { useRouter } from 'next/navigation';
import FolderSvg from '../svg/FolderSvg';

interface Resultado {
  id: number;
  nombreEmpresa: string;
  codigoCRM: string;
  numeroPropuestas: number;
  agenteAsignado: string;
  fechaUltimaPropuesta: string;
}

interface MisPropuestasProps {
  clienteFiltro: string;
  agenteFiltro: string;
  fechaInicio: string;
  fechaFin: string;
}

const mockResultados: Resultado[] = [
  {
    id: 1,
    nombreEmpresa: 'TVITEC',
    codigoCRM: '56123',
    numeroPropuestas: 3,
    agenteAsignado: "1-Gimeno",
    fechaUltimaPropuesta: '12-01-2025',
  },
  {
    id: 2,
    nombreEmpresa: 'Shencheng',
    codigoCRM: '31451',
    numeroPropuestas: 5,
    agenteAsignado: "123-Pep",
    fechaUltimaPropuesta: '02-03-2025',
  },
  {
    id: 3,
    nombreEmpresa: 'Opera',
    codigoCRM: '563423',
    numeroPropuestas: 2,
    agenteAsignado: "123-Pep",
    fechaUltimaPropuesta: '12-12-2025',
  },
];

const MisPropuestas: FC<MisPropuestasProps> = ({
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
    <div className="h-full">
        <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
          <tr>
             <th className='text-left p-2 font-light'></th>
             <th className='text-left p-2 font-light'>Nombre Empresa</th>
             <th className='text-left p-2 font-light'>Código CRM</th>
             <th className='text-left p-2 font-light'>Propuestas creadas</th>
             <th className='text-left p-2 font-light'>Agente Asignado</th>
             <th className='text-left p-2 font-light'>Fecha Última Propuesta</th>
          </tr>
        </thead>
        <tbody className=''>
          {resultadosFiltrados.map((res) => (
            <tr key={res.id}className='hover:bg-gray-50 cursor-pointer'
            onClick={()=>{handleRedirection('/dashboard/comercial/propuestas/propuestascliente')}}>
               <td className='p-2 border-b border-gray-200'><FolderSvg /></td>
               <td className='p-2 border-b border-gray-200'>{res.nombreEmpresa}</td>
               <td className='p-2 border-b border-gray-200'>{res.codigoCRM}</td>
               <td className='p-2 border-b border-gray-200'>{res.numeroPropuestas}</td>
               <td className='p-2 border-b border-gray-200'>{res.agenteAsignado}</td>
               <td className='p-2 border-b border-gray-200'>{res.fechaUltimaPropuesta}</td>
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

export default MisPropuestas;
