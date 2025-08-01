import React, { FC } from 'react';

interface ContenidoFactura {
  nombreCompletoEmpresaEnFactura: string;
  direccionEnFactura: string;
  codigoPostal: string;
  estadoZona: string;
  Pais: string;
  vat: string;
}

// Datos mock
const datosTabla: ContenidoFactura = {
  nombreCompletoEmpresaEnFactura: 'Tecnologías Innovadoras S.A.',
  direccionEnFactura: 'Av. Reforma 123, Piso 5, Col. Juárez',
  codigoPostal: '06600',
  estadoZona: 'Ciudad de México',
  Pais: 'México',
  vat: 'MX1234567890'
};

const OtrosDatosEnFacturaProps: FC = () => {
  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">Nombre en factura</th>
          <th className="px-4 py-2">Dirección en factura</th>
          <th className="px-4 py-2">Código Postal</th>
          <th className="px-4 py-2">Estado/Zona</th>
          <th className="px-4 py-2">País</th>
          <th className="px-4 py-2">VAT</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{datosTabla.nombreCompletoEmpresaEnFactura}</td>
          <td className="px-4 py-2">{datosTabla.direccionEnFactura}</td>
          <td className="px-4 py-2">{datosTabla.codigoPostal}</td>
          <td className="px-4 py-2">{datosTabla.estadoZona}</td>
          <td className="px-4 py-2">{datosTabla.Pais}</td>
          <td className="px-4 py-2">{datosTabla.vat}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnFacturaProps;
