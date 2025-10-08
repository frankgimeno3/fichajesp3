import React, { FC } from "react";
import { DatosGenerales } from "../contratosTypes"; // 👈 usa el tipo correcto

interface Props {
  datosGenerales: DatosGenerales;
}

const TablaDatosGenerales: FC<Props> = ({ datosGenerales }) => {
  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Fecha de firma</th>
          <th className="px-4 py-2">Fecha fin contrato</th>
          <th className="px-4 py-2">Código campaña administrativa</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{datosGenerales.fecha_firma_contrato}</td>
          <td className="px-4 py-2">{datosGenerales.fecha_fin_contrato}</td>
          <td className="px-4 py-2">{datosGenerales.codigo_campana_administrativa}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaDatosGenerales;
