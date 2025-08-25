import React, { FC } from 'react';

interface DatosEmpresaContactoProps {}

const DatosEmpresaContacto: FC<DatosEmpresaContactoProps> = ({ }) => {
  const mockData = [
    {
      empresa: "Vidrios S.A.",
      codigoEmpresa: "E123",
      cargo: "Director Comercial"
    }    
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos asociados a la cuenta</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Empresa asociada</th>
            <th className="text-left p-2 font-light">Código empresa</th>
            <th className="text-left p-2 font-light">Cargo en la empresa</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b border-gray-200">{item.empresa}</td>
              <td className="p-2 border-b border-gray-200">{item.codigoEmpresa}</td>
              <td className="p-2 border-b border-gray-200">{item.cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatosEmpresaContacto;
