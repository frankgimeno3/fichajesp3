import React, { FC } from "react";

interface Recibo {
  num_recibo: string;
  numRemesa: string;
}

interface DetallesContrato {
  id_contrato: string;
  fecha_cobro_prevista_contrato: string;
  fecha_cobro_factura_contrato: string;
  estado_contrato: string;
  array_recibos: Recibo[];
  forma_cobro_factura: string;
  importe_factura_con_iva?: number;
  importe_total_BI_contrato?: number;
  iva_aplicable?: boolean;
}

interface TablaDatosCobroProps {
  detalles_contrato: DetallesContrato;
}

const TablaDatosCobro: FC<TablaDatosCobroProps> = ({ detalles_contrato }) => {
  const pagos = detalles_contrato.array_recibos.map((recibo, index) => ({
    codigoOrden: detalles_contrato.id_contrato,
    facturaAsociada: detalles_contrato.id_contrato,
    fecha: detalles_contrato.fecha_cobro_prevista_contrato,
    importe: `${(
      (detalles_contrato.importe_factura_con_iva ?? 0) /
      detalles_contrato.array_recibos.length
    ).toFixed(2)}€`,
    estado: detalles_contrato.estado_contrato,
  }));

  return (
    <div className="space-y-6">
      {/* Tabla resumen de cobro */}
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Términos de pago</th>
            <th className="px-4 py-2">Base imponible</th>
            <th className="px-4 py-2">Impuesto</th>
            <th className="px-4 py-2">Precio total</th>
            <th className="px-4 py-2">Forma de Cobro</th>
            <th className="px-4 py-2">Número de pagos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">A 90 días</td>
            <td className="px-4 py-2">
              {detalles_contrato.importe_total_BI_contrato ?? "—"}€
            </td>
            <td className="px-4 py-2">
              {detalles_contrato.iva_aplicable ? "21%" : "0%"}
            </td>
            <td className="px-4 py-2">
              {detalles_contrato.importe_factura_con_iva ?? "—"}€
            </td>
            <td className="px-4 py-2">
              {detalles_contrato.forma_cobro_factura}
            </td>
            <td className="px-4 py-2">
              {detalles_contrato.array_recibos?.length || 1}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagos individuales */}
      <div>
        <h3 className="font-semibold mb-2">Pagos programados</h3>
        <table className="table-auto border-collapse w-full text-left">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="px-4 py-2">Código de orden</th>
              <th className="px-4 py-2">Fecha cobro prevista</th>
              <th className="px-4 py-2">Factura asociada</th>
              <th className="px-4 py-2">Importe</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((pago, index) => (
              <tr key={index} className="bg-white text-gray-700">
                <td className="px-4 py-2">{pago.codigoOrden}</td>
                <td className="px-4 py-2">{pago.fecha}</td>
                <td className="px-4 py-2">{pago.facturaAsociada}</td>
                <td className="px-4 py-2">{pago.importe}</td>
                <td className="px-4 py-2">{pago.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaDatosCobro;
