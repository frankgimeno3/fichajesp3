'use client'

import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import data from '../../../../contents/ServiciosContents.json';

interface DetalleProps {}

const Detalle: FC<DetalleProps> = () => {
  const params = useParams();
  const productId = params?.id as string;  

  const servicio = data.find((item) => item.product_id === productId);

  if (!servicio) {
    return (
      <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
        <MiddleNav tituloprincipal="Servicio no encontrado" />
        <div className="bg-white min-h-screen p-12 text-gray-600">
          <p>No se encontró un servicio con el código: {productId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Resumen del servicio `} />

      <div className="bg-white min-h-screen p-12 text-gray-600">                  
        {/* Tabla de Servicios */}
        <div className="rounded-lg shadow-xl bg-white">
          <table className="w-full text-left rounded-lg overflow-hidden">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="p-3">Nombre del servicio</th>
                <th className="p-3">Código</th>
                <th className="p-3">Medio</th>
                <th className="p-3">Publicación</th>
                <th className="p-3">Precio tarifa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">{servicio.producto_es}</td>
                <td className="p-3">{servicio.product_id}</td>
                <td className="p-3">{servicio.medio_es}</td>
                <td className="p-3">{servicio.publicacion_es}</td>
                <td className="p-3">${servicio.price}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Apartado de detalles */}
        <div className="mt-8 rounded-lg shadow-xl bg-white">
          <h3 className="p-3 text-md font-semibold bg-blue-950 w-full text-white rounded-t-lg">
            Detalle del servicio
          </h3>
          <div className="p-3 text-sm">
            <p className="p-1">
              <strong>Edición:</strong> {servicio.edicion_es}
            </p>
            <p className="p-1">
              <strong>Año:</strong> {servicio.year}
            </p>
            <p className="p-1">
              <strong>Deadline materiales:</strong> {servicio.date_deadline}
            </p>
            <p className="p-1">
              <strong>Fecha de publicación:</strong> {servicio.date_publication}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
