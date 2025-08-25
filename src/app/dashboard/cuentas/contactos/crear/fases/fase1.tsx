import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Fase1Props {
  setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;

}

const Fase1: FC<Fase1Props> = ({ setFaseCrearContacto }) => {
  const router = useRouter()
  return (
    <div>
      <p>Contacto creado!</p>
      <p>Deseas asociarlo a una cuenta? </p>
      <button onClick={() => { setFaseCrearContacto(2) }} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
        Sí
      </button>
      <button onClick={() => { router.push('/dashboard/cuentas/contactos/ficha') }} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
        No, ver la ficha completa del contacto
      </button>
    </div>
  );
};

export default Fase1;