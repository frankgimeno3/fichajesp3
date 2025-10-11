'use client';

import React, { FC, useState, useEffect } from 'react';
import ContenidoContactosEmpresa from './cards/ContenidoContactosEmpresa';
import DatosCRM from './general/DatosCrm';
import DatosComerciales from './general/DatosComerciales';
import Direcciones from './general/Direcciones';
import Descripcion from './general/Descripcion';
import cuentas from "@/app/contents/cuentasContents.json";
import { InterfazCuenta } from '@/app/interfaces/interfaces';

interface ContenidoGeneralProps {
  id_cuenta: string;
  setIsContenidoEdited: (val: boolean) => void;
}

const ContenidoGeneral: FC<ContenidoGeneralProps> = ({ id_cuenta, setIsContenidoEdited }) => {
   const [cuentaEditable, setCuentaEditable] = useState<InterfazCuenta | undefined>(
    () => cuentas.find((c) => c.id_cuenta === id_cuenta)
  );

  useEffect(() => {
    const cuenta = cuentas.find((c) => c.id_cuenta === id_cuenta);
    setCuentaEditable(cuenta);
  }, [id_cuenta]);

  if (!cuentaEditable) {
    return <p className="text-red-500">Cuenta no encontrada</p>;
  }

  const fieldMap: Record<string, string> = {
    nombre_empresa: "nombre_empresa",
    actividades: "actividades_cuenta",
    presente_en_qq: "presente_en_qq",
    fuente_novedades: "fuente_novedades_cuenta",
  };

  const handleCRMChange = (field: string, value: string | boolean | string[]) => {
    setCuentaEditable((prev) =>
      prev ? { ...prev, [`${fieldMap[field] ?? field}`]: value } : prev
    );
    setIsContenidoEdited(true);
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
        datos_comerciales={cuentaEditable.datos_comerciales}
        pais_cuenta={cuentaEditable.pais_cuenta}
        onChange={() => setIsContenidoEdited(true)}
      />

      <Direcciones
        direcciones={cuentaEditable.array_direcciones_cuenta}
        onChange={() => setIsContenidoEdited(true)}
      />

      <Descripcion
        descripcion={cuentaEditable.descripcion_cuenta}
        onChange={(value) => {
          setCuentaEditable(prev =>
            prev ? { ...prev, descripcion_cuenta: value } : prev
          );
          setIsContenidoEdited(true);
        }}
      />

      <div className="flex flex-col py-12 gap-5">
         <ContenidoContactosEmpresa
             id_cuenta={id_cuenta}
        />
      </div>
    </div>
  );
};

export default ContenidoGeneral;
