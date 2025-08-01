import React, { FC } from 'react';


interface TablaDatosGeneralesProps {
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({ }) => {

    return (
        <table className="table-auto border-collapse text-center"  >
            <thead>
                <tr className="bg-blue-950 text-white">
                    <th className="px-4 py-2">Fecha de firma</th>
                    <th className="px-4 py-2">Fecha estimada finalización</th>
                    <th className="px-4 py-2">Agente ofertate</th>
                    <th className="px-4 py-2">Account manager actual</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white text-gray-700">
                    <td className="px-4 py-2">12/12/2025</td>
                    <td className="px-4 py-2">12/12/2025</td>

                    <td className="px-4 py-2">Jose Luis Fernandez Llop</td>
                    <td className="px-4 py-2">Frank Gimeno</td>

                </tr>
            </tbody>
        </table>);
};

export default TablaDatosGenerales;