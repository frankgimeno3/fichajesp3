import React, { FC } from 'react';
 
const DatosCobroPropuesta: FC = () => {
  return (
    <div className="space-y-6">
      {/* Tabla horizontal con encabezados */}
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
            <td className="px-4 py-2">3 cobros</td>
            <td className="px-4 py-2">1500€</td>
            <td className="px-4 py-2">21%</td>
            <td className="px-4 py-2">1815€</td>
            <td className="px-4 py-2">Transferencia</td>
            <td className="px-4 py-2">ES76 1234 5678 9012 3456 7890</td>
            <td className="px-4 py-2">3</td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
};

export default DatosCobroPropuesta;
