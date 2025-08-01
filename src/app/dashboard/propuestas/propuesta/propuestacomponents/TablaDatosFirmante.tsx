import React, { FC } from 'react';
import { useRouter } from 'next/navigation';


interface EmpresaFirmante {
    nombreEmpresa: string;
    codigoCrm: string;
    codigoEdisoft: string;
    pais: string;
    nombreContacto: string;
    //   codigoContacto:'1234',
    cargoContacto: string;
}

interface TablaDatosFirmanteProps {
    empresaFirmante: EmpresaFirmante;
}

const TablaDatosFirmante: FC<TablaDatosFirmanteProps> = ({ empresaFirmante }) => {
    const router = useRouter()

    return (
        <div className="overflow-x-auto ">
            <table className="table-auto border-collapse w-full text-center">
                <thead>
                    <tr className="bg-blue-950 text-white">
                        <th className="px-4 py-2 flex-1/6">Contratante publicidad</th>
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
                                {empresaFirmante.nombreEmpresa}
                            </button>
                        </td>
                        <td className="px-4 py-2 flex-1/6">{empresaFirmante.codigoCrm}</td>
                        <td className="px-4 py-2 flex-1/6">{empresaFirmante.codigoEdisoft}</td>
                        <td className="px-4 py-2 flex-1/6">{empresaFirmante.pais}</td>
                        <td className="px-4 py-2 flex-1/6">
                            <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                                onClick={() => router.push('/dashboard/clientes/contactos/contacto')} >
                                {empresaFirmante.nombreContacto}
                            </button>
                        </td>
                        <td className="px-4 py-2 flex-1/6">{empresaFirmante.cargoContacto}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaDatosFirmante;
