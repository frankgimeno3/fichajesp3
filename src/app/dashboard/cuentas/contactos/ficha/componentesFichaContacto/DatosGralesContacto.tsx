import React, { FC } from 'react';

interface DatosGralesContactoProps {
  
}

const DatosGralesContacto: FC<DatosGralesContactoProps> = ({ }) => {
  return (
<div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos generales del contacto</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre del contacto</th>
            <th className="text-left p-2 font-light">Apellidos del contacto</th>
            <th className="text-left p-2 font-light">Id del contacto</th>
            <th className="text-left p-2 font-light">Teléfono principal</th>
            <th className="text-left p-2 font-light">Email principal</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b border-gray-200">{item.codigoCRM}</td>
              <td className="p-2 border-b border-gray-200">{item.codigoEdisoft}</td>
              <td className="p-2 border-b border-gray-200">{item.descripcion}</td>
              <td className="p-2 border-b border-gray-200">{item.actividades.join(', ')}</td>
              <td className="p-2 border-b border-gray-200">{item.qq ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>   );
};

export default DatosGralesContacto;