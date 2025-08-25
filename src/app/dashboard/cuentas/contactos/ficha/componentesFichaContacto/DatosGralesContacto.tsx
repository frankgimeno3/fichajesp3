import React, { FC } from 'react';

interface DatosGralesContactoProps {}

const DatosGralesContacto: FC<DatosGralesContactoProps> = ({ }) => {
  const mockData = [
    {
      nombre: "Juan",
      apellidos: "Pérez López",
      idContacto: "C001",
      telefono: "+34 600 123 456",
      email: "juan.perez@example.com"
    }     
  ];

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
              <td className="p-2 border-b border-gray-200">{item.nombre}</td>
              <td className="p-2 border-b border-gray-200">{item.apellidos}</td>
              <td className="p-2 border-b border-gray-200">{item.idContacto}</td>
              <td className="p-2 border-b border-gray-200">{item.telefono}</td>
              <td className="p-2 border-b border-gray-200">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatosGralesContacto;
