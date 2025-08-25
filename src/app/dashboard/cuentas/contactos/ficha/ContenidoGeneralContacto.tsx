import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import DatosEmpresaContacto from './componentesFichaContacto/DatosEmpresaContacto';
import DatosGralesContacto from './componentesFichaContacto/DatosGralesContacto';
import OtrosDatosContacto from './componentesFichaContacto/OtrosDatosContacto';

interface ContenidoGeneralContactoProps {
  
}

const ContenidoGeneralContacto: FC<ContenidoGeneralContactoProps> = ({ }) => {
        const router = useRouter();
    
  return (
    <div>
      <DatosGralesContacto/>
       <DatosEmpresaContacto/>
       <OtrosDatosContacto/>
    </div>
  );
};

export default ContenidoGeneralContacto;