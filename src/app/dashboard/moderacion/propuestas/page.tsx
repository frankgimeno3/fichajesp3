'use client'
import React, { FC, useState } from 'react';
import MiddleNav from '../../../general_components/MiddleNav';
import { useRouter } from 'next/navigation'; 
import FolderSvg from './componentespropuestas/svg/FolderSvg';
import FiltrosPropuestas from './componentespropuestas/FiltrosPropuestas';

interface Resultado {
  id: number;
  nombreEmpresa: string;
  codigoCRM: string;
  numeroPropuestas: number;
  agenteAsignado: string;
  fechaUltimaPropuesta: string;
}

const Propuestas: FC = () => {
  const mockResultados: Resultado[] = [
    { id: 1, nombreEmpresa: 'TVITEC', codigoCRM: '56123', numeroPropuestas: 3, agenteAsignado: "1-Gimeno", fechaUltimaPropuesta: '2025-01-12' },
    { id: 2, nombreEmpresa: 'Shencheng', codigoCRM: '31451', numeroPropuestas: 5, agenteAsignado: "123-Pep", fechaUltimaPropuesta: '2025-03-02' },
    { id: 3, nombreEmpresa: 'Opera', codigoCRM: '563423', numeroPropuestas: 2, agenteAsignado: "123-Pep", fechaUltimaPropuesta: '2025-12-12' },
  ];

  const [pestana, setPestana] = useState("miasenproceso");
  const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const router = useRouter();

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

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Gestor de propuestas`} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className='flex flex-row justify-between w-full items-center bg-white rounded p-5'>
          <FiltrosPropuestas
            clienteFiltro={clienteFiltro}
            setClienteFiltro={setClienteFiltro}
            agenteFiltro={agenteFiltro}
            setAgenteFiltro={setAgenteFiltro}
            fechaInicio={fechaInicio}
            setFechaInicio={setFechaInicio}
            fechaFin={fechaFin}
            setFechaFin={setFechaFin}
          />
        </div>

        <div className='mt-5 p-12 rounded-lg shadow-xl bg-white'>
          <div className="h-full">
            <table className='min-w-full'>
              <thead className='bg-blue-950 text-white'>
                <tr>
                  <th className='text-left p-2 font-light'></th>
                  <th className='text-left p-2 font-light'>Nombre Empresa</th>
                  <th className='text-left p-2 font-light'>Código CRM</th>
                  <th className='text-left p-2 font-light'>Propuestas creadas</th>
                  <th className='text-left p-2 font-light'>Agente asignado actual</th>
                  <th className='text-left p-2 font-light'>Fecha Última Propuesta</th>
                </tr>
              </thead>
              <tbody>
                {resultadosFiltrados.map((res) => (
                  <tr key={res.id} className='hover:bg-gray-50 cursor-pointer'
                    onClick={() => { router.push('/dashboard/comercial/propuestas/propuestascliente') }}>
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
        </div>
      </div>
    </div>
  );
};

export default Propuestas;
