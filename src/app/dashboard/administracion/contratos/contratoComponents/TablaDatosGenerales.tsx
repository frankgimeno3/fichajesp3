import React, { FC } from "react";

interface DatosGenerales {
  fechaFirma: string;
  fechaFinEstimada: string;
  agente: string;
  codigoContrato: string;
  codigoCampaniaAdministrativa: string;
}

interface Props {
  datosGenerales: DatosGenerales;
}

const TablaDatosGenerales: FC<Props> = ({ datosGenerales }) => {
  return (
    <table className="table-auto border-collapse text-center">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Fecha de firma</th>
          <th className="px-4 py-2">Fecha estimada finalización</th>
          <th className="px-4 py-2">Agente</th>
          <th className="px-4 py-2">Código contrato</th>
          <th className="px-4 py-2">Código campaña administrativa</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{datosGenerales.fechaFirma}</td>
          <td className="px-4 py-2">{datosGenerales.fechaFinEstimada}</td>
          <td className="px-4 py-2">{datosGenerales.agente}</td>
          <td className="px-4 py-2">{datosGenerales.codigoContrato}</td>
          <td className="px-4 py-2">{datosGenerales.codigoCampaniaAdministrativa}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaDatosGenerales;
