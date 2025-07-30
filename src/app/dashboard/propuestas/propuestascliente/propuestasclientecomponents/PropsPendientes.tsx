import React, { FC, useState } from 'react';
import TablaPropuestasPendientes from './TablaPropuestasPendientes';

interface PropsPendientesContentProps {
  
}

const PropsPendientesContent: FC<PropsPendientesContentProps> = ({ }) => {
      const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  return (
<TablaPropuestasPendientes
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />  );
};

export default PropsPendientesContent;