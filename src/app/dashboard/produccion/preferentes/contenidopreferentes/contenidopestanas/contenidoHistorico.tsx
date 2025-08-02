import React, { FC } from 'react';
import PreferentesAnoContent from '../preferentesAnoContent';
import HistoricoContent from '../HistoricoContent';

interface ContenidoHistoricoProps {
  
}

const ContenidoHistorico: FC<ContenidoHistoricoProps> = ({ }) => {
  return (
   <div>
      <HistoricoContent/>
    </div>  );
};

export default ContenidoHistorico;