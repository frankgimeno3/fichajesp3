import React, { FC } from "react";
import { useRouter } from "next/navigation";
import DatosEmpresaContacto from "./componentesFichaContacto/DatosEmpresaContacto";
import DatosGralesContacto from "./componentesFichaContacto/DatosGralesContacto";
import OtrosDatosContacto from "./componentesFichaContacto/OtrosDatosContacto";

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
}

const ContenidoGeneralContacto: FC<ContenidoGeneralContactoProps> = ({
  contacto,
}) => {
  const router = useRouter();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Datos generales</h3>
      <p className="mb-2">
        <strong>Nombre completo:</strong> {contacto.nombreCompleto}
      </p>
      <p className="mb-2">
        <strong>Empresa asociada:</strong> {contacto.empresaAsociada}
      </p>
      <p className="mb-2">
        <strong>Teléfono:</strong> {contacto.telefono}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {contacto.email}
      </p>

       <DatosGralesContacto />
      <DatosEmpresaContacto />
      <OtrosDatosContacto />
    </div>
  );
};

export default ContenidoGeneralContacto;
