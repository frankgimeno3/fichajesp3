import React, { FC, useState } from 'react';
import TablaPropuestasRechazadas from './TablaPropuestasRechazadas';

interface PropsRechazadasContentProps {
  
}

const PropsRechazadasContent: FC<PropsRechazadasContentProps> = ({ }) => {
      const [clienteFiltro, setClienteFiltro] = useState('');
  const [agenteFiltro, setAgenteFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  return (
<TablaPropuestasRechazadas
          clienteFiltro={clienteFiltro}
          agenteFiltro={agenteFiltro}
          fechaInicio={fechaInicio}
          fechaFin={fechaFin}
        />  );
};

export default PropsRechazadasContent;