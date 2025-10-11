'use client';
import React, { FC } from 'react';
import contactos from "@/app/contents/contactsContents.json"
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
  onChange: () => void;
}

const DatosComerciales: FC<DatosComercialesProps> = ({ datos_comerciales, pais_cuenta, onChange }) => {
  const router = useRouter()
  const contactoPrincipalNombre = contactos.find(
    contacto => contacto.id_contacto === datos_comerciales.contacto_principal
  )?.nombre_completo_contacto || "No asignado";

  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-xl font-bold">Datos Comerciales</h2>

      <table           className="min-w-full border border-gray-300 text-xs bg-white rounded shadow-sm overflow-hidden"
>
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
            <td className="p-2 w-1/6" onChange={onChange}>{datos_comerciales.ciudad_principal_cuenta}</td>
            <td className="p-2 w-1/6" onChange={onChange}>{pais_cuenta}</td>
            <td className="p-2 w-1/6" onChange={onChange}>{datos_comerciales.telefono_principal_cuenta}</td>
            <td className="p-2 w-1/6" onChange={onChange}>{datos_comerciales.categoria_principal_cuenta}</td>
            <td className="p-2 w-1/6 cursor-pointer hover:font-bold hover:text-blue-950/70" onChange={onChange}
              onClick={() => router.push(`/dashboard/clientes/contactos/${datos_comerciales.contacto_principal}`)}
            >{contactoPrincipalNombre}</td>
            <td className="p-2 w-1/6" onChange={onChange}>{datos_comerciales.resumen_actividad_cuenta}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosComerciales;
