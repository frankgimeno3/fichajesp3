"use client";
import React, { FC, useState } from "react";
import MiddleNav from "../../../general_components/componentes_recurrentes/MiddleNav";
import TablaContratos from "../componentesadministracion/TablaContratos";
import contratosContents from "@/app/contents/contratosContents.json";
import { Contrato, ContratoResumen } from "./contratosTypes";

const Contratos: FC = () => {
  const [pestana, setPestana] = useState("campanasadministrativas");

  // Mapear JSON detallado a resumen
  const contratos: ContratoResumen[] = (contratosContents as Contrato[]).map(
    (c) => ({
      codigo: c.detallesContrato.Contrato,
      cliente: c.detallesContrato.cliente,
      agente: c.detallesContrato.agente,
      estado: c.detallesContrato.estado,
      fechaFirma: c.detallesContrato.fechaFirmaContrato,
      importe: c.detallesContrato.importeConIVA,
      campania: c.detallesContrato.campaniaAsociada,
    })
  );

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600 w-full">
      <MiddleNav tituloprincipal="Contratos" />
      <div className="bg-white min-h-screen p-12 text-gray-600 w-full">
        <h2 className="text-lg font-semibold mb-6">Todos los contratos</h2>
        <TablaContratos contratos={contratos} />
      </div>
    </div>
  );
};

export default Contratos;
