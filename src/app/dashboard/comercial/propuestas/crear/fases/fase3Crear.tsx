import React, { FC } from 'react';

interface Fase3CrearProps {
      setFaseCreacionPropuesta: (fase: number) => void;
}

const Fase3Crear: FC<Fase3CrearProps> = ({ setFaseCreacionPropuesta}) => {
  return (
    <div>Fase3Crear</div>
  );
};

export default Fase3Crear;