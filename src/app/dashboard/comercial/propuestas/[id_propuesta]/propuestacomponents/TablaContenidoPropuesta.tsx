import { InterfazPropuesta } from '@/app/interfaces/interfaces';
import React, { FC } from 'react';

interface Props {
  propuesta: InterfazPropuesta;
}

const TablaContenidoPropuesta: FC<Props> = ({ propuesta }) => {
  return (
    <table className="w-full border shadow-xs border-gray-100 text-center text-sm">
      <thead>
        <tr className="bg-blue-950/80 text-white">
          <th className="px-4 py-2">Medio</th>
          <th className="px-4 py-2">Publicación</th>
          <th className="px-4 py-2">Producto</th>
          <th className="px-4 py-2">Precio tarifa</th>
          <th className="px-4 py-2">Descuento unitario</th>
        </tr>
      </thead>
      <tbody>
        {propuesta.contenido_propuesta.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">{fila.medio}</td>
            <td className="px-4 py-2">{fila.publicacion}</td>
            <td className="px-4 py-2">{fila.producto}</td>
            <td className="px-4 py-2">{fila.precio_producto}€</td>
            <td className="px-4 py-2">
              {'descuento_unitario' in fila ? fila.descuento_unitario + '€' : '0€'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoPropuesta;
