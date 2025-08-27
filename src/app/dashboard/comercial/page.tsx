"use client"
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import MiddleNav from "../../general_components/MiddleNav";
import Contratos from "./contratos/Contratos";
import Seguimientos from "./Seguimientos";

interface ComercialProps {}

const Comercial: FC<ComercialProps> = () => {
  const [agenteActual] = useState("usr_25_00008");
  const router = useRouter();

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Seguimientos `} />

      <div className="bg-white min-h-screen p-12 text-gray-600">
        <div className="flex flex-row items-center justify-between pb-6">
          <button
            className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() => router.push("/dashboard/comercial/propuestas")}
          >
            <p>Ir al seguimiento de propuestas</p>
          </button>
        </div>

        <Seguimientos agenteActual={agenteActual} />

        <Contratos />
      </div>
    </div>
  );
};

export default Comercial;
