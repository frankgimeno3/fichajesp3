'use client'
import React, { FC, useState } from 'react';
import AdminNav from '../admincomponents/AdminNav';

interface InformesProps {}

const Informes: FC<InformesProps> = ({}) => {
    const [empleados, setEmpleados] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [resultados, setResultados] = useState<any[]>([]);   

    const handleDescargarCSV = () => {
        console.log('Descargar CSV');
    };

    const handleFiltrar = () => {
        console.log('Filtrando informes...');
        setResultados([
            {
                autor: 'Juan Pérez',
                evento: 'Inicio sesión',
                dia: '05/05/2025',
                hora: '10:00 AM',
                comentarios: 'Todo ok',
                modificaciones: 'Ninguna',
            },
            {
                autor: 'Ana López',
                evento: 'Cambio de contraseña',
                dia: '04/05/2025',
                hora: '03:15 PM',
                comentarios: 'Actualización de seguridad',
                modificaciones: 'Contraseña actualizada',
            },
        ]);
    };

    return (
        <div className='text-gray-600'>
            <AdminNav/>
            <div className="p-6 px-12 bg-gray-100 min-h-screen">
                <div className="flex flex-col space-y-4 mb-6">
                    <div className="flex flex-col space-y-4 bg-white shadow p-4  rounded">
                        <p className="text-lg text-gray-600">Configurar Filtros</p>
                        <div className="flex flex-col space-y-2">
                            <div>
                                <label htmlFor="empleados" className="text-sm">Empleados (números separados por comas)</label>
                                <input
                                    id="empleados"
                                    type="text"
                                    value={empleados}
                                    onChange={(e) => setEmpleados(e.target.value)}
                                    placeholder="Ejemplo: 001, 002, 003"
                                    className="p-2 w-full border border-gray-300 rounded"
                                />
                            </div>
                            {/* Filtro por fechas */}
                            <div className="flex space-x-2">
                                <div className='flex flex-col'>
                                    <label htmlFor="fechaDesde" className="text-sm">Desde</label>
                                    <input
                                        id="fechaDesde"
                                        type="text"
                                        value={fechaDesde}
                                        onChange={(e) => setFechaDesde(e.target.value)}
                                        placeholder="DD/MM/AA"
                                        className="p-2  border border-gray-300 rounded"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="fechaHasta" className="text-sm">Hasta</label>
                                    <input
                                        id="fechaHasta"
                                        type="text"
                                        value={fechaHasta}
                                        onChange={(e) => setFechaHasta(e.target.value)}
                                        placeholder="DD/MM/AA"
                                        className="p-2  border border-gray-300 rounded"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={handleFiltrar}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-36"
                        >
                            Filtrar Informes
                        </button>
                    </div>

                    {/* Segundo div: resultados */}
                    <div className="flex flex-col bg-white shadow ">
                        {/* Cabezal */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-100">
                            <p className="text-lg font-semibold">Resultados</p>
                            <button
                                onClick={handleDescargarCSV}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Descargar como CSV
                            </button>
                        </div>

                        {/* Tabla de eventos */}
                        <div className="bg-white p-4 shadow-md">
                            {resultados.length === 0 ? (
                                <p className="text-center text-gray-500">Introduzca valores para empezar</p>
                            ) : (
                                <table className="min-w-full text-left">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th className="p-2">Autor</th>
                                            <th className="p-2">Evento</th>
                                            <th className="p-2">Día</th>
                                            <th className="p-2">Hora</th>
                                            <th className="p-2">Comentarios</th>
                                            <th className="p-2">Modificaciones</th>
                                            <th className="p-2">Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {resultados.map((evento, index) => (
                                            <tr key={index} className="border-t">
                                                <td className="p-2">{evento.autor}</td>
                                                <td className="p-2">{evento.evento}</td>
                                                <td className="p-2">{evento.dia}</td>
                                                <td className="p-2">{evento.hora}</td>
                                                <td className="p-2">{evento.comentarios}</td>
                                                <td className="p-2">{evento.modificaciones}</td>
                                                <td className="p-2">
                                                    <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informes;
