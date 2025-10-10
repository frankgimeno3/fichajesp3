'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import PropSvg from '../svg/PropSvg';
import propuestas from '@/app/contents/propuestasContents.json';

interface MisPendientesProps {
  clienteFiltro: string;
  agenteActual: string;
  fechaInicio: string;
  fechaFin: string;
}

const MisPendientes: FC<MisPendientesProps> = ({
  clienteFiltro,
  agenteActual,
  fechaInicio,
  fechaFin,
}) => {
  const router = useRouter();

  // 🔍 Filtrar sólo las propuestas pendientes del agente actual
  const resultadosFiltrados = propuestas.filter((p: any) => {
    const coincideEstado = p.detalles_propuesta.estado_propuesta === 'Pendiente';
    const coincideAgente =
      agenteActual === '' ||
      p.detalles_propuesta.id_agente_propuesta === agenteActual;

    const coincideCliente =
      clienteFiltro === '' ||
      p.cuenta_propuesta.id_cuenta_propuesta
        .toString()
        .toLowerCase()
        .includes(clienteFiltro.toLowerCase()) ||
      (p.cuenta_propuesta.cargoContacto &&
        p.cuenta_propuesta.cargoContacto
          .toLowerCase()
          .includes(clienteFiltro.toLowerCase()));

    const primeraPublicacion = p.contenido_propuesta?.[0];
    const fechaEnvio = primeraPublicacion
      ? new Date(
          primeraPublicacion.deadline_publicacion.split('/').reverse().join('-')
        )
      : null;

    const coincideFecha =
      (!fechaInicio || (fechaEnvio && fechaEnvio >= new Date(fechaInicio))) &&
      (!fechaFin || (fechaEnvio && fechaEnvio <= new Date(fechaFin)));

    return coincideEstado && coincideAgente && coincideCliente && coincideFecha;
  });
 

  return (
    <div className="h-full">
      <table className="min-w-full">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="text-left p-2 font-light"></th>
            <th className="px-4 py-2">ID Propuesta</th>
            <th className="text-left p-2 font-light">Estado</th>
            <th className="text-left p-2 font-light">ID Cuenta</th>
            <th className="text-left p-2 font-light">Cargo Contacto</th>
            <th className="text-left p-2 font-light">Producto</th>
            <th className="text-left p-2 font-light">Precio (€)</th>
            <th className="px-4 py-2">Deadline</th>
            <th className="px-4 py-2">Publicación</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res: any, index: number) => {
            const primera = res.contenido_propuesta?.[0] || {};
            return (
              <tr
                key={res.detalles_propuesta.id_propuesta + index}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  router.push(`/dashboard/comercial/propuestas/${res.detalles_propuesta.id_propuesta}`)
                }
              >
                <td className="p-2 border-b border-gray-200">
                  <PropSvg />
                </td>
                <td className="p-2 border-b border-gray-200">
                  {res.detalles_propuesta.id_propuesta}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {res.detalles_propuesta.estado_propuesta}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {res.cuenta_propuesta.id_cuenta_propuesta}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {res.cuenta_propuesta.cargoContacto}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {primera.producto}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {primera.precio_producto} €
                </td>
                <td className="p-2 border-b border-gray-200">
                  {primera.deadline_publicacion}
                </td>
                <td className="p-2 border-b border-gray-200">
                  {primera.fecha_publicacion_publicacion}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {resultadosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No se encontraron resultados.
        </p>
      )}
    </div>
  );
};

export default MisPendientes;
