import React, { FC } from 'react';
import { useRouter } from 'next/navigation';


interface TablaDatosGeneralesProps {
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({ }) => {
        const router = useRouter()

    return (
        <table className="table-auto border-collapse text-center" style={{ "width": "700px" }}>
            <thead>
                <tr className="bg-blue-950 text-white">
                    <th className="px-4 py-2">Fecha de firma</th>
                    <th className="px-4 py-2">Fecha estimada finalización</th>
                    <th className="px-4 py-2">Contacto de gestión</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white text-gray-700">
                    <td className="px-4 py-2">12/12/2025</td>
                    <td className="px-4 py-2">12/12/2025</td>
                    <td className="px-4 py-2">
                        <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                            onClick={() => router.push('/dashboard/seguimientos/campanas/resumen')}>Frank Fimeno</button>
                    </td>
                </tr>
            </tbody>
        </table>);
};

export default TablaDatosGenerales;