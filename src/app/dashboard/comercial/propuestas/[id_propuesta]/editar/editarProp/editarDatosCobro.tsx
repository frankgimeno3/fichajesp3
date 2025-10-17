import React, { FC, useState, useEffect } from 'react';
import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from '@/app/interfaces/interfaces';


interface DatosCobroPropuestaProps {
  codigoPropuesta: string;
}

const DatosCobroPropuesta: FC <DatosCobroPropuestaProps> = ({codigoPropuesta}) => {
  const [formData, setFormData] = useState({
    numeroCobros: '3',
    baseImponible: '1500', 
    impuesto: '21', 
    precioTotal: '0', 
    formaCobro: 'Transferencia',
    cuentaCobro: 'ES76 1234 5678 9012 3456 7890',
  });
  
const propuestasData = propuestas as InterfazPropuesta[];

   const propuesta_seleccionada = propuestasData.find(
    (p) => p.detalles_propuesta.id_propuesta === codigoPropuesta
  );

  useEffect(() => {
    const base = parseFloat(formData.baseImponible) || 0;
    const impuestoNum = parseInt(formData.impuesto) || 0;
    const factor = impuestoNum === 21 ? 1.21 : 1;
    const total = base * factor;
    setFormData((prev) => ({ ...prev, precioTotal: total.toFixed(2) }));
  }, [formData.baseImponible, formData.impuesto]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Número de cobros</th>
            <th className="px-4 py-2">Base imponible</th>
            <th className="px-4 py-2">Impuesto</th>
            <th className="px-4 py-2">Precio total</th>
            <th className="px-4 py-2">Forma de pago</th>
            <th className="px-4 py-2">Cuenta de Cobro</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <input
                type="number"
                name="numeroCobros"
                value={formData.numeroCobros}
                onChange={handleChange}
                min={1}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="number"
                name="baseImponible"
                value={formData.baseImponible}
                onChange={handleChange}
                min={0}
                step="0.01"
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <select
                name="impuesto"
                value={formData.impuesto}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="21">21%</option>
                <option value="0">0%</option>
              </select>
            </td>
            <td className="px-4 py-2">
              <input
                type="number"
                name="precioTotal"
                value={formData.precioTotal}
                readOnly
                className="border border-gray-300 rounded px-2 py-1 w-full bg-gray-100"
              />
            </td>
            <td className="px-4 py-2">
              <select
                name="formaCobro"
                value={formData.formaCobro}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              >
                <option value="Transferencia">Transferencia</option>
                <option value="Recibo domiciliado">Recibo domiciliado</option>
              </select>
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="cuentaCobro"
                value={formData.cuentaCobro}
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

export default DatosCobroPropuesta;
