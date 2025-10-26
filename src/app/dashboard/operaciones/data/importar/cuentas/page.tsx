"use client"
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import React, { FC, useState } from 'react';

interface ImportarCuentasProps {
  
}

const ImportarCuentas: FC<ImportarCuentasProps> = ({ }) => {
  const [faseImportacionCuenta, setFaseImportacionCuenta]=useState(1)
  return (
     <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Importación de cuentas`} />
                 <div className="bg-white mx-12 my-6 p-12 rounded-xl shadow">
        <p>Importación de cuentas</p>
       </div>
       </div>
  );
};

export default ImportarCuentas;