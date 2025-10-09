'use client';
import React, { FC, useState, useEffect } from 'react';
import FiltrosPropuestas from './componentesPropuestas/FiltrosPropuestas';
import MiddleNav from '../../../general_components/componentes_recurrentes/MiddleNav';
import { useRouter } from 'next/navigation';
import TodasPropuestas from './componentesPropuestas/tablaspropuestas/TodasPropuestas';
import MisPendientes from './componentesPropuestas/tablaspropuestas/MisPendientes';
import agentes from '@/app/contents/agentesContents.json';
import propuestas from '@/app/contents/propuestasContents.json';

const Propuestas: FC = () => {
  const [pestana, setPestana] = useState<'miasenproceso' | 'todasporcliente'>('miasenproceso');
  const [clienteFiltro, setClienteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [estadoFiltro, setEstadoFiltro] = useState('');
  const router = useRouter();

  const [agenteActual, setAgenteActual] = useState('ag_25_0004');

  // 🔄 Cuando cambia la pestaña, ajustamos los filtros bloqueados
  useEffect(() => {
    if (pestana === 'miasenproceso') {
      // Bloquea agente y estado, los fija
      setAgenteFiltro(agenteActual);
      setEstadoFiltro('Pendiente');
    } else if (pestana === 'todasporcliente') {
      // Desbloquea agente y estado, limpia fechas bloqueadas
      setFechaInicio('');
      setFechaFin('');
      setEstadoFiltro('');
    }
  }, [pestana, agenteActual]);

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Propuestas para el agente ${agenteActual}`} />

      <div className="bg-gray-100 min-h-screen px-12 text-gray-600">
        <div className="flex flex-row justify-end py-5">
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 text-md"
            onClick={() => router.push('/dashboard/comercial/propuestas/crear')}
          >
            <p>Crear propuesta</p>
          </button>
        </div>

        <div className="flex flex-row justify-between w-full items-center bg-white rounded p-5">
          <FiltrosPropuestas
            clienteFiltro={clienteFiltro}
            setClienteFiltro={setClienteFiltro}
            agenteFiltro={agenteFiltro}
            setAgenteFiltro={setAgenteFiltro}
            fechaInicio={fechaInicio}
            setFechaInicio={setFechaInicio}
            fechaFin={fechaFin}
            setFechaFin={setFechaFin}
            estadoFiltro={estadoFiltro}
            setEstadoFiltro={setEstadoFiltro}
            pestana={pestana}
            agenteActual={agenteActual}
          />
        </div>

        <div className="mt-5 p-12 rounded-lg shadow-xl bg-white">
          <div className="flex flex-row relative mb-4">
            <div
              className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300 ${
                pestana === 'miasenproceso'
                  ? 'bg-blue-950 text-white z-30 rounded-tl-lg'
                  : 'z-10 bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setPestana('miasenproceso')}
            >
              Mis propuestas pendientes
            </div>
            <div
              className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300 ${
                pestana === 'todasporcliente'
                  ? 'bg-blue-950 text-white z-30 rounded-tl-lg'
                  : 'z-10 bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setPestana('todasporcliente')}
            >
              Todas las propuestas
            </div>
          </div>

          {pestana === 'miasenproceso' && (
            <MisPendientes
              clienteFiltro={clienteFiltro}
              agenteActual={agenteActual}
              fechaInicio={fechaInicio}
              fechaFin={fechaFin}
             />
          )}

          {pestana === 'todasporcliente' && (
            <TodasPropuestas
              clienteFiltro={clienteFiltro}
              agenteFiltro={agenteFiltro}
              fechaInicio={fechaInicio}
              fechaFin={fechaFin}
              estadoFiltro={estadoFiltro}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Propuestas;
