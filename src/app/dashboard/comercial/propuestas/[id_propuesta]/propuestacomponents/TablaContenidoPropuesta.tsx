import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio_producto: number;
  deadline_publicacion: string;
  fecha_publicacion_publicacion: string;
}

interface Props {
  contenido: FilaContenido[];
}

const TablaContenidoPropuesta: FC<Props> = ({ contenido }) => {
  const router = useRouter();

  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Medio</th>
          <th className="px-4 py-2">Publicación</th>
          <th className="px-4 py-2">Producto</th>
          <th className="px-4 py-2">Precio tarifa</th>
          <th className="px-4 py-2">Deadline material</th>
          <th className="px-4 py-2">Fecha de publicación</th>
        </tr>
      </thead>
      <tbody>
        {contenido.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">{fila.medio}</td>
            <td className="px-4 py-2">{fila.publicacion}</td>
            <td className="px-4 py-2">{fila.producto}</td>
            <td className="px-4 py-2">{fila.precio_producto}€</td>
            <td className="px-4 py-2">{fila.deadline_publicacion}</td>
            <td className="px-4 py-2">{fila.fecha_publicacion_publicacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoPropuesta;
