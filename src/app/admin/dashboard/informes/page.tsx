'use client'
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

interface InformesProps {}

const Informes: FC<InformesProps> = ({}) => {
    const router = useRouter();
    const [empleados, setEmpleados] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [resultados, setResultados] = useState<any[]>([]);  // Para almacenar los resultados de los informes

    const handleLogout = () => {
        console.log('logout');
    };

    const handleInformes = () => {
        router.push('/admin/dashboard/informes');
    };

    const handleUsuarios = () => {
        router.push('/admin/dashboard/usuarios');
    };
    const handleDashboard = () => {
        router.push('/admin/dashboard');
    };

    const handleDescargarCSV = () => {
        // Aquí implementamos la lógica para descargar los resultados como CSV
        console.log('Descargar CSV');
    };

    const handleFiltrar = () => {
        // Lógica para filtrar los datos por empleados y fechas
        console.log('Filtrando informes...');
        // Aquí puedes hacer una llamada a una API o lógica de filtrado.
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
            <nav className="flex flex-row justify-between p-5 px-12 items-center border-b border-gray-600" style={{ backgroundColor: 'rgb(255, 255, 255, 0.04)' }}>
                <p className="text-2xl text-gray-300" onClick={()=>{handleDashboard()}}>Dashboard ADMIN</p>
                <div className="flex flex-row text-white">
                    <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleInformes}>Sacar informes</button>
                    <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleUsuarios}>Gestionar usuarios</button>
                    <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </nav>

            <div className="p-6 px-12 bg-gray-100 min-h-screen">
                <div className="flex flex-col space-y-4 mb-6">
                    {/* Primer div: configuración de los filtros */}
                    <div className="flex flex-col space-y-4 bg-white shadow p-4  rounded">
                        <p className="text-lg text-gray-600">Configurar Filtros</p>
                        <div className="flex flex-col space-y-2">
                            {/* Filtro por empleados */}
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
