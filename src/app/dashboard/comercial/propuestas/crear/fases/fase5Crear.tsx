import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Fase5CrearProps {
  setFaseCreacionPropuesta: (fase: number) => void;
}

const Fase5Crear: FC<Fase5CrearProps> = ({ }) => {
  const router = useRouter()

  return (
    <div>
      <p>Revisión final</p>
      <div className='flex flex-row'>
        <p>Introduce un nombre para tu propuesta</p>
        <input className="border rounded p-2" placeholder='Prop 01.433241212' />
      </div>
      <p>Contenido</p>

          <div className='flex flex-row'>
        <p>Comentarios adicionales:</p>
        <textarea className="border rounded p-2" placeholder='Introduce aquí comemntarios adicionales si los hay' />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 "
        onClick={() => { router.push("/dashboard/comercial/propuestas/propuesta") }} >
        Confirmar y crear propuesta
      </button>
    </div>
  );
};

export default Fase5Crear;