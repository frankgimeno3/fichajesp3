import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
 
interface Servicio {
  id: number;
  nombreServicio: string;
  codigoServicio: string;
  medio: string;
  publicacion: string;
}

interface TablaTarifasProps {
  medioFiltro: string;
  publicacionFiltro: string;
  servicioFiltro: string;
}

const mockTarifas: Servicio[] = [
  {
    id: 1,
    nombreServicio: 'Servicio A',
    codigoServicio: 'SRV001',
    medio: 'Email',
    publicacion: 'Campaña Julio',
  },
  {
    id: 2,
    nombreServicio: 'Servicio B',
    codigoServicio: 'SRV002',
    medio: 'Redes Sociales',
    publicacion: 'Post Instagram',
  },
  {
    id: 3,
    nombreServicio: 'Servicio C',
    codigoServicio: 'SRV003',
    medio: 'Email',
    publicacion: 'Newsletter',
  },
];

const TablaTarifas: FC<TablaTarifasProps> = ({
  medioFiltro,
  publicacionFiltro,
  servicioFiltro,
}) => {
  const router = useRouter();

  const TarifasFiltrados = mockTarifas.filter((s) => {
    const coincideServicio =
      servicioFiltro === '' ||
      s.nombreServicio.toLowerCase().includes(servicioFiltro.toLowerCase()) ||
      s.codigoServicio.toLowerCase().includes(servicioFiltro.toLowerCase());

    const coincideMedio =
      medioFiltro === '' || s.medio.toLowerCase().includes(medioFiltro.toLowerCase());

    const coincidePublicacion =
      publicacionFiltro === '' || s.publicacion.toLowerCase().includes(publicacionFiltro.toLowerCase());

    return coincideServicio && coincideMedio && coincidePublicacion;
  });

 
  return (
    <div className='overflow-x-auto'>
   <table className='min-w-full '>
          <thead className='bg-blue-950 text-white '>
          <tr>
             <th className='text-left p-2 font-light'>Nombre Servicio</th>
             <th className='text-left p-2 font-light'>Código</th>
             <th className='text-left p-2 font-light'>Medio</th>
             <th className='text-left p-2 font-light'>Publicación</th>
             <th className='text-left p-2 font-light'>Precio tarifa</th>
             <th className='text-left p-2 font-light'>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {TarifasFiltrados.map((servicio) => (
            <tr
              key={servicio.id}
             className='hover:bg-gray-50 cursor-pointer'
              onClick={()=>{ router.push('/dashboard/comercial/tarifas/detalle');}}
            >
              <td className='p-2 border-b border-gray-200'>{servicio.nombreServicio}</td>
              <td className='p-2 border-b border-gray-200'>{servicio.codigoServicio}</td>
              <td className='p-2 border-b border-gray-200'>{servicio.medio}</td>
              <td className='p-2 border-b border-gray-200'>{servicio.publicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {TarifasFiltrados.length === 0 && (
        <p className='mt-4 text-center text-gray-500'>No se encontraron Tarifas.</p>
      )}
    </div>
  );
};

export default TablaTarifas;
