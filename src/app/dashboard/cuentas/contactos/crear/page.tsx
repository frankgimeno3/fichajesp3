"use client"
import React, { FC, useState } from 'react';
import Fase0 from './fases/fase0';
import Fase1 from './fases/fase1';
import Fase2 from './fases/fase2';
import Fase3 from './fases/fase3';

interface CrearContactoProps {
      setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;

}

const CrearContacto: FC<CrearContactoProps> = ({ }) => {
  const [faseCrearContacto, setFaseCrearContacto] = useState(0)
  return (
    <div>
      {faseCrearContacto == 0 && <Fase0 setFaseCrearContacto={setFaseCrearContacto}/>}
      {faseCrearContacto == 1 && <Fase1 setFaseCrearContacto={setFaseCrearContacto}/>}
      {faseCrearContacto == 2 && <Fase2 setFaseCrearContacto={setFaseCrearContacto}/>}
      {faseCrearContacto == 3 && <Fase3 />}
    </div>
  );
};

export default CrearContacto;