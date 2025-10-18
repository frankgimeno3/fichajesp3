import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import React, { FC } from 'react';

interface ImportarCuentasProps {
  
}

const ImportarCuentas: FC<ImportarCuentasProps> = ({ }) => {
  return (
     <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Importación de cuentas`} />
      ImportarCuentas</div>
  );
};

export default ImportarCuentas;