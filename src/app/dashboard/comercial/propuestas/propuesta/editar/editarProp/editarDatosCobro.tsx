import React, { FC, useState } from 'react';

const DatosCobroPropuesta: FC = () => {
  const [formData, setFormData] = useState({
    terminosCobro: '3 cobros',
    baseImponible: '1500€',
    impuesto: '21%',
    precioTotal: '1815€',
    formaCobro: 'Transferencia',
    cuentaCobro: 'ES76 1234 5678 9012 3456 7890',
    numeroCobros: '3',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Términos de Cobro</th>
            <th className="px-4 py-2">Base imponible</th>
            <th className="px-4 py-2">Impuesto</th>
            <th className="px-4 py-2">Precio total</th>
            <th className="px-4 py-2">Forma de Cobro</th>
            <th className="px-4 py-2">Cuenta de Cobro</th>
            <th className="px-4 py-2">Número de Cobros</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <input
                type="text"
                name="terminosCobro"
                value={formData.terminosCobro}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="baseImponible"
                value={formData.baseImponible}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="impuesto"
                value={formData.impuesto}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="precioTotal"
                value={formData.precioTotal}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="formaCobro"
                value={formData.formaCobro}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="cuentaCobro"
                value={formData.cuentaCobro}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="numeroCobros"
                value={formData.numeroCobros}
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

export default DatosCobroPropuesta;
