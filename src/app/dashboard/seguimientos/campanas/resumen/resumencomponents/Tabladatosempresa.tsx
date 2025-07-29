import React, { FC } from 'react';

interface TablaDatosEmpresaProps {
  empresaAnunciante: {
    nombreEmpresa: string;
    codigoCrm: string;
    codigoVtiger: string;
    pais: string;
  };
  empresaFirmante: {
    nombreFirmante: string;
    cargoFirmante: string;
    emailFirmante: string;
    pais: string;
  };
}

const TablaDatosEmpresa: FC<TablaDatosEmpresaProps> = ({
  empresaAnunciante,
  empresaFirmante,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Nombre empresa</th>
            <th className="px-4 py-2">Código CRM</th>
            <th className="px-4 py-2">Código Vtiger</th>
            <th className="px-4 py-2">País (Empresa)</th>
            <th className="px-4 py-2">Nombre firmante</th>
            <th className="px-4 py-2">Cargo firmante</th>
            <th className="px-4 py-2">Email firmante</th>
            <th className="px-4 py-2">País (Firmante)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">{empresaAnunciante.nombreEmpresa}</td>
            <td className="px-4 py-2">{empresaAnunciante.codigoCrm}</td>
            <td className="px-4 py-2">{empresaAnunciante.codigoVtiger}</td>
            <td className="px-4 py-2">{empresaAnunciante.pais}</td>
            <td className="px-4 py-2">{empresaFirmante.nombreFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.cargoFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.emailFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.pais}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosEmpresa;
