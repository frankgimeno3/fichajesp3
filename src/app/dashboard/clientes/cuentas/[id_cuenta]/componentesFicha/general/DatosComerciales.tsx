'use client';
import React, { FC, ChangeEvent } from 'react';
import contactos from "@/app/contents/contactsContents.json";
import { useRouter } from 'next/navigation';

interface DatosComercialesProps {
  datos_comerciales: {
    ciudad_principal_cuenta: string;
    telefono_principal_cuenta: string;
    categoria_principal_cuenta: string;
    contacto_principal: string;
    resumen_actividad_cuenta: string;
  };
  pais_cuenta: string;
  onChange: (field: string, value: string) => void;  
}

const DatosComerciales: FC<DatosComercialesProps> = ({ datos_comerciales, pais_cuenta, onChange }) => {
  const router = useRouter();
  const contactoPrincipalNombre = contactos.find(
    contacto => contacto.id_contacto === datos_comerciales.contacto_principal
  )?.nombre_completo_contacto || "No asignado";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-xl font-bold">Datos Comerciales</h2>

      <table className="min-w-full border border-gray-300 text-xs bg-white rounded shadow-sm overflow-hidden">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Ciudad</th>
            <th className="text-left p-2 font-light">País</th>
            <th className="text-left p-2 font-light">Teléfono de contacto</th>
            <th className="text-left p-2 font-light">Categoría</th>
            <th className="text-left p-2 font-light">Contacto principal</th>
            <th className="text-left p-2 font-light">Resumen actividad</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="hover:bg-gray-100/30">
            <td className="p-2 w-1/6">
              <input
                type="text"
                name="ciudad_principal_cuenta"
                value={datos_comerciales.ciudad_principal_cuenta}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
            <td className="p-2 w-1/6">
              <input
                type="text"
                name="pais_cuenta"
                value={pais_cuenta}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
            <td className="p-2 w-1/6">
              <input
                type="text"
                name="telefono_principal_cuenta"
                value={datos_comerciales.telefono_principal_cuenta}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
            <td className="p-2 w-1/6">
              <input
                type="text"
                name="categoria_principal_cuenta"
                value={datos_comerciales.categoria_principal_cuenta}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
            <td
              className="p-2 w-1/6 cursor-pointer hover:font-bold hover:text-blue-950/70"
              onClick={() => router.push(`/dashboard/clientes/contactos/${datos_comerciales.contacto_principal}`)}
            >
              {contactoPrincipalNombre}
            </td>
            <td className="p-2 w-1/6">
              <input
                type="text"
                name="resumen_actividad_cuenta"
                value={datos_comerciales.resumen_actividad_cuenta}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-400"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosComerciales;
