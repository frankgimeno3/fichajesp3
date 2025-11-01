import React, { FC } from 'react';


interface TablaDatosGeneralesProps {
    codigoPropuesta:string
}

const TablaDatosGenerales: FC<TablaDatosGeneralesProps> = ({codigoPropuesta}) => {
    return (
        <table className=" w-full border  shadow-xs border-gray-100  text-center text-sm"  >
            <thead>
                    <tr className="bg-blue-950/80 text-white ">
                    <th className="px-4 py-2 ">Fecha de envío al cliente</th>
                    <th className="px-4 py-2">Fecha máxima de validez</th>
                    <th className="px-4 py-2">Agente ofertate</th>
                    <th className="px-4 py-2">Código codigoPropuesta</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white text-gray-700">
                    <td className="px-4 py-2">12/12/2025</td>
                    <td className="px-4 py-2">12/03/2026</td>
                    <td className="px-4 py-2">Frank Gimeno</td>
                    <td className="px-4 py-2">{codigoPropuesta}</td>
                </tr>
            </tbody>
        </table>);
};

export default TablaDatosGenerales;