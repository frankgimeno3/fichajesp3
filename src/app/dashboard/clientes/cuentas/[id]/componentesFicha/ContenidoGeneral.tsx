"use client";

import React, { FC } from 'react';
import ContenidoContactosEmpresa from './cards/ContenidoContactosEmpresa';
import DatosCRM from './general/DatosCrm';
import DatosComerciales from './general/DatosComerciales';
import Direcciones from './general/Direcciones';
import Descripcion from './general/Descripcion';
import cuentas from "@/app/contents/cuentasContents.json";

interface ContenidoGeneralProps {
  params: { id_cuenta: string }; // id_cuenta proveniente de la URL
}

interface Cuenta {
  id_cuenta: string;
  nombre_empresa: string;
  pais_cuenta: string;
  descripcion_cuenta: string;
  datos_comerciales: any;
  array_direcciones_cuenta: any[];
  array_contactos_cuenta: any[];
  actividades_cuenta: string[];
  id_agente: string;
  presente_en_qq: boolean;
  fuente_novedades_cuenta: string;
}

const ContenidoGeneral: FC<ContenidoGeneralProps> = ({ params }) => {
  // Buscar la cuenta correspondiente al id_cuenta
  const cuentaSeleccionada: Cuenta | undefined = cuentas.find(
    (c: Cuenta) => c.id_cuenta === params.id_cuenta
  );

  if (!cuentaSeleccionada) {
    return <p className="text-red-500">Cuenta no encontrada</p>;
  }

  return (
    <div className="flex flex-col">
      {/* Pasar solo lo necesario a cada componente */}
      <DatosCRM 
        nombre_empresa={cuentaSeleccionada.nombre_empresa}
        id_agente={cuentaSeleccionada.id_agente}
        presente_en_qq={cuentaSeleccionada.presente_en_qq}
        actividades={cuentaSeleccionada.actividades_cuenta}
        fuente_novedades={cuentaSeleccionada.fuente_novedades_cuenta}
      />
      <DatosComerciales datos={cuentaSeleccionada.datos_comerciales} />
      <Direcciones direcciones={cuentaSeleccionada.array_direcciones_cuenta} />
      <Descripcion descripcion={cuentaSeleccionada.descripcion_cuenta} />
      
      <div className="flex flex-col py-12 gap-5">
        <p>Contactos de la empresa</p> 
        <ContenidoContactosEmpresa contactos={cuentaSeleccionada.array_contactos_cuenta} />
      </div>
    </div>
  );
};

export default ContenidoGeneral;
