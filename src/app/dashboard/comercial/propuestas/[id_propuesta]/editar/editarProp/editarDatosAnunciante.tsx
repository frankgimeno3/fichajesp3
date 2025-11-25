"use client";

import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import cuentas from "@/app/contents/cuentasContents.json";
import contactos from "@/app/contents/contactsContents.json";
import { InterfazContacto } from "@/app/interfaces/interfaces";
import ChangeContactModal from "./modals/ChangeContactModal";

interface EditarDatosAnuncianteProps {
  empresaAnunciante: string;
  contactoPropuesta: string;
}

const EditarDatosAnunciante: FC<EditarDatosAnuncianteProps> = ({
  empresaAnunciante,
  contactoPropuesta,
}) => {
  const router = useRouter();

  const cuentaSeleccionada = cuentas.find(
    (c) => c.id_cuenta === empresaAnunciante
  );
  const [contactoActual, setContactoActual] = useState<InterfazContacto | null>(
    contactos.find((c) => c.id_contacto === contactoPropuesta) as InterfazContacto
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!cuentaSeleccionada) {
    return <div className="text-red-500 p-6">Propuesta no encontrada.</div>;
  }

  const handleSelectContact = (idContacto: string) => {
    const nuevoContacto = contactos.find((c) => c.id_contacto === idContacto);
    if (nuevoContacto) setContactoActual(nuevoContacto as InterfazContacto);
  };

  return (
    <>
      <table className="w-full border shadow-xs border-gray-100 text-center text-sm">
        <thead>
          <tr className="bg-blue-950/80 text-white">
            <th className="px-6 py-2">Empresa anunciante</th>
            <th className="px-4 py-2">Código CRM</th>
            <th className="px-4 py-2">País</th>
            <th className="px-4 py-2">Contacto de gestión</th>
            <th className="px-4 py-2">Cargo del contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2">
              <button
                className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() =>
                  router.push(
                    `/dashboard/clientes/cuentas/${cuentaSeleccionada.id_cuenta}`
                  )
                }
              >
                {cuentaSeleccionada.nombre_empresa}
              </button>
            </td>
            <td className="px-4 py-2">{cuentaSeleccionada.id_cuenta}</td>
            <td className="px-4 py-2">{cuentaSeleccionada.pais_cuenta}</td>
            <td className="px-4 py-2 flex items-center justify-center gap-2">
              <button
                className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() =>
                  router.push(
                    `/dashboard/clientes/contactos/${contactoActual?.id_contacto}`
                  )
                }
              >
                {contactoActual?.nombre_contacto || "Sin contacto"}
              </button>
              <button
                className="p-1 rounded hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 cursor-pointer bg-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </td>
            <td className="px-4 py-2">{contactoActual?.cargo_contacto}</td>
          </tr>
        </tbody>
      </table>

       {isModalOpen && (
        <ChangeContactModal
          cuentaSeleccionada={cuentaSeleccionada}
          onClose={() => setIsModalOpen(false)}
          onSelectContact={handleSelectContact}
        />
      )}
    </>
  );
};

export default EditarDatosAnunciante;
