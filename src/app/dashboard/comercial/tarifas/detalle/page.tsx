"use client"
import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface DetalleProps {}

const Detalle: FC<DetalleProps> = ({ }) => {
    const router = useRouter();

    return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Resumen del servicio  `} />

    <div className="bg-white min-h-screen p-12 text-gray-600">                  
 
            {/* Tabla de tarifas */}
            <div className= '  rounded-lg shadow-xl bg-white'>
                 <table className="w-full text-left  rounded-lg overflow-hidden">
                    <thead className="bg-blue-950 text-white">
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
            <div className='mt-8  rounded-lg shadow-xl bg-white'>
                <h3 className="p-3 text-md font-semibold   bg-blue-950 w-full text-white rounded-t-lg ">Detalle del servicio</h3>
                <div className="p-3 text-sm ">
                    <p className='p-1'><strong>Características:</strong> Publicación a página completa, formato digital e impreso.</p>
                    <p className='p-1'><strong>Público objetivo:</strong> Profesionales del sector agroindustrial.</p>
                    <p className='p-1'><strong>Asociación a ferias:</strong> ExpoAgro 2025.</p>
                    <p className='p-1'><strong>Deadline materiales:</strong> 15 de julio de 2025.</p>
                    <p className='p-1'><strong>Fecha de publicación:</strong> 1 de agosto de 2025.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Detalle;
