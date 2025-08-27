'use client'

import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ServiciosContents from '../../../../contents/ServiciosContents.json';

interface Servicio {
  id: number;
  nombreServicio: string;
  codigoServicio: string;
  medio: string;
  publicacion: string;
  precio: string;
  producto: string;
  fechaDeadline: string;
  fechaPublicacion: string;
}

interface TablaServiciosProps {
  medioFiltro: string;
  publicacionFiltro: string;
  servicioFiltro: string;
}

const TablaServicios: FC<TablaServiciosProps> = ({
  medioFiltro,
  publicacionFiltro,
  servicioFiltro,
}) => {
  const router = useRouter();
  const [Servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    const ServiciosMapeadas: Servicio[] = ServiciosContents.map((t, index) => ({
      id: index + 1,
      nombreServicio:
        t.soporte === 'Revista'
          ? `${t.medio_es} - ${t.edicion_es}`
          : t.medio_es,
      codigoServicio: t.product_id,
      medio: t.medio_es,
      publicacion: t.publicacion_es,
      precio: t.price,
      producto: t.producto_es,
      fechaDeadline: t.date_deadline,
      fechaPublicacion: t.date_publication,
    }));

    setServicios(ServiciosMapeadas);
  }, []);

  const ServiciosFiltrados = Servicios.filter((s) => {
    const coincideServicio =
      servicioFiltro === '' ||
      s.nombreServicio.toLowerCase().includes(servicioFiltro.toLowerCase()) ||
      s.codigoServicio.toLowerCase().includes(servicioFiltro.toLowerCase());

    const coincideMedio =
      medioFiltro === '' ||
      s.medio.toLowerCase().includes(medioFiltro.toLowerCase());

    const coincidePublicacion =
      publicacionFiltro === '' ||
      s.publicacion.toLowerCase().includes(publicacionFiltro.toLowerCase());

    return coincideServicio && coincideMedio && coincidePublicacion;
  });

  return (
    <div className='overflow-x-auto text-xs px-5'>
      <table className='min-w-full '>
        <thead className='bg-blue-950 text-white'>
          <tr>
            <th className='text-left p-2 font-light w-24'>Código</th>
            <th className='text-left p-2 font-light w-36'>Medio</th>
            <th className='text-left p-2 font-light w-12'>Publicación</th>
            <th className='text-left p-2 font-light w-24'>Producto</th>
            <th className='text-left p-2 font-light w-24'>Precio tarifa</th>
            <th className='text-left p-2 font-light w-24'>Deadline Materiales</th>
            <th className='text-left p-2 font-light w-24'>Fecha Publicación</th>
          </tr>
        </thead>
        <tbody>
          {ServiciosFiltrados.map((servicio) => (
            <tr
              key={servicio.id}
              className='hover:bg-gray-50 cursor-pointer'
              onClick={() =>
                router.push(`/dashboard/comercial/Servicios/${servicio.codigoServicio}`)
              }
            >
              <td className='p-2 border-b border-gray-200 w-24'>{servicio.codigoServicio}</td>
              <td className='p-2 border-b border-gray-200 w-36'>{servicio.medio}</td>
              <td className='p-2 border-b border-gray-200 w-12'>{servicio.publicacion}</td>
              <td className='p-2 border-b border-gray-200 w-24'>{servicio.producto}</td>
              <td className='p-2 border-b border-gray-200 w-24'>{servicio.precio}</td>
              <td className='p-2 border-b border-gray-200 w-24'>{servicio.fechaDeadline}</td>
              <td className='p-2 border-b border-gray-200 w-24'>{servicio.fechaPublicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {ServiciosFiltrados.length === 0 && (
        <p className='mt-4 text-center text-gray-500'>
          No se encontraron Servicios.
        </p>
      )}
    </div>
  );
};

export default TablaServicios;
