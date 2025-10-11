import React, { FC } from 'react';
import DatosEmpresaContacto from './DatosEmpresaContacto';
import DatosGralesContacto from './DatosGralesContacto';
import OtrosDatosContacto from './OtrosDatosContacto';
import { InterfazContacto } from '@/app/interfaces/interfaces';
 

interface ContenidoGeneralContactoProps {
  contacto: InterfazContacto;
  setIsContenidoEdited: (val: boolean) => void;
}

const ContenidoGeneralContacto: FC<ContenidoGeneralContactoProps> = ({
  contacto,
  setIsContenidoEdited,
}) => {
  const handleAnyChange = () => {
    setIsContenidoEdited(true);
  };

  return (
    <div>
      <DatosGralesContacto contacto={contacto} onChange={handleAnyChange} />
      <DatosEmpresaContacto contacto={contacto} onChange={handleAnyChange} />
      <OtrosDatosContacto contacto={contacto} onChange={handleAnyChange} />
    </div>
  );
};

export default ContenidoGeneralContacto;
