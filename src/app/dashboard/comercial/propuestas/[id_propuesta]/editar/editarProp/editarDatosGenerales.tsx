import React, { FC, useState, useEffect } from "react";
import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";

interface TablaDatosGeneralesProps {
  codigoPropuesta: string;
}

interface DatosGenerales {
  codigoPropuesta: string;
  fechaEnvio: string;
  fechaValidez: string;
  agente: string;
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({ codigoPropuesta }) => {
  const propuestasData = propuestas as InterfazPropuesta[];

   const propuesta_seleccionada = propuestasData.find(
    (p) => p.detalles_propuesta.id_propuesta === codigoPropuesta
  );

   const [formData, setFormData] = useState<DatosGenerales>({
    codigoPropuesta: "",
    fechaEnvio: "",
    fechaValidez: "",
    agente: "",
  });

   useEffect(() => {
    if (propuesta_seleccionada) {
      setFormData({
        codigoPropuesta: propuesta_seleccionada.detalles_propuesta.id_propuesta,
        fechaEnvio: propuesta_seleccionada.detalles_propuesta.fecha_envio_propuesta, 
        fechaValidez: "",
        agente: propuesta_seleccionada.detalles_propuesta.id_agente_propuesta,
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
            <th className="px-4 py-2">Nombre de la propuesta</th>
            <th className="px-4 py-2">Fecha de envío al cliente</th>
            <th className="px-4 py-2">Fecha máxima de validez</th>
            <th className="px-4 py-2">Agente ofertante</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <input
                type="text"
                name="codigoPropuesta"
                value={formData.codigoPropuesta}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="fechaEnvio"
                value={formData.fechaEnvio}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="fechaValidez"
                value={formData.fechaValidez}
                onChange={handleChange}
                placeholder="Ej: 30/01/2026"
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </td>
            <td className="px-4 py-2">
              <input
                type="text"
                name="agente"
                value={formData.agente}
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

export default TablaDatosGenerales;
