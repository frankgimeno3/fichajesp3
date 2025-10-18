import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ExportarProps {
  
}

const Exportar: FC<ExportarProps> = ({ }) => {
   const router = useRouter()
  return (
    <div className='flex flex-col p-5 gap-5'>
      <div className='flex flex-row cursor-pointer bg-blue-950 hover:bg-blue-950/90 rounded-lg shadow-xl p-12'
      onClick={()=>{router.push("/dashboard/operaciones/data/exportar/contactos")}}>
        <p className='font-bold text-white'>Exportar contactos</p>
      </div>
      <div className='flex flex-row cursor-pointer bg-blue-950 hover:bg-blue-950/90 rounded-lg shadow-xl p-12'
      onClick={()=>{router.push("/dashboard/operaciones/data/exportar/cuentas")}}>
        <p className='font-bold text-white'>Exportar cuentas</p>
      </div>
    </div>
  );  
};

export default Exportar;