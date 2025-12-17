import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { InterfazContrato, InterfazCuenta, InterfazContacto } from "@/app/interfaces/interfaces";

interface Props {
  contrato: InterfazContrato;
  cuentaSeleccionada?: InterfazCuenta;
  contactoSeleccionado?: InterfazContacto;
}

const TablaDatosEmpresa: FC<Props> = ({ contrato, cuentaSeleccionada, contactoSeleccionado }) => {
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
                onClick={() => router.push(`/dashboard/clientes/cuentas/${cuentaSeleccionada?.id_cuenta}`)}
              >
                {cuentaSeleccionada?.nombre_empresa || contrato.cuenta_contrato.id_cuenta_contrato}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{contrato.cuenta_contrato.id_cuenta_contrato}</td>
            <td className="px-4 py-2 flex-1/6">{contrato.cuenta_contrato.id_cuenta_contrato}</td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada?.pais_cuenta || "—"}</td>
            <td className="px-4 py-2 flex-1/6">
              <button
                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() =>
                  router.push(`/dashboard/clientes/contactos/${contrato.cuenta_contrato.id_contacto}`)
                }
              >
                {contactoSeleccionado?.nombre_completo_contacto || contrato.cuenta_contrato.id_contacto}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{contrato.cuenta_contrato.cargoContacto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosEmpresa;
