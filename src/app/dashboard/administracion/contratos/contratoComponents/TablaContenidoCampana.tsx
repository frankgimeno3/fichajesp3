import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: string;
  deadline: string;
  fechaPublicacion: string;
  estadoMaterial: string;
  urlcontenido: string;
}

interface Props {
  contenidos: FilaContenido[];
}

const TablaContenidoCampaña: FC<Props> = ({ contenidos }) => {
  const router = useRouter();

  return (
    <table className="table-auto border-collapse text-center">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Medio</th>
          <th className="px-4 py-2">Publicación</th>
          <th className="px-4 py-2">Producto</th>
          <th className="px-4 py-2">Precio pagado</th>
          <th className="px-4 py-2">Deadline material</th>
          <th className="px-4 py-2">Fecha de publicación</th>
          <th className="px-4 py-2">Estado del material</th>
          <th className="px-4 py-2">Código de contenido</th>
        </tr>
      </thead>
      <tbody>
        {contenidos.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">{fila.medio}</td>
            <td className="px-4 py-2">{fila.publicacion}</td>
            <td className="px-4 py-2">{fila.producto}</td>
            <td className="px-4 py-2">{fila.precio}</td>
            <td className="px-4 py-2">{fila.deadline}</td>
            <td className="px-4 py-2">{fila.fechaPublicacion}</td>
            <td className="px-4 py-2">{fila.estadoMaterial}</td>
            <td className="px-4 py-2">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push(fila.urlcontenido)}
              >
                Ficha del contenido
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoCampaña;
