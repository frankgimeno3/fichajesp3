import React, { FC, useState } from 'react';

interface ContenidoFactura {
  nombreCompletoEmpresaEnFactura: string;
  direccionEnFactura: string;
  codigoPostal: string;
  estadoZona: string;
  Pais: string;
  vat: string;
}

// Datos mock iniciales
const datosTabla: ContenidoFactura = {
  nombreCompletoEmpresaEnFactura: 'Tecnologías Innovadoras S.A.',
  direccionEnFactura: 'Av. Reforma 123, Piso 5, Col. Juárez',
  codigoPostal: '06600',
  estadoZona: 'Ciudad de México',
  Pais: 'México',
  vat: 'MX1234567890',
};

const OtrosDatosEnFacturaProps: FC = () => {
  const [formData, setFormData] = useState<ContenidoFactura>(datosTabla);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
          <td className="px-4 py-2">
            <input
              type="text"
              name="nombreCompletoEmpresaEnFactura"
              value={formData.nombreCompletoEmpresaEnFactura}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="direccionEnFactura"
              value={formData.direccionEnFactura}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="estadoZona"
              value={formData.estadoZona}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="Pais"
              value={formData.Pais}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="text"
              name="vat"
              value={formData.vat}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnFacturaProps;
