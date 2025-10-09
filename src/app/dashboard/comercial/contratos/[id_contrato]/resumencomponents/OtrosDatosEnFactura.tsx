import React, { FC } from "react";

interface OtrosDatosEnFacturaProps {
  contrato: any;
}

const OtrosDatosEnFacturaProps: FC<OtrosDatosEnFacturaProps> = ({ contrato }) => {
  const {
    detalles_contrato,
    descuento_final_contrato,
    importe_total_BI_contrato,
    iva_aplicable,
    importe_factura_con_iva,
  } = contrato;

  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Forma de cobro</th>
          <th className="px-4 py-2">Descuento final (€)</th>
          <th className="px-4 py-2">Importe total (BI)</th>
          <th className="px-4 py-2">IVA aplicable</th>
          <th className="px-4 py-2">Importe factura c/IVA</th>
          <th className="px-4 py-2">Fecha factura</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{detalles_contrato.forma_cobro_factura}</td>
          <td className="px-4 py-2">{descuento_final_contrato} €</td>
          <td className="px-4 py-2">{importe_total_BI_contrato} €</td>
          <td className="px-4 py-2">{iva_aplicable ? "Sí" : "No"}</td>
          <td className="px-4 py-2">{importe_factura_con_iva} €</td>
          <td className="px-4 py-2">{detalles_contrato.fecha_factura}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnFacturaProps;
