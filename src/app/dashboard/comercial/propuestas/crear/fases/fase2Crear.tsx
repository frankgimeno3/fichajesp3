import React, { FC } from 'react';

interface Fase2CrearProps {
    setFaseCreacionPropuesta: (fase: number) => void;
}

const Fase2Crear: FC<Fase2CrearProps> = ({ setFaseCreacionPropuesta}) => {
  return (
    <div>Fase2Crear</div>
  );
};

export default Fase2Crear;