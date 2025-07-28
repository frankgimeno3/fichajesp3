"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ResumenPublicacionProps {
  
}

const ResumenPublicacion: FC<ResumenPublicacionProps> = ({ }) => {
    const router = useRouter()
  return (
    <div>
        <button onClick={()=>{router.push('/dashboard/seguimientos/campanas/resumen')}}>
            Ver campaña completa
        </button>
        <p>Resumen de la publicacion</p>
    </div>
  );
};

export default ResumenPublicacion;