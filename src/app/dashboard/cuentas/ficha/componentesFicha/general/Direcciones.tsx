"use client"
import React, { useState } from 'react';

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
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Direcciones</h2>
      {direcciones.map((d) => (
        <div key={d.id} className="border p-4 rounded shadow-sm space-y-2 bg-white relative">
          <input value={d.nombre} onChange={e => handleInputChange(d.id, 'nombre', e.target.value)} className="w-full" placeholder="Nombre de la ubicación" />
          <input value={d.pais} onChange={e => handleInputChange(d.id, 'pais', e.target.value)} className="w-full" placeholder="País" />
          <input value={d.estado} onChange={e => handleInputChange(d.id, 'estado', e.target.value)} className="w-full" placeholder="Estado" />
          <input value={d.ciudad} onChange={e => handleInputChange(d.id, 'ciudad', e.target.value)} className="w-full" placeholder="Ciudad" />
          <input value={d.codigoPostal} onChange={e => handleInputChange(d.id, 'codigoPostal', e.target.value)} className="w-full" placeholder="Código postal" />
          <input value={d.direccion} onChange={e => handleInputChange(d.id, 'direccion', e.target.value)} className="w-full" placeholder="Dirección completa" />
          <input value={d.telefono} onChange={e => handleInputChange(d.id, 'telefono', e.target.value)} className="w-full" placeholder="Teléfono principal" />
          <textarea value={d.descripcion} onChange={e => handleInputChange(d.id, 'descripcion', e.target.value)} className="w-full" placeholder="Descripción de la ubicación" />
          
          <div className="flex justify-end gap-2 mt-2">
            <button
              className={`px-4 py-1 rounded text-white ${d.editado ? 'bg-blue-950' : 'bg-blue-950/40 cursor-default'}`}
              disabled={!d.editado}
            >
              Editar cambios
            </button>
            <button
              className="text-red-600"
              onClick={() => setShowConfirm(d.id)}
            >
              Eliminar
            </button>
          </div>

          {showConfirm === d.id && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <div className="bg-white p-4 rounded shadow space-y-4">
                <p>¿Estás seguro?</p>
                <div className="flex justify-end gap-4">
                  <button onClick={() => eliminarDireccion(d.id)} className="text-white bg-red-600 px-4 py-1 rounded">Sí</button>
                  <button onClick={() => setShowConfirm(null)} className="text-gray-600 px-4 py-1">Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={agregarDireccion} className="bg-blue-950 text-white px-4 py-2 rounded">Añadir nueva dirección</button>
    </div>
  );
};

export default Direcciones;
