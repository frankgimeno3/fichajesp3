'use client';

import React, { FC, useState } from 'react';
import ContenidoContactosEmpresa from './cards/ContenidoContactosEmpresa';
import DatosCRM from './general/DatosCrm';
import DatosComerciales from './general/DatosComerciales';
import Direcciones from './general/Direcciones';
import Descripcion from './general/Descripcion';
import cuentas from "@/app/contents/cuentasContents.json";

interface ContenidoGeneralProps {
  id_cuenta: string;
  setIsContenidoEdited: (val: boolean) => void;
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

const ContenidoGeneral: FC<ContenidoGeneralProps> = ({ id_cuenta, setIsContenidoEdited }) => {
  const cuentaSeleccionada: Cuenta | undefined = cuentas.find(
    (c: Cuenta) => c.id_cuenta === id_cuenta
  );

   const [cuentaEditable, setCuentaEditable] = useState<Cuenta | undefined>(cuentaSeleccionada);

  if (!cuentaEditable) {
    return <p className="text-red-500">Cuenta no encontrada</p>;
  }

   const handleCRMChange = (field: string, value: string | boolean | string[]) => {
    setCuentaEditable((prev) =>
      prev
        ? { ...prev, [`${fieldMap[field] ?? field}`]: value }
        : prev
    );
    setIsContenidoEdited(true);
  };

   const fieldMap: Record<string, string> = {
    nombre_empresa: "nombre_empresa",
    actividades: "actividades_cuenta",
    presente_en_qq: "presente_en_qq",
    fuente_novedades: "fuente_novedades_cuenta",
  };

  return (
    <div className="flex flex-col">
      <DatosCRM
        nombre_empresa={cuentaEditable.nombre_empresa}
        id_agente={cuentaEditable.id_agente}
        presente_en_qq={cuentaEditable.presente_en_qq}
        actividades={cuentaEditable.actividades_cuenta}
        fuente_novedades={cuentaEditable.fuente_novedades_cuenta}
        onChange={handleCRMChange}
      />

      <DatosComerciales
        nombre_empresa={cuentaEditable.nombre_empresa}
        datos_comerciales={cuentaEditable.datos_comerciales}
        onChange={() => setIsContenidoEdited(true)}
      />

      <Direcciones
        direcciones={cuentaEditable.array_direcciones_cuenta}
        onChange={() => setIsContenidoEdited(true)}
      />

     <Descripcion
  descripcion={cuentaEditable.descripcion_cuenta}
  onChange={(value) => {
    setCuentaEditable(prev => prev ? { ...prev, descripcion_cuenta: value } : prev);
    setIsContenidoEdited(true);
  }}
/>

      <div className="flex flex-col py-12 gap-5">
         <ContenidoContactosEmpresa
          contactos={cuentaEditable.array_contactos_cuenta}
          onChange={() => setIsContenidoEdited(true)}
        />
      </div>
    </div>
  );
};

export default ContenidoGeneral;
