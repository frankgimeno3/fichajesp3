import { InterfazPropuesta } from '@/app/interfaces/interfaces';
import React, { FC } from 'react';

   
interface Props {
  propuesta: InterfazPropuesta
}

const OtrosDatosEnPropuesta: FC<Props> = ({ propuesta }) => {
 
  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Total</th>
          <th className="px-4 py-2">Descuento</th>
          <th className="px-4 py-2">Base Imponible</th>
          <th className="px-4 py-2">IVA</th>
          <th className="px-4 py-2">Precio final</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{propuesta.total_previo_propuesta}€</td>
          <td className="px-4 py-2">-{propuesta.descuento_final_propuesta}€</td>
          <td className="px-4 py-2">{propuesta.importe_total_BI_propuesta}€</td>
          <td className="px-4 py-2">
            { propuesta.iva_aplicable == true?
            <p>21%</p>
              :
              <p>No aplica</p>
          }
          </td>
          <td className="px-4 py-2">{propuesta.importe_propuesta_con_iva}€</td>
 
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnPropuesta;
