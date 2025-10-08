"use client";

import React, { FC } from "react";
import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";
import TablaDatosGenerales from "../contratoComponents/TablaDatosGenerales";
import TablaDatosEmpresa from "../contratoComponents/TablaDatosEmpresa";
import TablaContenidoCampaña from "../contratoComponents/TablaContenidoCampana";
import contratosContents from "@/app/contents/contratosContents.json";
import { Contrato } from "../contratosTypes";

interface PageProps {
  params: { id: string };
}

const Contacto: FC<PageProps> = ({ params }) => {
  // ✅ Corrección 1: en tu JSON el id del contrato está en detalles_contrato.id_contrato
  const contrato: Contrato | undefined = (contratosContents as Contrato[]).find(
    (c) => c.detalles_contrato.id_contrato === params.id
  );

  if (!contrato) {
    return <p className="p-8">Contrato no encontrado</p>;
  }

  // ✅ Corrección 2: tu JSON no tiene una propiedad "empresa"
  // pero puedes derivarla de cuenta_contrato si quieres mostrarla
  const empresa = {
    nombreEmpresa: contrato.cuenta_contrato.id_cuenta_contrato, // o lo que uses en tu sistema
    codigoCrm: contrato.id_contacto,
    codigoEdisoft: contrato.cuenta_contrato.id_contacto,
    pais: "España", // si no hay campo, puedes dejarlo fijo o vacío
    nombreContacto: contrato.cuenta_contrato.id_contacto,
    cargoContacto: contrato.cuenta_contrato.cargoContacto,
  };

  // ✅ Corrección 3: la propiedad del JSON es contenido_campana, no contenidoCampaña
  const contenidos = contrato.contenido_campana;

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600">
      <MiddleNav tituloprincipal="Detalle del Contrato" />

      <div className="bg-white min-h-screen p-8 text-gray-600 w-full">
        <h2 className="text-lg font-semibold mb-4">
          Resumen del contrato nº {contrato.detalles_contrato.id_contrato}
        </h2>

        <p className="font-bold text-gray-500">Datos generales:</p>
        <TablaDatosGenerales datosGenerales={contrato.datosGenerales} />

        <p className="font-bold text-gray-500 mt-6">Datos de la empresa:</p>
        <TablaDatosEmpresa empresa={empresa} />

        <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
        <TablaContenidoCampaña contenidos={contenidos} />
      </div>
    </div>
  );
};

export default Contacto;
