import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import React, { FC } from 'react';

interface ImportarContactosProps {
  
}

const ImportarContactos: FC<ImportarContactosProps> = ({ }) => {
  return (
      <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Importación de contactos`} />
      ImportarContactos</div>
  );
};

export default ImportarContactos;