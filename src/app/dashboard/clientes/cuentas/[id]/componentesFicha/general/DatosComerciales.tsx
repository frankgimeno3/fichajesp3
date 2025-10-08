'use client';
import React, { FC } from 'react';

interface DatosComercialesProps {
  datos_comerciales: {
    ciudad_principal_cuenta: string;
    telefono_principal_cuenta: string;
    categoria_principal_cuenta: string;
    resumen_actividad_cuenta: string;
  };
  nombre_empresa: string;
}

const DatosComerciales: FC<DatosComercialesProps> = ({ datos_comerciales, nombre_empresa }) => {
  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-xl font-bold">Datos Comerciales</h2>

      <table className="w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre de la cuenta</th>
            <th className="text-left p-2 font-light">Ciudad</th>
            <th className="text-left p-2 font-light">Teléfono</th>
            <th className="text-left p-2 font-light">Categoría</th>
            <th className="text-left p-2 font-light">Resumen actividad</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-t border-gray-200 hover:bg-gray-100/30">
            <td className="p-2 border-b">{nombre_empresa}</td>
            <td className="p-2 border-b">{datos_comerciales.ciudad_principal_cuenta}</td>
            <td className="p-2 border-b">{datos_comerciales.telefono_principal_cuenta}</td>
            <td className="p-2 border-b">{datos_comerciales.categoria_principal_cuenta}</td>
            <td className="p-2 border-b">{datos_comerciales.resumen_actividad_cuenta}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DatosComerciales;
