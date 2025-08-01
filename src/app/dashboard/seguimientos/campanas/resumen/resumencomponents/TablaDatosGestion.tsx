import React, { FC } from 'react';
import { useRouter } from 'next/navigation';


interface EmpresaAnunciante {
    nombreContacto: String;
    cargoContacto: string;

    nombreEmpresa: string;
    codigoCrm: string;
    codigoEdisoft: string;
    pais: string;
}

interface TablaDatosGestionProps {
    empresaGestion: EmpresaAnunciante;
}

const TablaDatosGestion: FC<TablaDatosGestionProps> = ({ empresaGestion }) => {
    const router = useRouter()

    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full text-center">
                <thead>
                    <tr className="bg-blue-950 text-white">
                        <th className="px-4 py-2">Contacto de gestión</th>
                        <th className="px-4 py-2">Cargo del contacto</th>
                        <th className="px-4 py-2">Nombre empresa</th>
                        <th className="px-4 py-2">Código CRM</th>
                        <th className="px-4 py-2">Código Edisoft</th>
                        <th className="px-4 py-2">País</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white text-gray-700">
                        <td className="px-4 py-2">
                            <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                                onClick={() => router.push('/dashboard/seguimientos/campanas/resumen')}>{empresaGestion.nombreContacto}</button>
                        </td>
                        <td className="px-4 py-2">{empresaGestion.cargoContacto}</td>
                        <td className="px-4 py-2">{empresaGestion.nombreEmpresa}</td>
                        <td className="px-4 py-2">{empresaGestion.codigoCrm}</td>
                        <td className="px-4 py-2">{empresaGestion.codigoEdisoft}</td>
                        <td className="px-4 py-2">{empresaGestion.pais}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaDatosGestion;
