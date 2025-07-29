import React, { FC } from 'react';

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: string;
  deadline: string;
  fechaPublicacion: string;
  estadoMaterial: string;
  especificaciones: string;
}

const datosTabla: FilaContenido[] = [
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 210",
    producto: "Anuncio de una página",
    precio: "1760€",
    deadline: "11/10/2025",
    fechaPublicacion: "12/12/2025",
    estadoMaterial: "Publicado",
    especificaciones: "Comentario 1",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 211",
    producto: "Media página",
    precio: "850€",
    deadline: "15/10/2025",
    fechaPublicacion: "01/01/2026",
    estadoMaterial: "Pedido no recibido",
    especificaciones: "Comentario 2",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 212",
    producto: "Doble página",
    precio: "500€",
    deadline: "20/10/2025",
    fechaPublicacion: "05/01/2026",
    estadoMaterial: "No pedido",
    especificaciones: "Comentario 3",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 213",
    producto: "Publicidad en portada",
    precio: "2300€",
    deadline: "25/10/2025",
    fechaPublicacion: "10/01/2026",
    estadoMaterial: "No pedido",
    especificaciones: "Comentario 4",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 214",
    producto: "Anuncio interior portada",
    precio: "1200€",
    deadline: "30/10/2025",
    fechaPublicacion: "15/01/2026",
    estadoMaterial: "No pedido",
    especificaciones: "Comentario 5",
  },
];

const TablaContenidoCampaña: FC = () => {
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
          <th className="px-4 py-2">Especificaciones</th>
        </tr>
      </thead>
      <tbody>
        {datosTabla.map((fila, index) => (
          <tr key={index} className="bg-white text-gray-700">
            <td className="px-4 py-2">{fila.medio}</td>
            <td className="px-4 py-2">{fila.publicacion}</td>
            <td className="px-4 py-2">{fila.producto}</td>
            <td className="px-4 py-2">{fila.precio}</td>
            <td className="px-4 py-2">{fila.deadline}</td>
            <td className="px-4 py-2">{fila.fechaPublicacion}</td>
            <td className="px-4 py-2">{fila.estadoMaterial}</td>
            <td className="px-4 py-2">{fila.especificaciones}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaContenidoCampaña;
