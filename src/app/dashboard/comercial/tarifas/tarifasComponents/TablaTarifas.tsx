import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import tarifasContents from '../../../../contents/tarifasContents.json';

interface Servicio {
  id: number;
  nombreServicio: string;
  codigoServicio: string;
  medio: string;
  publicacion: string;
  precio: string;
  producto: string;
}

interface TablaTarifasProps {
  medioFiltro: string;
  publicacionFiltro: string;
  servicioFiltro: string;
}

const TablaTarifas: FC<TablaTarifasProps> = ({
  medioFiltro,
  publicacionFiltro,
  servicioFiltro,
}) => {
  const router = useRouter();
  const [tarifas, setTarifas] = useState<Servicio[]>([]);

  useEffect(() => {
    const tarifasMapeadas: Servicio[] = tarifasContents.map((t, index) => ({
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
    }));

    setTarifas(tarifasMapeadas);
  }, []);

  const TarifasFiltrados = tarifas.filter((s) => {
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
      <table className='min-w-full'>
        <thead className='bg-blue-950 text-white'>
          <tr>
            <th className='text-left p-2 font-light flex-1'>Código</th>
            <th className='text-left p-2 font-light flex-1'>Medio</th>
            <th className='text-left p-2 font-light flex-1'>Publicación</th>
            <th className='text-left p-2 font-light flex-1'>Producto</th>
            <th className='text-left p-2 font-light flex-1'>Precio tarifa</th>
            <th className='text-left p-2 font-light flex-1'>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {TarifasFiltrados.map((servicio) => (
            <tr
              key={servicio.id}
              className='hover:bg-gray-50 cursor-pointer'
              onClick={() => router.push('/dashboard/comercial/tarifas/detalle')}
            >
              <td className='p-2 border-b border-gray-200 flex-1'>{servicio.codigoServicio}</td>
              <td className='p-2 border-b border-gray-200 flex-1'>{servicio.medio}</td>
              <td className='p-2 border-b border-gray-200 flex-1'>{servicio.publicacion}</td>
              <td className='p-2 border-b border-gray-200 flex-1'>{servicio.producto}</td>
              <td className='p-2 border-b border-gray-200 flex-1'>{servicio.precio}</td>
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
