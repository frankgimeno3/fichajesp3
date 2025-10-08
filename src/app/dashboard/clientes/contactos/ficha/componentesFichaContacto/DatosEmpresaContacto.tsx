import React, { FC, useState } from 'react';
import { Contacto } from '../ContenidoGeneralContacto';
import PopupEmpresa from './PopupEmpresa';
import empresas from '@/app/contents/cuentasContents.json';

interface DatosEmpresaContactoProps {
  contacto: Contacto;
  onChange: () => void;
}

const DatosEmpresaContacto: FC<DatosEmpresaContactoProps> = ({ contacto, onChange }) => {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
    empresa: contacto.empresaAsociada || "Vidrios S.A.",
    codigoEmpresa: "E123",
    cargo: "Director Comercial",
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
            <td className="p-2 border-b border-gray-200">{empresaSeleccionada.empresa}</td>

            <td className="p-2 border-b border-gray-200 flex items-center gap-2">
              <span>{empresaSeleccionada.codigoEmpresa}</span>
              <button
                onClick={() => setPopupOpen(true)}
                className="p-1 rounded hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                </svg>
              </button>
            </td>

            <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                defaultValue={empresaSeleccionada.cargo}
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
