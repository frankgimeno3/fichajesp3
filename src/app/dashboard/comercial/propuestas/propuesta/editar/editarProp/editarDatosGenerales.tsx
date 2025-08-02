import React, { FC, useState } from 'react';

interface TablaDatosGeneralesProps {
  codigoPropuesta: string;
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({ codigoPropuesta }) => {
  const [formData, setFormData] = useState({
    fechaEnvio: '12/12/2025',
    fechaValidez: '12/03/2026',
    agente: 'Frank Gimeno',
    codigoPropuesta,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Fecha de envío al cliente</th>
          <th className="px-4 py-2">Fecha máxima de validez</th>
          <th className="px-4 py-2">Código de propuesta</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">
            <input
              type="text"
              name="fechaEnvio"
              value={formData.fechaEnvio}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="fechaValidez"
              value={formData.fechaValidez}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          
          <td className="px-4 py-2">
            <input
              type="text"
              name="codigoPropuesta"
              value={formData.codigoPropuesta}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TablaDatosGenerales;
