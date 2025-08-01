import React, { FC } from 'react';
import { useRouter } from 'next/navigation';


interface EmpresaAnunciante {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
  nombreContacto: string;
  //   codigoContacto:'1234',
  cargoContacto: string;
}

interface TablaDatosAnuncianteProps {
  empresaAnunciante: EmpresaAnunciante;
}

const TablaDatosAnunciante: FC<TablaDatosAnuncianteProps> = ({ empresaAnunciante }) => {
  const router = useRouter()

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-center">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-6 py-2 flex-1/6">Empresa anunciante</th>
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
              <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push('/dashboard/clientes/ficha')} >
                {empresaAnunciante.nombreEmpresa}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{empresaAnunciante.codigoCrm}</td>
            <td className="px-4 py-2 flex-1/6">{empresaAnunciante.codigoEdisoft}</td>
            <td className="px-4 py-2 flex-1/6">{empresaAnunciante.pais}</td>
            <td className="px-4 py-2 flex-1/6">
              <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                onClick={() => router.push('/dashboard/clientes/contactos/contacto')} >
                {empresaAnunciante.nombreContacto}
              </button>
            </td>
            <td className="px-4 py-2 flex-1/6">{empresaAnunciante.cargoContacto}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosAnunciante;
