import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import FolderSvg from '../../comercial/propuestas/componentesPropuestas/svg/FolderSvg';

interface Servicio {
  id: number;
  nombreServicio: string;
  codigoServicio: string;
  medio: string;
  publicacion: string;
}

interface TablaServiciosProps {
  medioFiltro: string;
  publicacionFiltro: string;
  servicioFiltro: string;
}

const mockServicios: Servicio[] = [
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

const TablaServicios: FC<TablaServiciosProps> = ({
  medioFiltro,
  publicacionFiltro,
  servicioFiltro,
}) => {
  const router = useRouter();

  const serviciosFiltrados = mockServicios.filter((s) => {
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

  const handleRedirection = () => {
    router.push('/dashboard/servicios/detalle');
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-4 py-2 text-left'>Nombre Servicio</th>
            <th className='px-4 py-2 text-left'>Código</th>
            <th className='px-4 py-2 text-left'>Medio</th>
            <th className='px-4 py-2 text-left'>Publicación</th>
            <th className='px-4 py-2 text-left'>Precio tarifa</th>
            <th className='px-4 py-2 text-left'>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {serviciosFiltrados.map((servicio) => (
            <tr
              key={servicio.id}
              className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
              onClick={handleRedirection}
            >
              <td className='px-4 py-2'>{servicio.nombreServicio}</td>
              <td className='px-4 py-2'>{servicio.codigoServicio}</td>
              <td className='px-4 py-2'>{servicio.medio}</td>
              <td className='px-4 py-2'>{servicio.publicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {serviciosFiltrados.length === 0 && (
        <p className='mt-4 text-center text-gray-500'>No se encontraron servicios.</p>
      )}
    </div>
  );
};

export default TablaServicios;
