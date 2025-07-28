import React, { FC } from 'react'; 
import { useRouter } from 'next/navigation';

interface ContenidoPorPublicacionProps {}

const ContenidoPorPublicacion: FC<ContenidoPorPublicacionProps> = ({ }) => {
  const router = useRouter();

  const mockData = [
    {
      deadline: '2025-08-05',
      nombre: 'Campaña Verano',
      fechaPublicacion: '2025-08-01',
      empresa: 'Coca-Cola',
      estadoMateriales: 'Enviado',
      enlace: 'https://ejemplo.com/campana/verano'
    },
    {
      deadline: '2025-08-10',
      nombre: 'Back to School',
      fechaPublicacion: '2025-08-07',
      empresa: 'Nike',
      estadoMateriales: 'Pendiente',
      enlace: 'https://ejemplo.com/campana/bts'
    },
    {
      deadline: '2025-08-15',
      nombre: 'Rebajas Agosto',
      fechaPublicacion: '2025-08-12',
      empresa: 'Zara',
      estadoMateriales: 'Revisado',
      enlace: 'https://ejemplo.com/campana/rebajas'
    },
    {
      deadline: '2025-08-20',
      nombre: 'Lanzamiento Producto X',
      fechaPublicacion: '2025-08-18',
      empresa: 'Apple',
      estadoMateriales: 'En producción',
      enlace: 'https://ejemplo.com/campana/producto-x'
    },
    {
      deadline: '2025-08-25',
      nombre: 'Promo Final Verano',
      fechaPublicacion: '2025-08-22',
      empresa: 'Adidas',
      estadoMateriales: 'Aprobado',
      enlace: 'https://ejemplo.com/campana/promo-verano'
    },
    {
      deadline: '2025-08-30',
      nombre: 'Campaña Vuelta al Trabajo',
      fechaPublicacion: '2025-08-27',
      empresa: 'Microsoft',
      estadoMateriales: 'Pendiente',
      enlace: 'https://ejemplo.com/campana/vuelta-trabajo'
    }
  ];

  return (
    <div className='flex flex-col'>
      
        <table className='min-w-full border border-gray-200 text-sm text-left text-gray-700'>
          <thead className='bg-gray-100 text-gray-600 '>
            <tr>
              <th className='px-4 py-2 border'>Fecha deadline</th>
              <th className='px-4 py-2 border'>Nombre de la publicación</th>
              <th className='px-4 py-2 border'>Fecha publicación</th>
              <th className='px-4 py-2 border'>Empresa</th>
              <th className='px-4 py-2 border'>Estado materiales</th>
              <th className='px-4 py-2 border'>Campaña completa</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((fila, idx) => (
              <tr key={idx} className='hover:bg-gray-50 cursor-pointer'>
                <td className='px-4 py-2 border'>{fila.deadline}</td>
                <td className='px-4 py-2 border'>{fila.nombre}</td>
                <td className='px-4 py-2 border'>{fila.fechaPublicacion}</td>
                <td className='px-4 py-2 border'>{fila.empresa}</td>
                <td className='px-4 py-2 border'>{fila.estadoMateriales}</td>
                <td className='px-4 py-2 border'>
                   <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/seguimientos/campanas/resumen')}
        >
          <p>Ver campaña</p>
        </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ContenidoPorPublicacion;
