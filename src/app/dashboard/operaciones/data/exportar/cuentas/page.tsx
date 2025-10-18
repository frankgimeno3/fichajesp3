import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import React, { FC } from 'react';

interface ExportarCuentasProps {
  
}

const ExportarCuentas: FC<ExportarCuentasProps> = ({ }) => {
  return (
      <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Exportación de cuentas`} />
      ExportarCuentas</div>
  );
};

export default ExportarCuentas;