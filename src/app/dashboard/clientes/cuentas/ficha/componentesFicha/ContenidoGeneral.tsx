import React, { FC } from 'react';
import ContenidoContactosEmpresa from './cards/ContenidoContactosEmpresa';
import DatosCRM from './general/DatosCrm';
import DatosComerciales from './general/DatosComerciales';
import Direcciones from './general/Direcciones';
import Descripcion from './general/Descripcion';
 
interface ContenidoGeneralProps {
  
}

const ContenidoGeneral: FC<ContenidoGeneralProps> = ({ }) => {
  return (
    <div className='flex flex-col'>
      <DatosCRM/>
      <DatosComerciales/>
      <Direcciones/>
      <Descripcion  />
        <div className='flex flex-col py-12 gap-5'>
        <p>Contactos de la empresa</p> 
        <ContenidoContactosEmpresa/>
      </div>

    </div>
  );
};

export default ContenidoGeneral;