import React, { FC } from 'react';

interface Pago {
  codigoOrden:string;
  facturaAsociada:string;
  fecha: string;
  importe: string;
  estado: string;
}

const datosPagos: Pago[] = [
  { codigoOrden:'C25.000.284-1/1', facturaAsociada:'525019', fecha: '01/08/2025', importe: '500€', estado: 'Pagado' },
  { codigoOrden:'C25.000.284-1/1', facturaAsociada:'525019', fecha: '01/09/2025', importe: '500€', estado: 'Pendiente' },
  { codigoOrden:'C25.000.284-1/1', facturaAsociada:'525019', fecha: '01/10/2025', importe: '500€', estado: 'Pendiente' },
];

const TablaDatosPago: FC = () => {
  return (
    <div className="space-y-6">
      {/* Tabla horizontal con encabezados */}
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Términos de pago</th>
            <th className="px-4 py-2">Base imponible</th>
            <th className="px-4 py-2">Impuesto</th>
            <th className="px-4 py-2">Precio total</th>
            <th className="px-4 py-2">Forma de Cobro</th>
            <th className="px-4 py-2">Cuenta de pago</th>
            <th className="px-4 py-2">Número de pagos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">A 90 días</td>
            <td className="px-4 py-2">1500€</td>
            <td className="px-4 py-2">21%</td>
            <td className="px-4 py-2">1815€</td>
            <td className="px-4 py-2">Transferencia</td>
            <td className="px-4 py-2">ES76 1234 5678 9012 3456 7890</td>
            <td className="px-4 py-2">3</td>
          </tr>
        </tbody>
      </table>

      {/* Pagos individuales en tabla aparte */}
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
            {datosPagos.map((pago, index) => (
          <tr key={index} className="bg-white text-gray-700">
                <th className="px-4 py-2">{pago.codigoOrden}</th>
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

export default TablaDatosPago;
