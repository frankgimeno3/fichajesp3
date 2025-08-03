import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC } from 'react';

interface informeremuneracionesProps {}

const informeremuneraciones: FC<informeremuneracionesProps> = ({ }) => {
  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 overflow-x-scroll w-full">
      <MiddleNav tituloprincipal="Informe Remuneraciones agente Jose Luis Fernandez Llop mes Junio" />

      <div className="bg-white min-h-screen p-6 text-gray-800 w-full space-y-4">
        <h2 className="text-xl font-semibold">Informe de remuneraciones mes de Junio</h2>
        <p><strong>Agente:</strong> Jose Luis Fernandez Llop</p>
        <p><strong>Comisiones a cobrar:</strong> 277,10€</p>
        <p>
          Tal y como detalla el anexo a su contrato referente a la remuneración de comisiones, PROPORCIÓN 3, S.A. declara que debe añadir al total bruto a percibir del Jose Luis Fernandez Llop un importe de 277,10€ en concepto de comisiones, por los pagos recibidos durante el mes de Junio de 2025 en relación a ventas realizadas por el agente.
        </p>
        <p>
          A continuación se detallan los importes recibidos durante este mes, a fecha 25 de Junio de 2025, su importe y su comisión final generada, así como la referencia de cada uno de ellos a su mes de generación para poder identificar en su correspondiente Informe de ventas el porqué de dicho % aplicado sobre el importe cobrado.
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
            <tr>
              <td className="border px-2 py-1">REICH UND PARTNER (RATH)</td>
              <td className="border px-2 py-1">Enero</td>
              <td className="border px-2 py-1">621,60 €</td>
              <td className="border px-2 py-1">555,08 €</td>
              <td className="border px-2 py-1">32,36 € (5,83%)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">REICH UND PARTNER (RATH)</td>
              <td className="border px-2 py-1">Enero</td>
              <td className="border px-2 py-1">350,40 €</td>
              <td className="border px-2 py-1">312,90 €</td>
              <td className="border px-2 py-1">18,24 € (5,83%)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">METRA (GRUPPO WISE)</td>
              <td className="border px-2 py-1">Mayo</td>
              <td className="border px-2 py-1">4.515,00 €</td>
              <td className="border px-2 py-1">2.265,00 €</td>
              <td className="border px-2 py-1">226,50 € (10%)</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">i3D</td>
              <td className="border px-2 py-1">Junio</td>
              <td className="border px-2 py-1">1.760,00 €</td>
              <td className="border px-2 py-1">0 € (No superación IMM)</td>
              <td className="border px-2 py-1">0 €</td>
            </tr>
            <tr className="bg-gray-100 font-semibold">
              <td className="border px-2 py-1" colSpan={4}>Totales</td>
              <td className="border px-2 py-1">277,10€</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 font-semibold">Comisiones totales generadas: 277,10€</p>
      </div>
    </div>
  );
};

export default informeremuneraciones;
