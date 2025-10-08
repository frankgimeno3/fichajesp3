import React, { FC } from 'react';
import DatosEmpresaContacto from './componentesFichaContacto/DatosEmpresaContacto';
import DatosGralesContacto from './componentesFichaContacto/DatosGralesContacto';
import OtrosDatosContacto from './componentesFichaContacto/OtrosDatosContacto';

// Tipos consistentes con tu JSON
export interface Contacto {
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
