import React, { FC } from 'react';

interface Material {
  empresa: string;
  tipo: string;
  especificaciones: string;
  agente: string;
  estado: string;
  deadline: string;
}

const MaterialesRevista: FC = () => {
  const materiales: Material[] = [
    {
      empresa: 'Empresa A',
      tipo: 'Banner',
      especificaciones: '300x250 px, JPG',
      agente: 'Juan Pérez',
      estado: 'Pendiente',
      deadline: '10/08/2025',
    },
    {
      empresa: 'Empresa B',
      tipo: 'Artículo',
      especificaciones: '500 palabras, Word',
      agente: 'Laura Gómez',
      estado: 'Entregado',
      deadline: '08/08/2025',
    },
    {
      empresa: 'Empresa C',
      tipo: 'Anuncio',
      especificaciones: 'A4, PDF alta calidad',
      agente: 'Carlos Ruiz',
      estado: 'En revisión',
      deadline: '12/08/2025',
    },
    {
      empresa: 'Empresa D',
      tipo: 'Nota de prensa',
      especificaciones: '300 palabras, Word',
      agente: 'Ana Torres',
      estado: 'Pendiente',
      deadline: '09/08/2025',
    },
    {
      empresa: 'Empresa E',
      tipo: 'Banner',
      especificaciones: '728x90 px, PNG',
      agente: 'Luis Martínez',
      estado: 'Entregado',
      deadline: '07/08/2025',
    },
    {
      empresa: 'Empresa F',
      tipo: 'Publicidad',
      especificaciones: 'Half page, PDF',
      agente: 'Sofía Ramírez',
      estado: 'Pendiente',
      deadline: '11/08/2025',
    },
    {
      empresa: 'Empresa G',
      tipo: 'Entrevista',
      especificaciones: 'Audio + Foto',
      agente: 'Pedro Sánchez',
      estado: 'Agendado',
      deadline: '13/08/2025',
    },
  ];

  return (
    <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
      <h2 className="text-xl font-semibold mb-4">Materiales próximas ediciones</h2>

      <div className="overflow-x-auto bg-white rounded p-5 w-full">
        <p>Temática revista: Blablablablabla</p>
        <p>Fecha estimada de envío a imprenta: Blablablablabla</p>
        <p>Fecha estimada de envío a cliente: Blablablablabla</p>
        <p>Fecha estimada de publicación digital: Blablablablabla</p>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left border">Empresa</th>
              <th className="px-4 py-2 text-left border">Tipo de material</th>
              <th className="px-4 py-2 text-left border">Especificaciones</th>
              <th className="px-4 py-2 text-left border">Agente</th>
              <th className="px-4 py-2 text-left border">Estado</th>
              <th className="px-4 py-2 text-left border">Deadline material</th>
            </tr>
          </thead>
          <tbody>
            {materiales.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.empresa}</td>
                <td className="px-4 py-2 border">{item.tipo}</td>
                <td className="px-4 py-2 border">{item.especificaciones}</td>
                <td className="px-4 py-2 border">{item.agente}</td>
                <td className="px-4 py-2 border">{item.estado}</td>
                <td className="px-4 py-2 border">{item.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaterialesRevista;
