import React, { FC } from 'react';

interface ContenidoRemesasPasadasProps {}

const ContenidoRemesasPasadas: FC<ContenidoRemesasPasadasProps> = () => {
  const columnas = [
    'VENCIMIENTO',
    'COD.CLIENTE',
    'CLIENTE',
    'Nº FRA',
    'Nº REC',
    'FECHA FRA.',
    'IMPORTE',
    'Nº REMESA',
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Remesas Pasadas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columnas.map((col, idx) => (
                <th key={idx} className="border px-4 py-2 text-left text-sm font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Puedes sustituir estos valores por datos reales más adelante */}
            <tr>
              {columnas.map((_, idx) => (
                <td key={idx} className="border px-4 py-2 text-sm text-gray-700">
                  -
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContenidoRemesasPasadas;
