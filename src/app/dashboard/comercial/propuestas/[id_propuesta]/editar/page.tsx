
"use client";

import React, { FC, useEffect, useState } from "react";
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
  const [importe_antes_descuento, set_importe_antes_descuento] = useState(0)



  const datosPropuestas = propuestas as InterfazPropuesta[];

  const propuestaSeleccionada = datosPropuestas.find(
    (propuesta) => propuesta.id_propuesta === idPropuestaParametro
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

 

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600  ">
      <MiddleNav tituloprincipal={`Editando propuesta con Código ${propuestaSeleccionada.id_propuesta}`} />

      <div className="flex flex-col px-12">
           <div className="flex flex-row justify-end py-5">
          <div className="flex flex-row justify-end text-right items-right gap-5 text-sm">
            <button
              className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() =>
                router.push(
                  `/dashboard/comercial/propuestas/${propuestaSeleccionada.id_propuesta}`
                )
              }
            >
              Guardar cambios
            </button>

            <button
              className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
              onClick={() =>
                router.push(
                  `/dashboard/comercial/propuestas/${propuestaSeleccionada.id_propuesta}`
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

          <p className="font-bold mb-1 text-gray-500">Datos generales:</p>
          <EditarDatosGenerales
            codigoPropuesta={propuestaSeleccionada.id_propuesta}
          />

          <p className="font-bold mb-1 text-gray-500 mt-6">Datos de contacto:</p>
          <EditarDatosAnunciante
            empresaAnunciante={propuestaSeleccionada.cuenta_propuesta.id_cuenta_propuesta}
            contactoPropuesta={propuestaSeleccionada.cuenta_propuesta.id_contacto}
          />

          <p className="font-bold mb-1 text-gray-500 mt-6">Contenido en propuesta:</p>
          <EditarContenidoPropuesta
            codigoPropuesta={propuestaSeleccionada.id_propuesta}
            importe_antes_descuento={importe_antes_descuento}
            set_importe_antes_descuento={set_importe_antes_descuento}
          />

          <p className="font-bold mb-1 text-gray-500 mt-6">Datos para facturación:</p>
          <EditarOtrosDatosEnFactura
            codigoPropuesta={propuestaSeleccionada.id_propuesta}
            importe_antes_descuento={importe_antes_descuento}
          />

          <p className="font-bold mb-1 text-gray-500 mt-6">Forma de cobro:</p>
          <EditarDatosCobro
            codigoPropuesta={propuestaSeleccionada.id_propuesta}
          />
        </div>
      </div>

    </div>
  );
};

export default EditarPropuesta;
