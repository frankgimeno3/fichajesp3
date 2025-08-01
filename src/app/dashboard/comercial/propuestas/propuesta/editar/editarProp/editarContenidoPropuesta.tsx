import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

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

const datosIniciales: FilaContenido[] = [
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 210",
    producto: "Anuncio de una página",
    precio: "1760€",
    deadline: "11/10/2025",
    fechaPublicacion: "12/12/2025",
    estadoMaterial: "Publicado",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 211",
    producto: "Media página",
    precio: "850€",
    deadline: "15/10/2025",
    fechaPublicacion: "01/01/2026",
    estadoMaterial: "Pedido no recibido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 212",
    producto: "Doble página",
    precio: "500€",
    deadline: "20/10/2025",
    fechaPublicacion: "05/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 213",
    producto: "Publicidad en portada",
    precio: "2300€",
    deadline: "25/10/2025",
    fechaPublicacion: "10/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 214",
    producto: "Anuncio interior portada",
    precio: "1200€",
    deadline: "30/10/2025",
    fechaPublicacion: "15/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
];

const TablaContenidoPropuesta: FC = () => {
  const router = useRouter();
  const [filas, setFilas] = useState<FilaContenido[]>(datosIniciales);

  const handleChange = (index: number, field: keyof FilaContenido, value: string) => {
    const nuevasFilas = [...filas];
    nuevasFilas[index][field] = value;
    setFilas(nuevasFilas);
  };

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
        {filas.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.medio}
                onChange={(e) => handleChange(index, "medio", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.publicacion}
                onChange={(e) => handleChange(index, "publicacion", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.producto}
                onChange={(e) => handleChange(index, "producto", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.precio}
                onChange={(e) => handleChange(index, "precio", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.deadline}
                onChange={(e) => handleChange(index, "deadline", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                value={fila.fechaPublicacion}
                onChange={(e) => handleChange(index, "fechaPublicacion", e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoPropuesta;
