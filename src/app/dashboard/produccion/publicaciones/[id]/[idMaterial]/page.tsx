"use client";
import { useParams } from "next/navigation";
import React, { FC, useState } from "react";
import data from "@/app/contents/contenidosContents.json";
import BotonFlotante from "@/app/general_components/componentes_recurrentes/BotonFlotante";

interface ContenidoEnRevistaProps {}

const ContenidoEnRevista: FC<ContenidoEnRevistaProps> = () => {
  const params = useParams<{ id: string; idMaterial: string }>();
  const idContenidoURL = params.idMaterial;

  const contenido = data.find((item) => item.idContenido === idContenidoURL);

  if (!contenido) {
    return <div className="p-12 text-red-600">No se encontró el contenido</div>;
  }

  const estadosDisponibles = [
    "Pendiente de solicitar",
    "Entregado",
    "En revisión",
    "Pendiente",
    "En redacción",
    "Ya en revista",
  ];

  const estadoOriginal = contenido.estado;
  const [estado, setEstado] = useState(estadoOriginal);

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-12 text-gray-700">
        <h2 className="text-2xl font-semibold mb-6">
          Detalle del contenido ({contenido.idContenido})
        </h2>

        <div className="bg-white rounded shadow p-6 space-y-4 max-w-3xl">
          <div>
            <strong>Publicación:</strong> {contenido.idPublicacion}
          </div>
          <div>
            <strong>Empresa:</strong> {contenido.idEmpresa}
          </div>
          <div>
            <strong>Tipo de contenido:</strong> {contenido.tipoContenido}
          </div>
          <div>
            <strong>Especificaciones:</strong> {contenido.especificaciones}
          </div>
          <div>
            <strong>Agente:</strong> {contenido.idAgente}
          </div>
          <div>
            <strong>Deadline:</strong> {contenido.deadline}
          </div>
          <div>
            <strong>Estado:</strong>
            <select
              className="ml-2 border rounded px-2 py-1"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              {estadosDisponibles.map((op, idx) => (
                <option key={idx} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Botón flotante que aparece solo si hay cambios */}
      <BotonFlotante isContenidoEdited={estado !== estadoOriginal} />
    </>
  );
};

export default ContenidoEnRevista;
