import { InterfazContacto } from '@/app/interfaces/interfaces';
import React, { FC, ChangeEvent } from 'react';
 
interface DatosGralesContactoProps {
  contacto: InterfazContacto;
  onChange: () => void;
}

const DatosGralesContacto: FC<DatosGralesContactoProps> = ({ contacto, onChange }) => {
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
          <tr className="border-t border-gray-200 hover:bg-gray-100/30">
            <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                defaultValue={contacto.nombre_contacto}
                onChange={onChange}
                className="w-full border border-gray-200 rounded p-1"
              />
            </td>
            <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                defaultValue={contacto.apellidos_contacto}
                onChange={onChange}
                className="w-full border border-gray-200 rounded p-1"
              />
            </td>
            <td className="p-2 border-b border-gray-200">{contacto.id_contacto}</td>
            <td className="p-2 border-b border-gray-200">
              <input
                type="text"
                defaultValue={contacto.telefono_contacto
                }
                onChange={onChange}
                className="w-full border border-gray-200 rounded p-1"
              />
            </td>
            <td className="p-2 border-b border-gray-200">
              <input
                type="email"
                defaultValue={contacto.email_contacto}
                onChange={onChange}
                className="w-full border border-gray-200 rounded p-1"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosGralesContacto;
