import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import cuentas from "@/app/contents/cuentasContents.json"
import contactos from "@/app/contents/contactsContents.json"
import { InterfazContacto } from '@/app/interfaces/interfaces';

interface TablaDatosAnuncianteProps {
  empresaAnunciante: string;
    contactoPropuesta:string;
}

const TablaDatosAnunciante: FC<TablaDatosAnuncianteProps> = ({ empresaAnunciante, contactoPropuesta }) => {
  const router = useRouter()
  const cuentaSeleccionada = cuentas.find (c => c.id_cuenta === empresaAnunciante);
  const contactoSeleccionado = contactos.find (c => c.id_contacto === contactoPropuesta) as InterfazContacto;

    if (!cuentaSeleccionada) {
    return <div className="text-red-500 p-6">Propuesta no encontrada.    </div>;
  }
  return (
         <table className=" w-full border  shadow-xs border-gray-100  text-center  text-sm"  >
        <thead>
          <tr className="bg-blue-950/80 text-white">
            <th className="px-6 py-2 flex-1/6">Empresa anunciante</th>
            <th className="px-4 py-2 flex-1/6"> Código CRM  </th>
            <th className="px-4 py-2 flex-1/6">País</th>
            <th className="px-4 py-2 flex-1/6">Contacto de gestión</th>
            <th className="px-4 py-2 flex-1/6">Cargo del contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2 flex-1/6">
              <button className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push(`/dashboard/clientes/cuentas/${cuentaSeleccionada.id_cuenta}`)}  >
                {cuentaSeleccionada.nombre_empresa}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada.id_cuenta}</td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada.pais_cuenta}</td>
            <td className="px-4 py-2 flex-1/6">
              <button className="bg-blue-950/80 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push(`/dashboard/clientes/contactos/${contactoPropuesta}`)} >
                {contactoSeleccionado?.nombre_completo_contacto}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{contactoSeleccionado?.cargo_contacto}</td>
          </tr>
        </tbody>
      </table>
   );
};

export default TablaDatosAnunciante;
