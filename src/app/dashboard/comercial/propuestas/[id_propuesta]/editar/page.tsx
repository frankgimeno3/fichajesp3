
"use client";

import React, { FC, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import EditarDatosGenerales from "./editarProp/editarDatosGenerales";
import EditarDatosAnunciante from "./editarProp/editarDatosAnunciante";
import EditarContenidoPropuesta from "./editarProp/editarContenidoPropuesta";
import EditarOtrosDatosEnFactura from "./editarProp/editarOtrosDatosEnFactura";
import EditarDatosCobro from "./editarProp/editarDatosCobro";

import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";
import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";

const EditarPropuesta: FC = () => {
  const router = useRouter();
  const parametros = useParams();
  const idPropuestaParametro = parametros?.id_propuesta as string | undefined;

  const datosPropuestas = propuestas as InterfazPropuesta[];

  const propuestaSeleccionada = datosPropuestas.find(
    (propuesta) => propuesta.detalles_propuesta.id_propuesta === idPropuestaParametro
  );

  if (!propuestaSeleccionada) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 p-12">
        <MiddleNav tituloprincipal={`Editor de propuestas`} />
        <h2 className="text-xl font-semibold mb-4">Propuesta no encontrada</h2>
        <p className="mb-6">
          No se ha encontrado ninguna propuesta con el identificador:{" "}
          <strong>{idPropuestaParametro}</strong>
        </p>
        <div className="flex gap-3">
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl"
            onClick={() => router.push(`/dashboard/comercial/propuestas`)}
          >
            Volver a la lista de propuestas
          </button>
        </div>
      </div>
    );
  }

  const [comentariosAdicionales, setComentariosAdicionales] = useState(
    propuestaSeleccionada.comentarios_adicionales_propuesta || ""
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600  ">
      <MiddleNav tituloprincipal={`Editando propuesta con Código ${propuestaSeleccionada.detalles_propuesta.id_propuesta}`} />

      <div className="flex flex-col p-12">
        <div className="flex flex-row justify-end text-sm">
          <div className="flex flex-row gap-3">
            <button
              className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() =>
                router.push(
                  `/dashboard/comercial/propuestas/${propuestaSeleccionada.detalles_propuesta.id_propuesta}`
                )
              }
            >
              Guardar cambios
            </button>

            <button
              className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() =>
                router.push(
                  `/dashboard/comercial/propuestas/${propuestaSeleccionada.detalles_propuesta.id_propuesta}`
                )
              }
            >
              Cancelar
            </button>

            <button
              className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() => router.push(`/dashboard/comercial/propuestas`)}
            >
              Guardar como nueva
            </button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-lg">

          <p className="font-bold text-gray-500">Datos generales:</p>
          <EditarDatosGenerales
            codigoPropuesta={propuestaSeleccionada.detalles_propuesta.id_propuesta}
          />

          <p className="font-bold text-gray-500">Datos de contacto:</p>
          <EditarDatosAnunciante
            empresaAnunciante={propuestaSeleccionada.cuenta_propuesta.id_cuenta_propuesta}
            contactoPropuesta={propuestaSeleccionada.cuenta_propuesta.id_contacto}
          />

          <p className="font-bold text-gray-500 mt-6">Contenido en propuesta:</p>
          <EditarContenidoPropuesta
            codigoPropuesta={propuestaSeleccionada.detalles_propuesta.id_propuesta}
          />

          <p className="font-bold text-gray-500 mt-6">Datos para facturación:</p>
          <EditarOtrosDatosEnFactura
            codigoPropuesta={propuestaSeleccionada.detalles_propuesta.id_propuesta}
          />

          <p className="font-bold text-gray-500 mt-6">Forma de cobro:</p>
          <EditarDatosCobro
            codigoPropuesta={propuestaSeleccionada.detalles_propuesta.id_propuesta}
          />

          <p className="font-bold text-gray-500 mt-6">Comentarios adicionales:</p>
          <textarea
            className="bg-white rounded text-gray-500 p-5 w-full min-h-[120px]"
            value={comentariosAdicionales}
            onChange={(evento) => setComentariosAdicionales(evento.target.value)}
          />
        </div>
      </div>

    </div>
  );
};

export default EditarPropuesta;
