"use client"
import React, { FC } from 'react';
import TablaDatosEmpresa from './resumencomponents/Tabladatosempresa';
import TablaContenidoCampaña from './resumencomponents/TablaContenidoCampaña';
import TablaDatosPago from './resumencomponents/TablaDatosPago';
import { useRouter } from 'next/navigation';

interface ResumenCampanaProps {

}

const ResumenCampana: FC<ResumenCampanaProps> = ({ }) => {
    const router = useRouter()
    return (
            <div className='flex flex-col gap-6 bg-gray-100 text-gray-600 p-12'>
                <h2 className="text-lg font-semibold mb-4">Resumen de la campaña</h2>
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
                </table>

                <div className='flex flex-col text-sm'>
                    <TablaDatosEmpresa
                        empresaAnunciante={{
                            nombreEmpresa: 'Acme Corp',
                            codigoCrm: 'ACM-123',
                            codigoVtiger: 'VTG-456',
                            pais: 'España',
                        }}
                        empresaFirmante={{
                            nombreFirmante: 'Juan Pérez',
                            cargoFirmante: 'Director Comercial',
                            emailFirmante: 'juan.perez@acme.com',
                            pais: 'España',
                        }}
                    />
                </div>
                <p className='font-bold text-gray-500'>Contenido en campaña:</p>
                <TablaContenidoCampaña />

                <div className='flex flex-col text-sm border border-gray-100 p-12'>
                    <p className='font-bold text-gray-500'>Datos de pago:</p>
                    <TablaDatosPago />
                </div>
            </div>
    );
};

export default ResumenCampana;