import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface Empresa {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
  nombreContacto: string;
  cargoContacto: string;
}

interface Props {
  empresa: Empresa;
}

const TablaDatosEmpresa: FC<Props> = ({ empresa }) => {
  const router = useRouter();

  return (
    <div className="overflow-x-auto ">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2 flex-1/6">Contratante publicidad</th>
            <th className="px-4 py-2 flex-1/6">Código CRM</th>
            <th className="px-4 py-2 flex-1/6">Código Edisoft</th>
            <th className="px-4 py-2 flex-1/6">País</th>
            <th className="px-4 py-2 flex-1/6">Contacto de gestión</th>
            <th className="px-4 py-2 flex-1/6">Cargo del contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2 flex-1/6">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push("/dashboard/clientes/ficha")}
              >
                {empresa.nombreEmpresa}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{empresa.codigoCrm}</td>
            <td className="px-4 py-2 flex-1/6">{empresa.codigoEdisoft}</td>
            <td className="px-4 py-2 flex-1/6">{empresa.pais}</td>
            <td className="px-4 py-2 flex-1/6">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() =>
                  router.push("/dashboard/clientes/contactos/contacto")
                }
              >
                {empresa.nombreContacto}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{empresa.cargoContacto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosEmpresa;
