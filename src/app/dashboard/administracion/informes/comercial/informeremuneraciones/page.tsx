import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC } from 'react';
import data from './informeremuneraciones.json';

const informeremuneraciones: FC = () => {
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal={`Informe Remuneraciones agente ${data.agente} mes ${data.mes}`} />

      <div className="bg-white min-h-screen p-6 text-gray-800 w-full space-y-4">
        <h2 className="text-xl font-semibold">Informe de remuneraciones mes de {data.mes}</h2>
        <p><strong>Agente:</strong> {data.agente}</p>
        <p><strong>Comisiones a cobrar:</strong> {data.comisionesTotales.toFixed(2)}€</p>
        <p>
          Tal y como detalla el anexo a su contrato referente a la remuneración de comisiones, PROPORCIÓN 3, S.A. declara que debe añadir al total bruto a percibir del {data.agente} un importe de {data.comisionesTotales.toFixed(2)}€ en concepto de comisiones, por los pagos recibidos durante el mes de {data.mes} de 2025 en relación a ventas realizadas por el agente.
        </p>
        <p>
          A continuación se detallan los importes recibidos durante este mes, a fecha {data.fechaCorte}, su importe y su comisión final generada, así como la referencia de cada uno de ellos a su mes de generación para poder identificar en su correspondiente Informe de ventas el porqué de dicho % aplicado sobre el importe cobrado.
        </p>

        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1 text-left">Cliente</th>
              <th className="border px-2 py-1 text-left">Mes de generación</th>
              <th className="border px-2 py-1 text-left">Cobrado en Junio</th>
              <th className="border px-2 py-1 text-left">Comisionable neto</th>
              <th className="border px-2 py-1 text-left">Comisión</th>
            </tr>
          </thead>
          <tbody>
            {data.detalleComisiones.map((item, index) => (
              <tr key={index}>
                <td className="border px-2 py-1">{item.cliente}</td>
                <td className="border px-2 py-1">{item.mesGeneracion}</td>
                <td className="border px-2 py-1">{item.cobradoJunio.toFixed(2)} €</td>
                <td className="border px-2 py-1">{item.comisionableNeto.toFixed(2)} €</td>
                <td className="border px-2 py-1">
                  {item.comision.valor.toFixed(2)} € 
                  {item.comision.nota 
                    ? ` (${item.comision.nota})` 
                    : ` (${item.comision.porcentaje.toFixed(2)}%)`}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-semibold">
              <td className="border px-2 py-1" colSpan={4}>Totales</td>
              <td className="border px-2 py-1">{data.comisionesTotales.toFixed(2)}€</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 font-semibold">Comisiones totales generadas: {data.comisionesTotales.toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default informeremuneraciones;
