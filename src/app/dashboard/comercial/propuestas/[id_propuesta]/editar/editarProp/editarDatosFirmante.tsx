import React, { FC, useState } from 'react';
 
interface EmpresaFirmante {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
  nombreContacto: string;
  cargoContacto: string;
}

interface TablaDatosFirmanteProps {
  empresaFirmante: EmpresaFirmante;
}

const TablaDatosFirmante: FC<TablaDatosFirmanteProps> = ({ empresaFirmante }) => {
 
  const [formData, setFormData] = useState<EmpresaFirmante>(empresaFirmante);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-x-auto">
    <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Código CRM empresa firmante</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700"> 
            <td className="px-4 py-2">
              <input
                type="text"
                name="codigoCrm"
                value={formData.codigoCrm}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosFirmante;
