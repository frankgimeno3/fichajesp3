// /dashboard/comercial/propuestas/[id_propuesta]/editar/page.tsx
"use client";
import React, { FC } from "react";
import { useRouter, useParams } from "next/navigation";

import EditarDatosGenerales from "./editarProp/editarDatosGenerales";
import EditarDatosAnunciante from "./editarProp/editarDatosAnunciante";
import EditarContenidoPropuesta from "./editarProp/editarContenidoPropuesta";
import EditarOtrosDatosEnFactura from "./editarProp/editarOtrosDatosEnFactura";
import EditarDatosCobro from "./editarProp/editarDatosCobro";

import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";

const EditarPropuesta: FC = () => {
  const router = useRouter();
  const params = useParams(); 
  const id_propuesta_param = params?.id_propuesta as string | undefined;

   const propuestasData = propuestas as InterfazPropuesta[];

   const propuesta_seleccionada = propuestasData.find(
    (p) => p.detalles_propuesta.id_propuesta === id_propuesta_param
  );

   if (!propuesta_seleccionada) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 p-12">
        <h2 className="text-xl font-semibold mb-4">Propuesta no encontrada</h2>
        <p className="mb-6">No se ha encontrado ninguna propuesta con id: <strong>{id_propuesta_param}</strong></p>
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
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 p-12">
      <div className="flex flex-row justify-between">
        <h2 className="text-lg font-semibold mb-4">
          <span className="pr-3 font-black text-blue-950">Editando</span>
          propuesta con Código {propuesta_seleccionada.detalles_propuesta.id_propuesta}
        </h2>

        <div className="flex flex-row gap-5">
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() =>
              router.push(`/dashboard/comercial/propuestas/${propuesta_seleccionada.detalles_propuesta.id_propuesta}`)
            }
          >
            Guardar cambios
          </button>
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() =>
              router.push(`/dashboard/comercial/propuestas/${propuesta_seleccionada.detalles_propuesta.id_propuesta}`)
            }
          >
            Cancelar
          </button>
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() => router.push(`/dashboard/comercial/propuestas`)}
          >
            Guardar como nueva
          </button>
        </div>
      </div>

      <p className="font-bold text-gray-500">Datos generales:</p>
      <EditarDatosGenerales codigoPropuesta={propuesta_seleccionada.detalles_propuesta.id_propuesta} />

      <div className="flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12 ">
        <div className="flex flex-row items-center justify-between bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900">
          <p className="font-bold">Datos de contacto</p>
        </div>
        <div className="flex flex-row px-12 bg-gray-100 py-5 gap-2 ">
          <div className="flex flex-col w-full">
             <EditarDatosAnunciante empresaAnunciante={propuesta_seleccionada.cuenta_propuesta.id_cuenta_propuesta} />
          </div>
        </div>
      </div>

      <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
      <EditarContenidoPropuesta codigoPropuesta={propuesta_seleccionada.detalles_propuesta.id_propuesta} />

      <p className="font-bold text-gray-500 mt-6">Datos para facturación:</p>
      <EditarOtrosDatosEnFactura codigoPropuesta={propuesta_seleccionada.detalles_propuesta.id_propuesta}    />

      <p className="font-bold text-gray-500 mt-6">Forma de cobro</p>
      <EditarDatosCobro codigoPropuesta={propuesta_seleccionada.detalles_propuesta.id_propuesta} />

      <p className="font-bold text-gray-500 mt-6">Comentarios adicionales:</p>
      <textarea className="bg-white rounded text-gray-500 p-5 w-full min-h-[120px]">
        Contenido aquí, Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta et nemo
        delectus atque at unde, cupiditate fugit quisquam. A ducimus qui cupiditate doloribus nulla maxime
        obcaecati illum repellendus voluptate?
      </textarea>
    </div>
  );
};

export default EditarPropuesta;
