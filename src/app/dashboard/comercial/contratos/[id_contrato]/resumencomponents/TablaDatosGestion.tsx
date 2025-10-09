import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface TablaDatosGestionProps {
  contrato: any;
}

const TablaDatosGestion: FC<TablaDatosGestionProps> = ({ contrato }) => {
  const router = useRouter();
  const { cuenta_contrato } = contrato;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Gestora de la campaña</th>
            <th className="px-4 py-2">Código CRM</th>
            <th className="px-4 py-2">Código Edisoft</th>
            <th className="px-4 py-2">País</th>
            <th className="px-4 py-2">Contacto de gestión</th>
            <th className="px-4 py-2">Cargo del contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push("/dashboard/clientes/ficha")}
              >
                Empresa {cuenta_contrato.id_cuenta_contrato}
              </button>
            </td>
            <td className="px-4 py-2">{cuenta_contrato.id_cuenta_contrato}</td>
            <td className="px-4 py-2">{cuenta_contrato.id_cuenta_contrato}</td>
            <td className="px-4 py-2">N/A</td>
            <td className="px-4 py-2">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() =>
                  router.push(`/dashboard/clientes/contactos/${cuenta_contrato.id_contacto}`)
                }
              >
                {cuenta_contrato.id_contacto}
              </button>
            </td>
            <td className="px-4 py-2">{cuenta_contrato.cargoContacto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosGestion;
