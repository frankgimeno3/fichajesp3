import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC } from 'react';
import data from './informeventas.json';

const informeventas: FC = () => {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal={`Informe Ventas agente ${data.agente} mes ${data.mes}`} />

      <div className="bg-white p-6 text-sm text-gray-700 space-y-6 w-full">
        <h2 className="text-xl font-bold">Informe de ventas mes de {data.mes}</h2>

        <p><strong>Agente:</strong> {data.agente}</p>
        <p><strong>Ventas totales {data.mes}:</strong> {data.ventasTotales}</p>

        <h3 className="font-semibold">Superación del importe mínimo de mantenimiento (IMM)</h3>
        <p>{data.superaIMM.comentario}</p>

        <h3 className="font-semibold">Detalle de contratos y asociación de campañas</h3>
        <ul className="list-disc pl-6">
          {data.casuistica.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h4 className="font-semibold">Resumen de contratos:</h4>
        <table className="min-w-max border text-xs text-left border-collapse overflow-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2 border">Código</th>
              <th className="p-2 border">Empresa Cliente</th>
              <th className="p-2 border">Campaña</th>
              <th className="p-2 border">Importe Acumulado</th>
              <th className="p-2 border">Año anterior</th>
              <th className="p-2 border">Importe anterior</th>
              <th className="p-2 border">% Comisión</th>
            </tr>
          </thead>
          <tbody>
            {data.resumenContratos.map((row, i) => (
              <tr key={i} className="border-b">
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="font-semibold">Cálculo de comisiones</h3>
        <table className="min-w-max border text-xs text-left border-collapse overflow-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-2 border">Contrato/Cobro</th>
              <th className="p-2 border">Base Imponible</th>
              <th className="p-2 border">Peso</th>
              <th className="p-2 border">Empresa</th>
              <th className="p-2 border">Importe Neto</th>
              <th className="p-2 border">Comisión %</th>
              <th className="p-2 border">Comisión €</th>
            </tr>
          </thead>
          <tbody>
            {data.detalleComisiones.map((row, i) => (
              <tr key={i} className="border-b">
                {row.map((cell, j) => (
                  <td key={j} className="p-2 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className="font-semibold bg-gray-100">
            <tr>
              <td className="p-2 border">TOTAL</td>
              <td className="p-2 border">{data.totales.importeTotal}</td>
              <td className="p-2 border">100,00%</td>
              <td className="p-2 border" colSpan={2}>{data.totales.importeNeto}</td>
              <td className="p-2 border" colSpan={2}>{data.totales.comisionTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default informeventas;
