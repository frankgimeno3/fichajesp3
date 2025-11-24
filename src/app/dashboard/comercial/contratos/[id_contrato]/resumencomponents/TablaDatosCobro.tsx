import { InterfazContrato } from "@/app/interfaces/interfaces";
import React, { FC } from "react";
 
interface TablaDatosCobroProps {
  contrato: InterfazContrato;
}

const TablaDatosCobro: FC<TablaDatosCobroProps> = ({ contrato }) => {

  const detalles_contrato = contrato.detalles_contrato

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
   );
};

export default TablaDatosCobro;
