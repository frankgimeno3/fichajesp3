import React, { FC } from 'react';
import DatosEmpresaContacto from './DatosEmpresaContacto';
import DatosGralesContacto from './DatosGralesContacto';
import OtrosDatosContacto from './OtrosDatosContacto';

 export interface Contacto {
  nombre_empresa: string;
  id_contacto: string;
  nombre_contacto: string;
  apellidos_contacto: string;
  nombre_completo_contacto: string;
  id_cuenta: string;
  telefono_contacto: string;
  email_contacto: string;
  cargo_contacto?: string;
}

interface ContenidoGeneralContactoProps {
  contacto: Contacto;
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
