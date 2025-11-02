import React, { FC, useEffect } from "react";
import contactos from "@/app/contents/contactsContents.json";
import { InterfazCuenta } from "@/app/interfaces/interfaces";

interface ChangeContactModalProps {
  cuentaSeleccionada: InterfazCuenta;
  onClose: () => void;
  onSelectContact: (idContacto: string) => void;
}

const ChangeContactModal: FC<ChangeContactModalProps> = ({
  cuentaSeleccionada,
  onClose,
  onSelectContact,
}) => {
  // 🔹 Cierre con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!cuentaSeleccionada) return null;

  const contactosDeCuenta = cuentaSeleccionada.array_contactos_cuenta
    .map((contactoCuenta) =>
      contactos.find((c: any) => c.id_contacto === contactoCuenta.id_contacto)
    )
    .filter(Boolean);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 relative animate-fadeIn">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Seleccione un contacto
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Empresa: <strong>{cuentaSeleccionada.nombre_empresa}</strong>
        </p>

        {contactosDeCuenta.length > 0 ? (
          <table className="w-full border border-gray-200 text-sm rounded-md overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2 text-left">Nombre</th>
                <th className="px-3 py-2 text-left">Email</th>
                <th className="px-3 py-2 text-left">Teléfono</th>
                <th className="px-3 py-2 text-left">Cargo</th>
                <th className="px-3 py-2 text-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {contactosDeCuenta.map((contacto: any) => (
                <tr
                  key={contacto.id_contacto}
                  className="hover:bg-gray-50 border-t"
                >
                  <td className="px-3 py-2">{contacto.nombre_contacto}</td>
                  <td className="px-3 py-2">{contacto.email_contacto}</td>
                  <td className="px-3 py-2">{contacto.telefono_contacto}</td>
                  <td className="px-3 py-2">{contacto.cargo_contacto}</td>
                  <td className="px-3 py-2 text-center">
                    <button
                      onClick={() => {
                        onSelectContact(contacto.id_contacto);
                        onClose();
                      }}
                      className="bg-blue-900 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition"
                    >
                      Seleccionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No hay contactos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ChangeContactModal;
