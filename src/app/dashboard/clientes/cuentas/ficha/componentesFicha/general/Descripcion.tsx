"use client"
import React from 'react';

interface DescripcionProps {}

const Descripcion: React.FC<DescripcionProps> = () => {
  const value = `Esta es la descripción interna del componente. Aquí puedes mostrar información general que no depende de props.`

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Descripción</h2>
      <textarea
        value={value}
        className="w-full h-40 p-2 border rounded"
        readOnly
      />
    </div>
  );
};

export default Descripcion;
