import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ImportarProps {

}

const Importar: FC<ImportarProps> = ({ }) => {
  const router = useRouter()
  return (
    <div className='flex flex-col p-5 gap-5'>
      <div className='flex flex-row cursor-pointer bg-blue-950 hover:bg-blue-950/90 rounded-lg shadow-xl p-12'
      onClick={()=>{router.push("/dashboard/operaciones/data/importar/contactos")}}>
        <p className='font-bold text-white'>Importar contactos</p>
      </div>
      <div className='flex flex-row cursor-pointer bg-blue-950 hover:bg-blue-950/90 rounded-lg shadow-xl p-12'
      onClick={()=>{router.push("/dashboard/operaciones/data/importar/cuentas")}}>
        <p className='font-bold text-white'>Importar cuentas</p>
      </div>
    </div>
  );
};

export default Importar;