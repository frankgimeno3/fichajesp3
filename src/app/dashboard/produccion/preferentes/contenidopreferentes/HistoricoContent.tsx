import React, { FC, useState } from 'react';

interface HistoricoContentProps { }

const ediciones = [
    "212 Vidrio ES",
    "212 Ventanas AL",
    "213 Vidrio AL",
    "213 Ventanas ES",
    "214 Vidrio AL",
    "214 Ventanas ES",
];

const preferentes = [
    "PORTADA",
    "INT. PORTADA",
    "P1",
    "P2",
    "P3",
    "P5",
    "P6+7",
    "P7+8"
];

const generarDatosMock = () => {
    return ediciones.flatMap((edicion) =>
        preferentes.map((pref, index) => ({
            edicion,
            preferente: `${edicion} - ${pref}`,
            anunciante: `Anunciante ${index + 1} - ${edicion.split(' ')[1]}`,
            numero: edicion.split(' ')[0],
            tipo: edicion.split(' ')[1],
            region: edicion.split(' ')[2],
            preferenteRaw: pref
        }))
    );
};

const datos = generarDatosMock();

const HistoricoContent: FC<HistoricoContentProps> = () => {
    const [filtros, setFiltros] = useState({
        numero: '',
        tipo: '',
        region: '',
        preferente: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFiltros(prev => ({ ...prev, [name]: value }));
    };

    const datosFiltrados = datos.filter(fila => {
        return (
            (filtros.numero === '' || fila.numero.includes(filtros.numero)) &&
            (filtros.tipo === '' || fila.tipo === filtros.tipo) &&
            (filtros.region === '' || fila.region.toLowerCase() === filtros.region.toLowerCase()) &&
            (filtros.preferente === '' || fila.preferenteRaw === filtros.preferente)
        );
    });

    return (
        <div className="">
            <div className='flex flex-row items-center bg-blue-950 justify-between px-12 py-5 text-white '>
            <h2 className="text-xl font-semibold mb-4">Páginas preferentes</h2>
                <div className="flex flex-row gap-4 items-center text-xs">
                    <input
                        type="text"
                        name="numero"
                        placeholder="Número"
                        value={filtros.numero}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    />
                    <select name="tipo" value={filtros.tipo} onChange={handleChange} className="border p-2 rounded text-gray-500">
                        <option value="">Edición</option>
                        <option value="Vidrio">Vidrio</option>
                        <option value="Ventanas">Ventanas</option>
                        <option value="QQ">QQ</option>
                        <option value="Hueco">Hueco</option>
                    </select>
                    <select name="region" value={filtros.region} onChange={handleChange} className="border p-2 rounded text-gray-500">
                        <option value="">Región</option>
                        <option value="ES">ES</option>
                        <option value="AL">AL</option>
                    </select>
                    <select name="preferente" value={filtros.preferente} onChange={handleChange} className="border p-2 rounded text-gray-500">
                        <option value="">Preferente</option>
                        {preferentes.map((pref, idx) => (
                            <option key={idx} value={pref}>{pref}</option>
                        ))}
                    </select>
                    <button className='bg-white text-blue-950 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-white/80' >
                        Filtrar por estos valores
                    </button>
                </div>
            </div>

            <table className="min-w-full   p-12 bg-gray-200">
                <thead>
                    <tr>
                        <th className="bg-blue-950/90 text-white py-5">Preferente</th>
                        <th className="bg-blue-950/90 text-white py-5">Anunciante</th>
                    </tr>
                </thead>
                <tbody>
                    {datosFiltrados.map((fila, index) => (
                        <tr key={index} className=' border border-gray-100 hover:bg-gray-100'>
                            <td className=" p-2 px-12">{fila.preferente}</td>
                            <td className="  p-2 px-12">{fila.anunciante}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoricoContent;