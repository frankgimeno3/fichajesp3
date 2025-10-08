"use client";
import React, { FC } from "react";
import MiddleNav from "../../../general_components/componentes_recurrentes/MiddleNav";
import TablaContratos from "../componentesadministracion/TablaContratos";
import contratosContents from "@/app/contents/contratosContents.json";
import { Contrato, ContratoResumen } from "./contratosTypes";

const Contratos: FC = () => {
   const contratos: ContratoResumen[] = (contratosContents as Contrato[]).map((c) => ({
    codigo: c.detalles_contrato.id_contrato,
    cliente: c.cuenta_contrato.id_contacto,  
    agente: c.detalles_contrato.id_agente_contrato,
    estado: c.detalles_contrato.estado_contrato,
    fechaFirma: c.detalles_contrato.fecha_firma_contrato,
    importe: c.importe_factura_con_iva.toFixed(2), 
    campania: c.detalles_contrato.id_campana_asociada,
  }));

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
