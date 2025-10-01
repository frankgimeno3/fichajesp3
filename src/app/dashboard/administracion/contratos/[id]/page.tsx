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
  const contrato: Contrato | undefined = (contratosContents as Contrato[]).find(
    (c) => c.detallesContrato.Contrato === params.id
  );

  if (!contrato) {
    return <p className="p-8">Contrato no encontrado</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600">
      <MiddleNav tituloprincipal="Detalle del Contrato" />
      <div className="bg-white min-h-screen p-8 text-gray-600 w-full">
        <h2 className="text-lg font-semibold mb-4">
          Resumen del contrato nº {contrato.detallesContrato.Contrato}
        </h2>

        <p className="font-bold text-gray-500">Datos generales:</p>
        <TablaDatosGenerales datosGenerales={contrato.datosGenerales} />

        <p className="font-bold text-gray-500 mt-6">Datos de la empresa:</p>
        <TablaDatosEmpresa empresa={contrato.empresa} />

        <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
        <TablaContenidoCampaña contenidos={contrato.contenidoCampaña} />
      </div>
    </div>
  );
};

export default Contacto;
