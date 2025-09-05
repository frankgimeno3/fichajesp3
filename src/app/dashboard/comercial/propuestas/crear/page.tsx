"use client"

import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC, useState } from 'react';
import Fase1Crear from './fases/fase1Crear';
import Fase2Crear from './fases/fase2Crear';
import Fase3Crear from './fases/fase3Crear';
import Fase4Crear from './fases/fase4Crear';
import Fase5Crear from './fases/fase5Crear';

interface CrearPropuestasProps {
  
}

const CrearPropuestas: FC<CrearPropuestasProps> = ({ }) => {

  const [faseCreacionPropuesta, setFaseCreacionPropuesta] = useState(1)
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Crear propuesta `} />

        <div className="bg-white min-h-screen p-12 text-gray-600">
          {faseCreacionPropuesta == 1 && <Fase1Crear />}
          {faseCreacionPropuesta == 2 && <Fase2Crear />}
          {faseCreacionPropuesta == 3 && <Fase3Crear />}
          {faseCreacionPropuesta == 4 && <Fase4Crear />}
          {faseCreacionPropuesta == 5 && <Fase5Crear />}
      </div>
        
      </div>
    );
};

export default CrearPropuestas;