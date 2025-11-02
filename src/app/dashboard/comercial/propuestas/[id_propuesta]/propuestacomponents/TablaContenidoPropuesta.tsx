import React, { FC } from 'react';
 
interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio_producto: number; 
  descuento_unitario:number;
}

interface Props {
  contenido: FilaContenido[];
}

const TablaContenidoPropuesta: FC<Props> = ({ contenido }) => {
 
  return (
        <table className=" w-full border  shadow-xs border-gray-100  text-center  text-sm"  >
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
        {contenido.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">{fila.medio}</td>
            <td className="px-4 py-2">{fila.publicacion}</td>
            <td className="px-4 py-2">{fila.producto}</td>
            <td className="px-4 py-2">{fila.precio_producto}€</td> 
            <td className="px-4 py-2">{fila.descuento_unitario}€</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoPropuesta;
