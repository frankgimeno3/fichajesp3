import { InterfazPropuesta } from '@/app/interfaces/interfaces';
import React, { FC } from 'react';

interface TablaDeCobrosProps {
  propuesta: InterfazPropuesta;
}

const TablaDeCobros: FC<TablaDeCobrosProps> = ({ propuesta }) => {
  return (
        <table className=" w-full border  shadow-xs border-gray-100  text-center text-sm "  >
      <thead>
        <tr className="bg-blue-950/80 text-white ">
          <th className="px-4 py-2">Número de cobro</th>
          <th className="px-4 py-2">Fecha</th>
          <th className="px-4 py-2">Importe</th>
          <th className="px-4 py-2">Forma de pago</th>
        </tr>
      </thead>
      <tbody>
        {propuesta.cobros?.map((cobro, index) => (
          <tr
            key={index}
            className="bg-white">
            <td className="px-4 py-2">{cobro.numero_cobro}</td>
            <td className="px-4 py-2">{cobro.fecha_cobro}</td>
            <td className="px-4 py-2">{cobro.importe_cobro}€</td>
            <td className="px-4 py-2">{cobro.forma_cobro}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDeCobros;
