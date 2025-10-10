'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import FolderSvg from '../svg/FolderSvg';
import propuestas from '@/app/contents/propuestasContents.json';
import cuentas from "@/app/contents/cuentasContents.json";

interface ContenidoPropuesta {
  medio: string;
  publicacion: string;
  producto: string;
  precio_producto: number;
  deadline_publicacion: string;
  fecha_publicacion_publicacion: string;
}

interface DetallesPropuesta {
  id_propuesta: string;
  id_agente_propuesta: string;
  estado_propuesta: string;
  fecha_envio_propuesta: string;
}

interface CuentaPropuesta {
  id_cuenta_propuesta: string;
  id_contacto: string;
  cargoContacto: string;
}

interface Propuesta {
  detalles_propuesta: DetallesPropuesta;
  cuenta_propuesta: CuentaPropuesta;
  contenido_propuesta: ContenidoPropuesta[];
  descuento_final_propuesta: number;
  importe_total_BI_propuesta: number;
  iva_aplicable: boolean;
  importe_propuesta_con_iva: number;
}

interface ResultadoCliente {
  id: string;
  nombreEmpresa: string;
  codigoCRM: string;
  numeroPropuestas: number;
  agenteAsignado: string;
  fechaUltimaPropuesta: string;
  estadosIncluidos: string[];
}

interface TodasPropuestasProps {
  clienteFiltro: string;
  codigoCRMFiltro: string;
  agenteFiltro: string;
  fechaInicio: string;
  fechaFin: string;
  estadoFiltro: string;
}

const TodasPropuestas: FC<TodasPropuestasProps> = ({
  clienteFiltro,
  codigoCRMFiltro,
  agenteFiltro,
  fechaInicio,
  fechaFin,
  estadoFiltro,
}) => {
  const router = useRouter();

  const agrupadasPorCliente = (propuestas as Propuesta[]).reduce(
    (acc: Record<string, any>, p: Propuesta) => {
      const idCuenta = p.cuenta_propuesta.id_cuenta_propuesta;

      const cuentaInfo = cuentas.find((c: any) => c.id_cuenta === idCuenta);

      if (!acc[idCuenta]) {
        acc[idCuenta] = {
          id: idCuenta,
          nombreEmpresa: cuentaInfo ? cuentaInfo.nombre_empresa : `Cuenta ${idCuenta}`,
          codigoCRM: idCuenta,
          propuestas: [],
          agenteAsignado: p.detalles_propuesta.id_agente_propuesta,
        };
      }

      acc[idCuenta].propuestas.push(p);
      return acc;
    },
    {}
  );

  const resultados: ResultadoCliente[] = Object.values(agrupadasPorCliente).map(
    (c: any) => {
      const deadlines: Date[] = c.propuestas
        .map((p: Propuesta) => p.contenido_propuesta?.[0]?.deadline_publicacion || '01/01/1970')
        .map((f: string) => new Date(f.split('/').reverse().join('-')));

      const fechaUltimaPropuesta =
        deadlines.length > 0
          ? new Date(Math.max(...deadlines.map((d: Date) => d.getTime())))
              .toISOString()
              .split('T')[0]
          : '';

      const estadosIncluidos = c.propuestas.map(
        (p: Propuesta) => p.detalles_propuesta.estado_propuesta
      );

      return {
        id: c.id,
        nombreEmpresa: c.nombreEmpresa,
        codigoCRM: c.codigoCRM,
        numeroPropuestas: c.propuestas.length,
        agenteAsignado: c.agenteAsignado,
        fechaUltimaPropuesta,
        estadosIncluidos,
      };
    }
  );

  // Filtrado corregido
  const resultadosFiltrados = resultados.filter((r) => {
    const coincideCliente =
      clienteFiltro === '' || r.nombreEmpresa.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideCRM =
      codigoCRMFiltro === '' || r.codigoCRM.toLowerCase().includes(codigoCRMFiltro.toLowerCase());

    const coincideAgente = agenteFiltro === '' || r.agenteAsignado === agenteFiltro;

    const coincideEstado =
      estadoFiltro === '' || r.estadosIncluidos.includes(estadoFiltro);

    const coincideFecha =
      (!fechaInicio || new Date(r.fechaUltimaPropuesta) >= new Date(fechaInicio)) &&
      (!fechaFin || new Date(r.fechaUltimaPropuesta) <= new Date(fechaFin));

    return coincideCliente && coincideCRM && coincideAgente && coincideEstado && coincideFecha;
  });

  return (
    <div className="h-full">
      <table className="min-w-full">
        <thead className="bg-blue-950 text-white">
          <tr>
            <th className="text-left p-2 font-light"></th>
            <th className="text-left p-2 font-light">Nombre Empresa</th>
            <th className="text-left p-2 font-light">Código CRM</th>
            <th className="text-left p-2 font-light">Agente asignado actual</th>
            <th className="text-left p-2 font-light">Estados presentes</th>
            <th className="text-left p-2 font-light">Fecha Última Propuesta</th>
           </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() =>
                router.push(`/dashboard/comercial/propuestas/cuentas/${res.codigoCRM}`)
              }
            >
              <td className="p-2 border-b border-gray-200">
                <FolderSvg />
              </td>
              <td className="p-2 border-b border-gray-200">{res.nombreEmpresa}</td>
              <td className="p-2 border-b border-gray-200">{res.codigoCRM}</td>
              <td className="p-2 border-b border-gray-200">{res.agenteAsignado}</td>
              <td className="p-2 border-b border-gray-200">{res.estadosIncluidos.join(', ')}</td>
              <td className="p-2 border-b border-gray-200">{res.fechaUltimaPropuesta}</td>
             </tr>
          ))}
        </tbody>
      </table>

      {resultadosFiltrados.length === 0 && (
        <p className="mt-4 text-center text-gray-500">No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default TodasPropuestas;
