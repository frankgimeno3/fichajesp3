"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import MiddleNav from "../../../general_components/componentes_recurrentes/MiddleNav";
import TablaContratos from "../componentesadministracion/TablaContratos";

interface ContratosProps {}

const Contratos: FC<ContratosProps> = ({}) => {
  const [pestana, setPestana] = useState("campanasadministrativas");

  // 🔹 Lista de contratos (mock / podrías cargarlos desde la API)
  const contratos = [
    {
      codigo: "ORD-2025-001",
      cliente: "Empresa Ejemplo S.A.",
      agente: "Juan Pérez",
      estado: "Pendiente",
      fechaFirma: "01/09/2025",
      importe: "12.500 €",
      campania: "Campaña Otoño 2025",
    },
    {
      codigo: "ORD-2025-002",
      cliente: "Tech Solutions SL",
      agente: "María López",
      estado: "Pagado",
      fechaFirma: "05/09/2025",
      importe: "8.300 €",
      campania: "Campaña Otoño 2025",
    },
    {
      codigo: "ORD-2025-003",
      cliente: "Constructora Global",
      agente: "Carlos Ruiz",
      estado: "En revisión",
      fechaFirma: "10/09/2025",
      importe: "15.000 €",
      campania: "Campaña Invierno 2025",
    },
  ];

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
