import React, { FC } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';

interface CampanasAdministrativasProps {}

const CampanasAdministrativas: FC<CampanasAdministrativasProps> = () => {
  const columnas = [
    'CÓDIGO CAMPAÑA',
    'ULTIMA ACTUALIZACIÓN',
    'IMPORTE ACUMULADO BI',
    'VALOR BI CAMPAÑA ANTERIOR',
    'AÑO CAMPAÑA ANTERIOR',
    'NOMBRE CLIENTE',
    'CODIGO CRM',
    'AÑO INICIO CAMPAÑA ACTUAL',
    'TERMINA AÑO 2026?',
    'CONTRATOS ASOCIADOS',
  ];

  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Campañas administrativas    `} />
      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">
      <h2 className="text-xl font-bold mb-4">Campañas Administrativas</h2>
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
            {/* Aquí puedes mapear tus datos si los tienes */}
            <tr>
              {columnas.map((_, idx) => (
                <td key={idx} className="border px-4 py-2 text-sm text-gray-700">
                  {/* Valor de muestra */}
                  -
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default CampanasAdministrativas;
