"use client"
import React, { useState } from 'react';
import cuentas from "@/app/contents/cuentasContents.json"


interface Direccion {
  id: number;
  nombre: string;
  pais: string;
  estado: string;
  ciudad: string;
  codigoPostal: string;
  direccion: string;
  telefono: string;
  descripcion: string;
  editado: boolean;
}

const Direcciones = () => {
  const [direcciones, setDirecciones] = useState<Direccion[]>([
    {
      id: 1,
      nombre: 'Oficina Central',
      pais: 'España',
      estado: 'Madrid',
      ciudad: 'Madrid',
      codigoPostal: '28001',
      direccion: 'Calle Falsa 123',
      telefono: '+34 600 123 456',
      descripcion: 'Sede principal',
      editado: false,
    },
    {
      id: 2,
      nombre: 'Delegación Norte',
      pais: 'España',
      estado: 'País Vasco',
      ciudad: 'Bilbao',
      codigoPostal: '48001',
      direccion: 'Av. del Norte 45',
      telefono: '+34 600 654 321',
      descripcion: 'Delegación comercial en el norte',
      editado: false,
    },
    {
      id: 3,
      nombre: 'Oficina Sur',
      pais: 'España',
      estado: 'Andalucía',
      ciudad: 'Sevilla',
      codigoPostal: '41001',
      direccion: 'Calle Sur 77',
      telefono: '+34 600 111 222',
      descripcion: 'Soporte técnico para clientes del sur',
      editado: false,
    },
  ]);

  const [showConfirm, setShowConfirm] = useState<number | null>(null);

  const handleInputChange = (id: number, field: keyof Direccion, value: string) => {
    setDirecciones(prev =>
      prev.map(d =>
        d.id === id ? { ...d, [field]: value, editado: true } : d
      )
    );
  };

  const eliminarDireccion = (id: number) => {
    setDirecciones(prev => prev.filter(d => d.id !== id));
    setShowConfirm(null);
  };

  const agregarDireccion = () => {
    setDirecciones(prev => [
      ...prev,
      {
        id: Date.now(),
        nombre: '',
        pais: '',
        estado: '',
        ciudad: '',
        codigoPostal: '',
        direccion: '',
        telefono: '',
        descripcion: '',
        editado: false,
      },
    ]);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Direcciones</h2>
        <button
          onClick={agregarDireccion}
          className="bg-blue-950 text-white px-4 py-2 rounded"
        >
          Añadir nueva dirección
        </button>
      </div>

      {direcciones.map((d) => (
        <div key={d.id} className=" rounded shadow-md bg-blue-950/20 relative overflow-auto">
          <table className="min-w-full border border-gray-300  text-xs bg-white">
            <thead className="bg-blue-950/80 text-white">
              <tr>
                <th className="text-left p-2 font-light">Nombre de la ubicación</th>
                <th className="text-left p-2 font-light">País</th>
                <th className="text-left p-2 font-light">Estado</th>
                <th className="text-left p-2 font-light">Ciudad</th>
                <th className="text-left p-2 font-light">Código postal</th>
                <th className="text-left p-2 font-light">Dirección completa</th>
                <th className="text-left p-2 font-light">Teléfono principal</th>
                <th className="text-left p-2 font-light">Descripción de la ubicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.nombre}
                    onChange={(e) => handleInputChange(d.id, 'nombre', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.pais}
                    onChange={(e) => handleInputChange(d.id, 'pais', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.estado}
                    onChange={(e) => handleInputChange(d.id, 'estado', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.ciudad}
                    onChange={(e) => handleInputChange(d.id, 'ciudad', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.codigoPostal}
                    onChange={(e) => handleInputChange(d.id, 'codigoPostal', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.direccion}
                    onChange={(e) => handleInputChange(d.id, 'direccion', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <input
                    value={d.telefono}
                    onChange={(e) => handleInputChange(d.id, 'telefono', e.target.value)}
                    className="w-full border rounded p-1"
                  />
                </td>
                <td className="p-2 border-t border-gray-200">
                  <textarea
                    value={d.descripcion}
                    onChange={(e) => handleInputChange(d.id, 'descripcion', e.target.value)}
                    className="w-full border rounded p-1"
                    rows={2}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end gap-2 p-3 text-xs">
            <button
              className={`px-4 py-1 rounded text-white cursor-pointer ${
                d.editado ? 'bg-blue-950' : 'bg-blue-950/40 cursor-default'
              }`}
              disabled={!d.editado}
            >
              Editar cambios
            </button>
            <button
              className="bg-red-700 text-white px-3 rounded-lg shadow hover:bg-red-700/80 cursor-pointer"
              onClick={() => setShowConfirm(d.id)}
            >
              x
            </button>
          </div>

          {showConfirm === d.id && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow space-y-4">
                <p>¿Estás seguro de eliminar esta dirección?</p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => eliminarDireccion(d.id)}
                    className="text-white bg-red-600 px-4 py-1 rounded"
                  >
                    Sí
                  </button>
                  <button
                    onClick={() => setShowConfirm(null)}
                    className="text-gray-600 px-4 py-1"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Direcciones;
