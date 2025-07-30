import React, { FC, useState } from 'react';
import TablaPropuestasAprobadas from './TablaPropuestasAprobadas';

interface PropsAprobadasContentProps {
  
}

const PropsAprobadasContent: FC<PropsAprobadasContentProps> = ({ }) => {
      const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  return (
<TablaPropuestasAprobadas
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />  );
};

export default PropsAprobadasContent;