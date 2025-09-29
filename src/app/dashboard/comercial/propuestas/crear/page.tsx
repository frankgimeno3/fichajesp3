"use client"

import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
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
  const [codigoCliente, setCodigoCliente] = useState("")
  const [contactoAnunciante, setContactoAnunciante] = useState("")
  const [contactoFirmante, setContactoFirmante] = useState(contactoAnunciante)
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Crear propuesta `} />

        <div className="bg-white min-h-screen p-12 text-gray-600">
          {faseCreacionPropuesta == 1 && <Fase1Crear setFaseCreacionPropuesta={setFaseCreacionPropuesta} setCodigoCliente={setCodigoCliente} codigoCliente={codigoCliente}/>}
          {faseCreacionPropuesta == 2 && <Fase2Crear setFaseCreacionPropuesta={setFaseCreacionPropuesta}  setCodigoContactoFirmante={setContactoFirmante} setCodigoContactoAnunciante={setContactoAnunciante}/>}
          {faseCreacionPropuesta == 3 && <Fase3Crear setFaseCreacionPropuesta={setFaseCreacionPropuesta} />}
          {faseCreacionPropuesta == 4 && <Fase4Crear setFaseCreacionPropuesta={setFaseCreacionPropuesta} />}
          {faseCreacionPropuesta == 5 && <Fase5Crear setFaseCreacionPropuesta={setFaseCreacionPropuesta} />}
      </div>
        
      </div>
    );
};

export default CrearPropuestas;