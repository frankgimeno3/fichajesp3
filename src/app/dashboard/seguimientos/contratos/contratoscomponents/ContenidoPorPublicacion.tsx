import React, { FC } from 'react'; 
import { useRouter } from 'next/navigation';

interface ContenidoPorPublicacionProps {}

const ContenidoPorPublicacion: FC<ContenidoPorPublicacionProps> = ({ }) => {
  const router = useRouter();

  const mockData = [
    {
      deadline: '2025-08-05',
      nombre: '212 Vidrio España',
      fechaPublicacion: '2025-09-01',
      empresa: 'Shencheng',
      estadoMateriales: 'Ok producción',
      enlace: 'https://ejemplo.com/campana/verano'
    },
    {
      deadline: '2025-08-05',
      nombre: '212 Vidrio España',
      fechaPublicacion: '2025-09-01',
      empresa: 'Fratelli Pezza',
      estadoMateriales: 'Enviado a producción',
      enlace: 'https://ejemplo.com/campana/bts'
    },
    {
      deadline: '2025-08-05',
      nombre: '212 Ventanas España',
      fechaPublicacion: '2025-09-01',
      empresa: 'Opera',
      estadoMateriales: 'Material incorrecto',
      enlace: 'https://ejemplo.com/campana/rebajas'
    },
    {
      deadline: '2025-08-20',
      nombre: '87 Ventanas Latam',
      fechaPublicacion: '2025-12-22',
      empresa: 'Master Italy',
      estadoMateriales: 'Pedido al cliente',
      enlace: 'https://ejemplo.com/campana/producto-x'
    },
    {
      deadline: '2025-08-25',
      nombre: '87 Vidrio Latam',
      fechaPublicacion: '2025-12-22',
      empresa: 'Best Makina',
      estadoMateriales: 'Pendiente de solicitar',
      enlace: 'https://ejemplo.com/campana/promo-verano'
    },
    {
      deadline: '2025-08-30',
      nombre: 'QQ 2026',
      fechaPublicacion: '2026-02-28',
      empresa: 'Best Makina',
      estadoMateriales: 'Pendiente de solicitar',
      enlace: 'https://ejemplo.com/campana/vuelta-trabajo'
    }
  ];

  return (
    <div className='flex flex-col'>
      
        <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
            <tr>
              <th className='text-left p-2 font-light'>Fecha deadline</th>
              <th className='text-left p-2 font-light'>Nombre de la publicación</th>
              <th className='text-left p-2 font-light'>Fecha publicación</th>
              <th className='text-left p-2 font-light'>Empresa</th>
              <th className='text-left p-2 font-light'>Estado materiales</th>
              <th className='text-left p-2 font-light'>Contrato completo</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((fila, idx) => (
              <tr key={idx} className='hover:bg-gray-50 '>
                <td className='p-2 border-b border-gray-200'>{fila.deadline}</td>
                <td className='p-2 border-b border-gray-200'>{fila.nombre}</td>
                <td className='p-2 border-b border-gray-200'>{fila.fechaPublicacion}</td>
                <td className='p-2 border-b border-gray-200'>{fila.empresa}</td>
                <td className='p-2 border-b border-gray-200'>{fila.estadoMateriales}</td>
                <td className='p-2 border-b border-gray-200'>
                   <button
          className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={() => router.push('/dashboard/seguimientos/campanas/resumen')}
        >
          <p>Ver campaña publicitaria</p>
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
