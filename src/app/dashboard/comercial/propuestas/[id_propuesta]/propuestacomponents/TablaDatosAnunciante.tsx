import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import cuentas from "@/app/contents/cuentasContents.json"


interface TablaDatosAnuncianteProps {
  empresaAnunciante: string;
}

const TablaDatosAnunciante: FC<TablaDatosAnuncianteProps> = ({ empresaAnunciante }) => {
  const router = useRouter()
  const cuentaSeleccionada = cuentas.find (c => c.id_cuenta === empresaAnunciante);

    if (!cuentaSeleccionada) {
    return <div className="text-red-500 p-6">Propuesta no encontrada.    </div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-6 py-2 flex-1/6">Empresa anunciante</th>
            <th className="px-4 py-2 flex-1/6">Código CRM</th>
            <th className="px-4 py-2 flex-1/6">País</th>
            <th className="px-4 py-2 flex-1/6">Contacto de gestión</th>
            <th className="px-4 py-2 flex-1/6">Cargo del contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-gray-700">
            <td className="px-4 py-2 flex-1/6">
              <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push('/dashboard/clientes/ficha')} >
                {cuentaSeleccionada.nombre_empresa}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada.id_cuenta}</td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada.pais_cuenta}</td>
            <td className="px-4 py-2 flex-1/6">
              <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push('/dashboard/clientes/contactos/contacto')} >
                {cuentaSeleccionada.datos_comerciales.contacto_principal}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{cuentaSeleccionada.datos_comerciales.contacto_principal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosAnunciante;
