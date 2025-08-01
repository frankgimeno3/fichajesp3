import React, { FC } from 'react';

interface EmpresaAnunciante {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
}

interface TablaDatosAnuncianteProps {
  empresaAnunciante: EmpresaAnunciante;
}

const TablaDatosAnunciante: FC<TablaDatosAnuncianteProps> = ({ empresaAnunciante }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Nombre empresa</th>
            <th className="px-4 py-2">Código CRM</th>
            <th className="px-4 py-2">Código Edisoft</th>
            <th className="px-4 py-2">País</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">{empresaAnunciante.nombreEmpresa}</td>
            <td className="px-4 py-2">{empresaAnunciante.codigoCrm}</td>
            <td className="px-4 py-2">{empresaAnunciante.codigoEdisoft}</td>
            <td className="px-4 py-2">{empresaAnunciante.pais}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosAnunciante;
