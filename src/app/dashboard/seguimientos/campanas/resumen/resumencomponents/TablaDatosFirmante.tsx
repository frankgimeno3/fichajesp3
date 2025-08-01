import React, { FC } from 'react';

interface EmpresaFirmante {
  nombreFirmante: string;
  cargoFirmante: string;
  nombreEmpresaFirmante: string;
  emailFirmante: string;
  pais: string;
}

interface TablaDatosFirmanteProps {
  empresaFirmante: EmpresaFirmante;
}

const TablaDatosFirmante: FC<TablaDatosFirmanteProps> = ({ empresaFirmante }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Nombre firmante</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">Empresa</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">País</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">{empresaFirmante.nombreFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.cargoFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.nombreEmpresaFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.emailFirmante}</td>
            <td className="px-4 py-2">{empresaFirmante.pais}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosFirmante;
