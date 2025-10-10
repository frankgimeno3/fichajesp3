'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import PropSvg from '../svg/PropSvg';
import propuestas from '@/app/contents/propuestasContents.json';
import cuentas from '@/app/contents/cuentasContents.json';

interface MisPendientesProps {
  clienteFiltro: string;
  codigoCRMFiltro: string;
  agenteActual: string;
  fechaInicio: string;
  fechaFin: string;
}

const MisPendientes: FC<MisPendientesProps> = ({
  clienteFiltro,
  codigoCRMFiltro,
  agenteActual,
  fechaInicio,
  fechaFin,
}) => {
  const router = useRouter();

   const resultadosFiltrados = propuestas.filter((p: any) => {
    const coincideEstado = p.detalles_propuesta.estado_propuesta === 'Pendiente';
    const coincideAgente =
      agenteActual === '' || p.detalles_propuesta.id_agente_propuesta === agenteActual;

     const cuentaInfo = cuentas.find(
      (c: any) => c.id_cuenta === p.cuenta_propuesta.id_cuenta_propuesta
    );
    const nombreEmpresa = cuentaInfo
      ? cuentaInfo.nombre_empresa
      : `Cuenta ${p.cuenta_propuesta.id_cuenta_propuesta}`;

     const coincideCliente =
      (clienteFiltro === '' || nombreEmpresa.toLowerCase().includes(clienteFiltro.toLowerCase())) &&
      (codigoCRMFiltro === '' ||
        p.cuenta_propuesta.id_cuenta_propuesta.toString().toLowerCase().includes(codigoCRMFiltro.toLowerCase()));

    const primeraPublicacion = p.contenido_propuesta?.[0];
    const fechaEnvio = primeraPublicacion
      ? new Date(primeraPublicacion.deadline_publicacion.split('/').reverse().join('-'))
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
          <tr className='text-left'>
             <th className="px-4 py-2">ID Propuesta</th>
            <th className="text-left p-2 font-light">Nombre Empresa</th>
            <th className="text-left p-2 font-light">Precio (€)</th>
            <th className="px-4 py-2">Fecha de envío</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res: any, index: number) => {
            const primera = res.contenido_propuesta?.[0] || {};
            const cuentaInfo = cuentas.find(
              (c: any) => c.id_cuenta === res.cuenta_propuesta.id_cuenta_propuesta
            );
            const nombreEmpresa = cuentaInfo
              ? cuentaInfo.nombre_empresa
              : `Cuenta ${res.cuenta_propuesta.id_cuenta_propuesta}`;

            return (
              <tr
                key={res.detalles_propuesta.id_propuesta + index}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  router.push(
                    `/dashboard/comercial/propuestas/${res.detalles_propuesta.id_propuesta}`
                  )
                }
              >
                <td className="flex flex-row  gap-2 items-center p-2 border-b border-gray-200">
                  <PropSvg />
                
                  {res.detalles_propuesta.id_propuesta}
                </td>
                <td className="p-2 border-b border-gray-200 pl-3">{nombreEmpresa}</td>
                <td className="p-2 border-b border-gray-200 pl-3">{primera.precio_producto} €</td>
                <td className="p-2 border-b border-gray-200 pl-3">
                  {res.detalles_propuesta.fecha_envio_propuesta}
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
