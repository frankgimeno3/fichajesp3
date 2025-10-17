import React, { FC, useState, useEffect } from "react";
import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";

interface ContenidoFactura {
  nombreCompletoEmpresaEnFactura: string;
  direccionEnFactura: string;
  codigoPostal: string;
  estadoZona: string;
  pais: string;
  vat: string;
}

interface OtrosDatosEnFacturaProps {
  codigoPropuesta: string;
}

const OtrosDatosEnFactura: FC<OtrosDatosEnFacturaProps> = ({ codigoPropuesta }) => {
  const propuestasData = propuestas as InterfazPropuesta[];

  const propuesta_seleccionada = propuestasData.find(
    (p) => p.detalles_propuesta.id_propuesta === codigoPropuesta
  );

   const [formData, setFormData] = useState<ContenidoFactura>({
    nombreCompletoEmpresaEnFactura: "",
    direccionEnFactura: "",
    codigoPostal: "",
    estadoZona: "",
    pais: "",
    vat: "",
  });
 
  useEffect(() => {
    if (propuesta_seleccionada) {
           setFormData({
        nombreCompletoEmpresaEnFactura: propuesta_seleccionada.cuenta_propuesta.id_cuenta_propuesta || "",
        direccionEnFactura: "",
        codigoPostal: "",
        estadoZona: "",
        pais: "",
        vat: "",
      });
    }
  }, [propuesta_seleccionada]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!propuesta_seleccionada) {
    return <div>No se encontró la propuesta con código: {codigoPropuesta}</div>;
  }

  return (
    <div className="overflow-x-auto">
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
                name="pais"
                value={formData.pais}
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
    </div>
  );
};

export default OtrosDatosEnFactura;
