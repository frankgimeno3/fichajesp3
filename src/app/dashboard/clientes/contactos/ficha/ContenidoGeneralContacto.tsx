import React, { FC, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import DatosEmpresaContacto from './componentesFichaContacto/DatosEmpresaContacto';
import DatosGralesContacto from './componentesFichaContacto/DatosGralesContacto';
import OtrosDatosContacto from './componentesFichaContacto/OtrosDatosContacto';

export interface Contacto {
  id: number;
  codigoContacto: string;
  nombreContacto: string;
  apellidosContacto: string;
  nombreCompleto: string;
  empresaAsociada: string;
  telefono: string;
  email: string;
}

interface ContenidoGeneralContactoProps {
  contacto: Contacto;
  setIsContenidoEdited: (val: boolean) => void;
}

const ContenidoGeneralContacto: FC<ContenidoGeneralContactoProps> = ({
  contacto,
  setIsContenidoEdited,
}) => {
  const router = useRouter();

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
