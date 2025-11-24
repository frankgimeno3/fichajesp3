"use client";
import React, { FC, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import TablaContenidoCampaña from "./resumencomponents/TablaContenidoCampaña";
import TablaDatosCobro from "./resumencomponents/TablaDatosCobro";
import TablaDatosGenerales from "./resumencomponents/TablaDatosGenerales";
import TablaDatosEmpresa from "./resumencomponents/TablaDatosEmpresa";
import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";
import contratosContents from "@/app/contents/contratosContents.json";
import { InterfazContrato } from "@/app/interfaces/interfaces";

const ResumenContrato: FC = () => {
  const params = useParams();
  const id_contrato = params?.id_contrato as string;

  const contrato = useMemo<InterfazContrato | undefined>(
    () =>
      contratosContents.find(
        (item) => item.detalles_contrato.id_contrato === id_contrato
      ),
    [id_contrato]
  );

  if (!contrato) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-gray-600 p-12">
        <h2 className="text-xl font-semibold text-red-600">
          No se encontró el contrato con ID: {id_contrato}
        </h2>
      </div>
    );
  }

  const { detalles_contrato } = contrato;

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600">
      <MiddleNav
        tituloprincipal={`Resumen del contrato nº ${detalles_contrato.id_contrato}`}
      />
      <div className="p-12">
        <p className="font-bold text-gray-500">Datos generales:</p>
        <TablaDatosGenerales contrato={contrato} />

        <p className="font-bold text-gray-500 mt-6">Datos de la empresa:</p>
        <TablaDatosEmpresa contrato={contrato} />

        <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
        <TablaContenidoCampaña contrato={contrato} />

        <p className="font-bold text-gray-500 mt-6">Pagos programados:</p>
        <TablaDatosCobro contrato={contrato} />
      </div>
    </div>
  );
};

export default ResumenContrato;
