import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

interface EmpresaGestion {
    nombreEmpresa: string;
    codigoCrm: string;
    codigoEdisoft: string;
    pais: string;
    nombreContacto: string;
    cargoContacto: string;
}

interface TablaDatosGestionProps {
    empresaGestion: EmpresaGestion;
}

const TablaDatosGestion: FC<TablaDatosGestionProps> = ({ empresaGestion }) => {
    const router = useRouter();

    // Estado local para los valores editables
    const [formData, setFormData] = useState<EmpresaGestion>(empresaGestion);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full text-center">
                <thead>
                    <tr className="bg-blue-950 text-white">
                        <th className="px-4 py-2">Gestora de la campaña</th>
                        <th className="px-4 py-2">Código CRM</th>
                        <th className="px-4 py-2">Código Edisoft</th>
                        <th className="px-4 py-2">País</th>
                        <th className="px-4 py-2">Contacto de gestión</th>
                        <th className="px-4 py-2">Cargo del contacto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white text-gray-700">
                        <td className="px-4 py-2">
                            <button
                                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                                onClick={() => router.push('/dashboard/clientes/ficha')}
                            >
                                {formData.nombreEmpresa}
                            </button>
                        </td>
                        <td className="px-4 py-2">
                            <input
                                type="text"
                                name="codigoCrm"
                                value={formData.codigoCrm}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <input
                                type="text"
                                name="codigoEdisoft"
                                value={formData.codigoEdisoft}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <input
                                type="text"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </td>
                        <td className="px-4 py-2">
                            <button
                                className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                                onClick={() => router.push('/dashboard/clientes/contactos/contacto')}
                            >
                                {formData.nombreContacto}
                            </button>
                        </td>
                        <td className="px-4 py-2">
                            <input
                                type="text"
                                name="cargoContacto"
                                value={formData.cargoContacto}
                                onChange={handleChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TablaDatosGestion;
