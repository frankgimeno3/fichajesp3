import React, { FC } from 'react';

interface Fase0InicialProps {
    setFase: (value: string) => void;

}

const Fase0Inicial: FC<Fase0InicialProps> = ({setFase}) => {
  return (
    <div>
        
          <p className='font-bold text-gray-500 '>Selecciona una opción</p>
          <div className='flex flex-col py-12 gap-5'>

          <p>Puedes crear en masa para crear nuevos números de ediciones ya existentes, manteniendo los productos que ya contienen, con sus precios y características...</p>
          <p>... O puedes crear una sola edicion especial, a la que luego añadirás los productos que necesites con sus especificaciones</p>
          </div>
          <div className='flex flex-row gap-2'>
            <button className='bg-blue-950 text-white px-2 py-1 rounded-lg shadow cursor-pointer' onClick={()=>{setFase("enMasa")}}>
              Crear en masa
            </button>
            <button className='bg-blue-950 text-white px-2 py-1 rounded-lg shadow cursor-pointer' onClick={()=>{setFase("especifica")}}>
              Crear una edición especial
            </button>
          </div>    
    </div>
  );
};

export default Fase0Inicial;