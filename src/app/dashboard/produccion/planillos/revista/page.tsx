"use client"
import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC, JSX, useState } from 'react';

interface CeldaData {
    posición: string;
    empresa: string;
    tipoContenido: 'artículo' | 'anuncio';
    estado: 'no pedido' | 'esperando recepción' | 'por revisar producción' | 'material incorrecto' | 'producido' | 'revisado';
    agente: string;
}

interface PlanilloRevistaProps { }

const mockData: CeldaData[] = [
    { posición: 'Página 0', empresa: 'Editorial S.A.', tipoContenido: 'artículo', estado: 'revisado', agente: "Laura" }, // Portada
    { posición: 'Página 1', empresa: 'Empresa A', tipoContenido: 'artículo', estado: 'producido', agente: "Pep" },
    { posición: 'Página 2', empresa: 'Empresa B', tipoContenido: 'anuncio', estado: 'revisado', agente: "Pep" },
    { posición: 'Página 3', empresa: 'Empresa C', tipoContenido: 'artículo', estado: 'no pedido', agente: "Pep" },
    // Agrega más si quieres
];

const totalCeldas = 60;

const PlanilloRevista: FC<PlanilloRevistaProps> = () => {
    const [edicionActual] = useState("Revista del vidrio españa 242");

    const celdas = Array.from({ length: totalCeldas }, (_, i) => {
        const data = mockData[i];

        return (
            <div
                key={i}
                className={`w-1/2 border border-gray-300 p-2 text-xs relative h-56 ${i === 0 ? 'bg-yellow-100 ml-auto' : ''}`}
            >
                <div className="absolute top-1 right-2 text-gray-400">#{i}</div>
                {data ? (
                    <div className="flex flex-col w-full h-full justify-between">
                        <p className="font-semibold text-center mb-1">{data.posición}</p>
                        <div className="flex flex-col text-xs w-full gap-1">
                            <div className="flex w-full">
                                <div className="bg-blue-950 text-white px-1 py-0.5 w-1/2">Empresa</div>
                                <div className="text-gray-600 px-1 py-0.5 w-1/2">{data.empresa}</div>
                            </div>
                            <div className="flex w-full">
                                <div className="bg-blue-950 text-white px-1 py-0.5 w-1/2">Tipo de contenido</div>
                                <div className="text-gray-600 px-1 py-0.5 w-1/2">{data.tipoContenido}</div>
                            </div>
                            <div className="flex w-full">
                                <div className="bg-blue-950 text-white px-1 py-0.5 w-1/2">Estado material</div>
                                <div className="text-gray-600 px-1 py-0.5 w-1/2">{data.estado}</div>
                            </div>
                            <div className="flex w-full">
                                <div className="bg-blue-950 text-white px-1 py-0.5 w-1/2">Agente</div>
                                <div className="text-gray-600 px-1 py-0.5 w-1/2">{data.agente}</div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    });

    const filas: JSX.Element[] = [];
    for (let i = 1; i < totalCeldas; i += 2) {
        const left = celdas[i];
        const right = celdas[i + 1] || (
            <div key={i + 1} className="w-1/2 border border-gray-700 p-2 h-20 relative text-xs">
                <div className="absolute top-1 right-2 text-gray-600">#{i + 1}</div>
            </div>
        );

        filas.push(
            <div key={`fila-${i}`} className="flex">
                {left}
                {right}
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
            <MiddleNav tituloprincipal={` Planillo de revista ${edicionActual}`} />

            <div className="bg-white min-h-screen p-12 text-gray-600">
                <h2 className="text-xl font-semibold mb-6">Planillos {edicionActual}</h2>

                <div className='flex flex-row justify-start gap-5 mb-12'>
                    <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 '>
                        Descargar como PDF
                    </button>
                    <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 '>
                        Añadir manualmente
                    </button>
                    <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 '>
                        Intercambiar páginas
                    </button>
                </div>

                <div className="flex flex-row     ">
                    <div className="flex flex-col gap-1 mx-24 border border-gray-700" style={{ width: "500px" }}>
                        {celdas[0]}
                        {filas.slice(0, 15)}
                    </div>
                    <div className="flex flex-col gap-1 border border-gray-700" style={{ width: "500px" }}>
                        {filas.slice(15)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanilloRevista;
