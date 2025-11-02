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

// Función auxiliar para convertir fechas DD/MM/YYYY → YYYY-MM-DD
const formatearFechaAISO = (fecha: string): string => {
  if (!fecha) return "";
  // Si ya está en formato ISO, la devolvemos tal cual
  if (fecha.includes("-")) return fecha;
  const [dia, mes, anio] = fecha.split("/");
  if (!dia || !mes || !anio) return "";
  return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
};

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
        fechaEnvio: formatearFechaAISO(propuesta_seleccionada.detalles_propuesta.fecha_envio_propuesta),
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
    <table className="w-full border shadow-xs border-gray-100 text-center text-sm font-light">
      <thead>
        <tr className="bg-blue-950/80 text-white">
          <th className="px-4 py-2">Nombre de la propuesta</th>
          <th className="px-4 py-2">Fecha de envío al cliente</th>
           <th className="px-4 py-2">Agente ofertante</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">
            <input
              type="text"
              readOnly
              value={formData.codigoPropuesta}
              className="border border-gray-300 rounded px-2 py-1 w-full bg-gray-100 cursor-not-allowed"
            />
          </td>
          <td className="px-4 py-2">
            <input
              type="date"
              name="fechaEnvio"
              value={formData.fechaEnvio}
              onChange={handleChange}
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
  );
};

export default TablaDatosGenerales;
