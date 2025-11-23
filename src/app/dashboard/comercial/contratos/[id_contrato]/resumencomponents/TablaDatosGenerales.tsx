import React, { FC } from "react";

interface DatosGenerales {
  fecha_firma_contrato: string;
  fecha_fin_contrato: string;
  codigo_campana_administrativa: string;
  id_agente_contrato?: string; 
  account_manager_actual?: string; 
  id_contrato?: string;  
}

interface TablaDatosGeneralesProps {
  datosGenerales: DatosGenerales;
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({ datosGenerales }) => {
  const {
    fecha_firma_contrato,
    fecha_fin_contrato,
    codigo_campana_administrativa,
    id_agente_contrato,
    account_manager_actual,
    id_contrato,
  } = datosGenerales;

  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Fecha de firma</th>
          <th className="px-4 py-2">Fecha estimada finalización</th>
          <th className="px-4 py-2">Agente ofertante</th>
          <th className="px-4 py-2">Account manager actual</th>
          <th className="px-4 py-2">Código contrato</th>
          <th className="px-4 py-2">Código campaña administrativa</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{fecha_firma_contrato}</td>
          <td className="px-4 py-2">{fecha_fin_contrato}</td>
          <td className="px-4 py-2">{id_agente_contrato || "—"}</td>
          <td className="px-4 py-2">{account_manager_actual || "—"}</td>
          <td className="px-4 py-2">{id_contrato || "—"}</td>
          <td className="px-4 py-2">{codigo_campana_administrativa}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaDatosGenerales;
