import React, { FC, useState } from 'react';
import Fase1 from './fases/fase1';
import Fase2 from './fases/fase2';
import Fase3 from './fases/fase3';

interface CrearContactoProps {
  
}

const CrearContacto: FC<CrearContactoProps> = ({ }) => {
  const [faseCrearContacto, setFaseCrearContacto] = useState(0)
  return (
    <div>
      {faseCrearContacto == 0 && <Fase1/>}
      {faseCrearContacto == 1 && <Fase2/>}
      {faseCrearContacto == 2 && <Fase3/>}
    </div>
  );
};

export default CrearContacto;