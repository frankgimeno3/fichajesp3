"use client";
import React, { FC, useState, useMemo } from "react";
import { useParams } from "next/navigation";

import TablaContenidoCampaña from "./resumencomponents/TablaContenidoCampaña";
import TablaDatosCobro from "./resumencomponents/TablaDatosCobro";
import TablaDatosGenerales from "./resumencomponents/TablaDatosGenerales";
import TablaDatosAnunciante from "./resumencomponents/TablaDatosAnunciante";
import TablaDatosGestion from "./resumencomponents/TablaDatosGestion";
import OtrosDatosEnFacturaProps from "./resumencomponents/OtrosDatosEnFactura";
import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";

import contratosContents from "@/app/contents/contratosContents.json";

const ResumenContrato: FC = () => {
  const params = useParams();
  const id_contrato = params?.id_contrato as string;

  const [isDatosContactoShown, setIsDatosContactoShown] = useState(false);
  const handleToggleDatosContactoShown = () =>
    setIsDatosContactoShown((prev) => !prev);

   const contrato = useMemo(
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

  const { detalles_contrato, cuenta_contrato, datosGenerales, contenido_campana } = contrato;

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 p-12">
      <MiddleNav tituloprincipal={`Contrato ${detalles_contrato.id_contrato}`} />

      <h2 className="text-lg font-semibold mb-4">
        Resumen del contrato nº {detalles_contrato.id_contrato}
      </h2>

       <p className="font-bold text-gray-500">Datos generales:</p>
      <TablaDatosGenerales datosGenerales={datosGenerales} />

       <div className="flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12">
        <div
          className="flex flex-row items-center justify-between bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
          onClick={handleToggleDatosContactoShown}
        >
          <p className="font-bold">Datos de contacto</p>
          <div className="ml-2">
            {isDatosContactoShown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>

        {isDatosContactoShown && (
          <div className="px-12 bg-gray-100 pb-12">
            <p className="font-bold text-gray-500 mt-6">
              Datos de la empresa anunciante:
            </p>
            <TablaDatosAnunciante contrato={contrato} />

            <p className="font-bold text-gray-500 mt-6">
              Datos de gestión publicitaria:
            </p>
            <TablaDatosGestion contrato={contrato} />
          </div>
        )}
      </div>

       <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
      <TablaContenidoCampaña contenido_campana={contenido_campana} />

       <p className="font-bold text-gray-500 mt-6">Datos de pago:</p>
      <TablaDatosCobro detalles_contrato={detalles_contrato} />

       <p className="font-bold text-gray-500 mt-6">Otros datos en factura:</p>
      <OtrosDatosEnFacturaProps contrato={contrato} />
    </div>
  );
};

export default ResumenContrato;
