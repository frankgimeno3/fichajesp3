"use client"
import React, { useState } from 'react';
import cuentas from "@/app/contents/cuentasContents.json"


interface DatosComercialesRow {
  nombreCuenta: string;
  pais: string;
  ciudad: string;
  telefono: string;
  categoria: string;
  queHacen: string;
}

interface HistorialItem {
  exAnuncianteEn: string;
  contenido: string;
}

const initialDatos: DatosComercialesRow[] = [
  {
    nombreCuenta: 'Empresa XYZ',
    pais: 'España',
    ciudad: 'Madrid',
    telefono: '+34 600 123 456',
    categoria: 'Tecnología',
    queHacen: 'Desarrollan software a medida para empresas.',
  },
];

const historial: HistorialItem[] = [
  { exAnuncianteEn: '2022', contenido: 'Campaña de branding digital' },
];

const DatosComerciales = () => {
  const [datos, setDatos] = useState<DatosComercialesRow[]>(initialDatos);

  const handleChange = (index: number, field: keyof DatosComercialesRow, value: string) => {
    const updated = [...datos];
    updated[index][field] = value;
    setDatos(updated);
  };

  return (
    <div className="p-4 space-y-6 w-full">
      <h2 className="text-xl font-bold">Datos Comerciales</h2>
      <table className="w-full  ">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Nombre de la cuenta</th>
            <th className="text-left p-2 font-light">País</th>
            <th className="text-left p-2 font-light">Ciudad</th>
            <th className="text-left p-2 font-light">Teléfono</th>
            <th className="text-left p-2 font-light">Categoría</th>
            <th className="text-left p-2 font-light">Qué hacen</th>
          </tr>
        </thead>
        <tbody className='text-sm'>
          {datos.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b">
                <input
                  className="w-full"
                  value={row.nombreCuenta}
                  onChange={(e) => handleChange(idx, 'nombreCuenta', e.target.value)}
                />
              </td>
              <td className="p-2 border-b">
                <input
                  className="w-full"
                  value={row.pais}
                  onChange={(e) => handleChange(idx, 'pais', e.target.value)}
                />
              </td>
              <td className="p-2 border-b">
                <input
                  className="w-full"
                  value={row.ciudad}
                  onChange={(e) => handleChange(idx, 'ciudad', e.target.value)}
                />
              </td>
              <td className="p-2 border-b">
                <input
                  className="w-full"
                  value={row.telefono}
                  onChange={(e) => handleChange(idx, 'telefono', e.target.value)}
                />
              </td>
              <td className="p-2 border-b">
                <input
                  className="w-full"
                  value={row.categoria}
                  onChange={(e) => handleChange(idx, 'categoria', e.target.value)}
                />
              </td>
              <td className="p-2 border-b">
               <textarea
  className="w-full h-auto min-h-[80px] resize-none"
  value={row.queHacen}
  onChange={(e) => handleChange(idx, 'queHacen', e.target.value)}
/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-sm font-semibold">Historial publicitario</h3>
      <table className="w-full  ">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Exanunciante en</th>
            <th className="text-left p-2 font-light">Contenido</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((h, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="p-2 border-b">{h.exAnuncianteEn}</td>
              <td className="p-2 border-b">{h.contenido}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatosComerciales;
