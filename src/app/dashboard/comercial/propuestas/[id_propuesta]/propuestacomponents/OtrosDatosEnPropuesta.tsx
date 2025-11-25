import { InterfazPropuesta } from '@/app/interfaces/interfaces';
import React, { FC } from 'react';

interface Props {
  propuesta: InterfazPropuesta;
}

const OtrosDatosEnPropuesta: FC<Props> = ({ propuesta }) => {
  const totalPrevio = propuesta.contenido_propuesta.reduce(
    (sum, item) => sum + item.precio_producto,
    0
  );

  return (
    <table className="w-full border shadow-xs border-gray-100 text-center text-sm">
      <thead>
        <tr className="bg-blue-950/80 text-white">
          <th className="px-4 py-2">Total</th>
          <th className="px-4 py-2">Descuento</th>
          <th className="px-4 py-2">Base Imponible</th>
          <th className="px-4 py-2">IVA</th>
          <th className="px-4 py-2">Precio final</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{totalPrevio.toFixed(2)}€</td>
          <td className="px-4 py-2">-{propuesta.descuento_final_propuesta.toFixed(2)}€</td>
          <td className="px-4 py-2">{propuesta.importe_total_BI_propuesta.toFixed(2)}€</td>
          <td className="px-4 py-2">
            {propuesta.iva_aplicable ? '21%' : 'No aplica'}
          </td>
          <td className="px-4 py-2">{propuesta.importe_propuesta_con_iva.toFixed(2)}€</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnPropuesta;
