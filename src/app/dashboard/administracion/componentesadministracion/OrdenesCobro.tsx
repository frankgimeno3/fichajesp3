import React, { FC } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';

interface ControladministrativoProps {}

const Controladministrativo: FC<ControladministrativoProps> = () => {
  const columnas = [
    'ORDEN',
    'CODIGO CRM',
    'CLIENTE',
    'AGENTE',
    'FECHA DE COBRO PREVISTA',
    'FECHA DE COBRO factura',
    'ESTADO',
    'COMISIONES PAGADAS',
    'CONTRATO ASOCIADO',
    'FACTURA',
    'FECHA FACTURA',
    'IMPORTE CON IVA',
    'FORMA DE COBRO',
    'Nº RECIBO',
    'Nº REMESA',
    'FECHA FIRMA CONTRATO',
    'IMPORTE TOTAL BI CONTRATO',
    'CAMPAÑA ASOCIADA',
  ];

  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Campañas administrativas    `} />
      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">     
         <h2 className="text-xl font-bold mb-4">Control Administrativo</h2>
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
            {/* Aquí puedes mapear los datos reales */}
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
    </div>
  );
};

export default Controladministrativo;
