"use client"
import React, { FC, useState } from 'react';
import FiltrosPropuestas from '../componentesPropuestas/FiltrosPropuestas';
import TablaPropuestas from '../componentesPropuestas/TablaPropuestas';

interface BuscarPropuestasProps {
  
}

const BuscarPropuestas: FC<BuscarPropuestasProps> = ({ }) => {    
      const [clienteFiltro, setClienteFiltro] = useState('');
      const [agenteFiltro, setAgenteFiltro] = useState('');
      const [fechaInicio, setFechaInicio] = useState('');
      const [fechaFin, setFechaFin] = useState('');
    
  return (
<div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
       <h2 className="text-xl font-semibold mb-4">Resultados de la búsqueda</h2>

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
        
 <h2 className="text-lg font-semibold mb-4">Propuestas creadas</h2>
        <TablaPropuestas
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />
      </div>
    </div>  );
};

export default BuscarPropuestas;