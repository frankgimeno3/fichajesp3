'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import contactos from "@/app/contents/contactsContents.json"



interface ContenidoContactosEmpresaProps {
  id_cuenta:string;
  onChange: () => void;
}

const ContenidoContactosEmpresa: FC<ContenidoContactosEmpresaProps> = ({
  id_cuenta,
  onChange
}) => {
  const router = useRouter();

  const contactosFiltrados = id_cuenta
    ? contactos.filter((c) => c.id_contacto === id_cuenta)
    : contactos;

  if (!contactosFiltrados || contactosFiltrados.length === 0) {
    return (
      <p className="text-gray-500">
        No hay contactos disponibles para esta cuenta.
      </p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contactos de la Empresa</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Código de contacto</th>
            <th className="text-left p-2 font-light">Nombre y apellidos</th>
            <th className="text-left p-2 font-light">Cargo</th>
            <th className="text-left p-2 font-light">Email principal</th>
          </tr>
        </thead>
        <tbody>
          {contactosFiltrados.map((contacto) => (
            <tr
              key={contacto.id_contacto}
              className="border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer"
              onClick={() =>
                router.push(`/dashboard/cuentas/contactos/${contacto.id_contacto}`)
              }
            >
              <td className="p-2 border-b border-gray-200">
                {contacto.id_contacto}
              </td>
              <td className="p-2 border-b border-gray-200">
                {contacto.nombre_completo_contacto}
              </td>
              <td className="p-2 border-b border-gray-200">
                {contacto.cargo_contacto || '-'}
              </td>
              <td className="p-2 border-b border-gray-200">
                {contacto.email_contacto}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContenidoContactosEmpresa;
