"use client";
import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';
import React, { FC, JSX, useState } from 'react';

interface CeldaData {
    posición: string;
    empresa: string;
    tipoContenido: 'artículo' | 'anuncio';
    estado: 'no pedido' | 'esperando recepción' | 'por revisar producción' | 'material incorrecto' | 'producido' | 'revisado';
    agente: string;
}

interface PlanilloRevistaProps {}

const mockData: CeldaData[] = [
    { posición: 'Página 0', empresa: 'Editorial S.A.', tipoContenido: 'artículo', estado: 'revisado', agente: "Laura" },
    { posición: 'Página 1', empresa: 'Empresa A', tipoContenido: 'artículo', estado: 'producido', agente: "Pep" },
    { posición: 'Página 2', empresa: 'Empresa B', tipoContenido: 'anuncio', estado: 'revisado', agente: "Pep" },
    { posición: 'Página 3', empresa: 'Empresa C', tipoContenido: 'artículo', estado: 'no pedido', agente: "Pep" },
];

const totalCeldas = 88;

const PlanilloRevista: FC<PlanilloRevistaProps> = () => {
    const [edicionActual] = useState("Revista del vidrio españa 242");
    const [editando, setEditando] = useState(false);
    const [infoPlanillo, setInfoPlanillo] = useState({
        fechaPublicacion: '12/03/2026',
        deadlineMateriales: '12/03/2026',
        fechaImprenta: '12/03/2026',
        tematica: 'Especial vitrum 2025',
        estado: 'Planillo previo',
    });

    const estadosPlanillo = [
        'En revisión',
        'En producción',
        'Planillo previo'
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInfoPlanillo(prev => ({ ...prev, [name]: value }));
    };

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

        if (i + 1 < totalCeldas) {
            const right = celdas[i + 1];
            filas.push(
                <div key={`fila-${i}`} className="flex">
                    {left}
                    {right}
                </div>
            );
        } else {
            filas.push(
                <div key={`fila-${i}`} className="flex">
                    <div className="w-full">
                        {left}
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
            <MiddleNav tituloprincipal={` Planillo de revista ${edicionActual}`} />

            <div className="bg-white min-h-screen p-12 text-gray-600">
                <div className='flex flex-row justify-between flex-1'>
                    <div className='flex flex-col'>
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
                    </div>

                    {/* Sección editable */}
                    <div className='flex flex-col bg-white rounded-xl shadow p-5 text-sm border border-gray-100 mb-12'>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='font-bold'>Sobre este planillo</p>
                            <button
                                className='text-blue-800 text-sm underline'
                                onClick={() => setEditando(!editando)}
                            >
                                {editando ? 'Guardar' : 'Editar'}
                            </button>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <label className="font-semibold">Fecha de publicación de la revista:</label>
                                {editando ? (
                                    <input
                                        type='text'
                                        name='fechaPublicacion'
                                        value={infoPlanillo.fechaPublicacion}
                                        onChange={handleChange}
                                        className='border p-1 rounded w-full'
                                    />
                                ) : (
                                    <p>{infoPlanillo.fechaPublicacion}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-semibold">Fecha de deadline general materiales:</label>
                                {editando ? (
                                    <input
                                        type='text'
                                        name='deadlineMateriales'
                                        value={infoPlanillo.deadlineMateriales}
                                        onChange={handleChange}
                                        className='border p-1 rounded w-full'
                                    />
                                ) : (
                                    <p>{infoPlanillo.deadlineMateriales}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-semibold">Fecha prevista de envío a imprenta:</label>
                                {editando ? (
                                    <input
                                        type='text'
                                        name='fechaImprenta'
                                        value={infoPlanillo.fechaImprenta}
                                        onChange={handleChange}
                                        className='border p-1 rounded w-full'
                                    />
                                ) : (
                                    <p>{infoPlanillo.fechaImprenta}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-semibold">Temática:</label>
                                {editando ? (
                                    <input
                                        type='text'
                                        name='tematica'
                                        value={infoPlanillo.tematica}
                                        onChange={handleChange}
                                        className='border p-1 rounded w-full'
                                    />
                                ) : (
                                    <p>{infoPlanillo.tematica}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-semibold">Estado actual del planillo:</label>
                                {editando ? (
                                    <select
                                        name='estado'
                                        value={infoPlanillo.estado}
                                        onChange={handleChange}
                                        className='border p-1 rounded w-full'
                                    >
                                        {estadosPlanillo.map(op => (
                                            <option key={op} value={op}>{op}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <p>{infoPlanillo.estado}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between ">
                    <div className="flex flex-col gap-1 border border-gray-700" style={{ width: "500px" }}>
                        {celdas[0]}
                        {filas.slice(0, 22)}
                    </div>
                    <div className="flex flex-col gap-1 border border-gray-700" style={{ width: "500px" }}>
                        {filas.slice(22)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanilloRevista;
