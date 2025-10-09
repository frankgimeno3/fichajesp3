'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface FiltrosPropuestasProps {
  clienteFiltro: string;
  setClienteFiltro: (value: string) => void;
  agenteFiltro: string;
  setAgenteFiltro: (value: string) => void;
  fechaInicio: string;
  setFechaInicio: (value: string) => void;
  fechaFin: string;
  setFechaFin: (value: string) => void;
  estadoFiltro: string;
  setEstadoFiltro: (value: string) => void;
  pestana: 'miasenproceso' | 'todasporcliente';
  agenteActual: string;
}

const FiltrosPropuestas: FC<FiltrosPropuestasProps> = ({
  clienteFiltro,
  setClienteFiltro,
  agenteFiltro,
  setAgenteFiltro,
  fechaInicio,
  setFechaInicio,
  fechaFin,
  setFechaFin,
  estadoFiltro,
  setEstadoFiltro,
  pestana,
  agenteActual,
}) => {
  const router = useRouter();

  // 🔒 Control de bloqueo dinámico
  const bloqueaAgente = pestana === 'miasenproceso';
  const bloqueaFechas = pestana === 'todasporcliente';
  const bloqueaEstado = pestana === 'miasenproceso';

  return (
    <div className="flex flex-col justify-between w-full">
      <p className="text-lg font-semibold mb-2">Buscador de propuestas</p>

      <div className="flex flex-wrap gap-4 items-end p-5">
        {/* Cliente */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Nombre cliente</label>
          <input
            type="text"
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder="Nombre de empresa"
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Código CRM */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Código CRM</label>
          <input
            type="text"
            value={clienteFiltro}
            onChange={(e) => setClienteFiltro(e.target.value)}
            placeholder="Cuenta de cliente"
            className="border px-2 py-1 rounded"
          />
        </div>

        {/* Agente */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Agente (número)</label>
          <input
            type="text"
            value={bloqueaAgente ? agenteActual : agenteFiltro}
            onChange={(e) => !bloqueaAgente && setAgenteFiltro(e.target.value)}
            placeholder="Ej: ag_25_0004"
            disabled={bloqueaAgente}
            className={`border px-2 py-1 rounded ${
              bloqueaAgente ? 'bg-gray-400 cursor-not-allowed' : ''
            }`}
          />
        </div>

        {/* Desde */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Desde</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => !bloqueaFechas && setFechaInicio(e.target.value)}
            disabled={bloqueaFechas}
            className={`border px-2 py-1 rounded ${
              bloqueaFechas ? 'bg-gray-400 cursor-not-allowed' : ''
            }`}
          />
        </div>

        {/* Hasta */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Hasta</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => !bloqueaFechas && setFechaFin(e.target.value)}
            disabled={bloqueaFechas}
            className={`border px-2 py-1 rounded ${
              bloqueaFechas ? 'bg-gray-400 cursor-not-allowed' : ''
            }`}
          />
        </div>

        {/* Estado */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Estado</label>
          <select
            value={bloqueaEstado ? 'Pendiente' : estadoFiltro}
            onChange={(e) => !bloqueaEstado && setEstadoFiltro(e.target.value)}
            disabled={bloqueaEstado}
            className={`border px-2 py-1 rounded ${
              bloqueaEstado ? 'bg-gray-400 cursor-not-allowed' : ''
            }`}
          >
            {!bloqueaEstado && <option value="">Todos</option>}
            <option value="Pendiente">Pendiente</option>
            {!bloqueaEstado && (
              <>
                <option value="Aceptada">Aceptada</option>
                <option value="Rechazada">Rechazada</option>
              </>
            )}
          </select>
        </div>

        <button
          className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
          onClick={() => router.refresh()}
        >
          <p>Buscar</p>
        </button>
      </div>
    </div>
  );
};

export default FiltrosPropuestas;
