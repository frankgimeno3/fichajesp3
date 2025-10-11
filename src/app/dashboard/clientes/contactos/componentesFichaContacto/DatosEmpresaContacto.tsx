import React, { FC, useState } from "react";
import { Contacto } from "./ContenidoGeneralContacto";
import PopupEmpresa, { Empresa } from "./PopupEmpresa";
import empresasJSON from "@/app/contents/cuentasContents.json";

interface DatosEmpresaContactoProps {
  contacto: Contacto;
  onChange: () => void;
}

const DatosEmpresaContacto: FC<DatosEmpresaContactoProps> = ({
  contacto,
  onChange,
}) => {

  const empresas: Empresa[] = empresasJSON.map((e: any) => ({
    codigoEmpresa: e.id_cuenta,
    nombreEmpresa: e.nombre_empresa,
    paisEmpresa: e.pais_cuenta,
    nombreAgenteAsignado: "",

    codigoAgenteAsignado: e.id_agente,
  }));

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    empresa: contacto.id_cuenta || "",
    codigoEmpresa: "",
    cargo: "",
  });

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos asociados a la cuenta</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Empresa asociada</th>
            <th className="text-left p-2 font-light">Código empresa</th>
            <th className="text-left p-2 font-light">Cargo en la empresa</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-100/30">
            <td className="p-2 border-b border-gray-200 w-1/3 "><span className="cursor-not-allowed">{contacto.nombre_empresa}</span></td>
            <td className=" p-2 border-b border-gray-200  ">
              <div className="flex flex-row items-center " >
                <span className="hover:bg-gray-200 cursor-pointer" onClick={() => setPopupOpen(true)}>{contacto.id_cuenta}</span>
                <button className="p-1 rounded hover:bg-gray-200 cursor-pointer" onClick={() => setPopupOpen(true)} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                  </svg>
                </button>
              </div>

            </td>

            <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                defaultValue={contacto.cargo_contacto}
                onChange={onChange}
                className="w-full border border-gray-200 rounded p-1"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <PopupEmpresa
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        empresas={empresas}
        onSelect={(e) => {
          setEmpresaSeleccionada({
            ...empresaSeleccionada,
            empresa: e.nombreEmpresa,
            codigoEmpresa: e.codigoEmpresa,
          });
          onChange();
        }}
      />
    </div>
  );
};

export default DatosEmpresaContacto;
