import React, { FC } from 'react';
import MiddleNav from '../../0dashboardcomponents/MiddleNav';

interface OrdenesCobroProps { }

const OrdenesCobro: FC<OrdenesCobroProps> = () => {
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

    <table className="min-w-full table-auto border border-gray-300  font-light overflow-scroll"   style={{ fontSize: '9px' }}
>
      <thead>
        <tr className="bg-gray-100">
          {columnas.map((col, idx) => (
            <th key={idx} className="border px-2 py-2 text-left ">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
         <tr>
          {columnas.map((_, idx) => (
            <td key={idx} className="border px-2 py-2   text-gray-700">
              -
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default OrdenesCobro;
