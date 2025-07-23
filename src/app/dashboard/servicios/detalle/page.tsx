"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface DetalleProps {}

const Detalle: FC<DetalleProps> = ({ }) => {
    const router = useRouter();

    return (
        <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
            <div className='flex flex-row justify-between w-full items-center'>
                <h2 className="text-lg font-semibold mb-4">Servicios</h2>
                <button
                    className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                    onClick={() => router.push('/dashboard/servicios/crear')}
                >
                    <p>Crear</p>
                </button>
            </div>

            {/* Tabla de servicios */}
            <div className='mt-12 p-3 rounded-lg shadow-xl bg-white'>
                <h3 className="text-md font-semibold mb-4">Lista de servicios</h3>
                <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="p-3">Nombre del servicio</th>
                            <th className="p-3">Código</th>
                            <th className="p-3">Medio</th>
                            <th className="p-3">Publicación</th>
                            <th className="p-3">Precio tarifa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aquí puedes mapear tus datos dinámicamente */}
                        <tr className="border-t">
                            <td className="p-3">Ejemplo Servicio</td>
                            <td className="p-3">SV001</td>
                            <td className="p-3">Revista X</td>
                            <td className="p-3">Agosto 2025</td>
                            <td className="p-3">$1,200</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Apartado de detalles */}
            <div className='mt-8 p-6 rounded-lg shadow-xl bg-white'>
                <h3 className="text-md font-semibold mb-4">Detalle del servicio</h3>
                <div className="space-y-3 text-sm">
                    <p><strong>Características:</strong> Publicación a página completa, formato digital e impreso.</p>
                    <p><strong>Público objetivo:</strong> Profesionales del sector agroindustrial.</p>
                    <p><strong>Asociación a ferias:</strong> ExpoAgro 2025.</p>
                    <p><strong>Deadline materiales:</strong> 15 de julio de 2025.</p>
                    <p><strong>Fecha de publicación:</strong> 1 de agosto de 2025.</p>
                </div>
            </div>
        </div>
    );
};

export default Detalle;
