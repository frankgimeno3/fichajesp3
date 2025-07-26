import React, { FC } from 'react';

interface ContenidoGeneralProps {
  
}

const ContenidoGeneral: FC<ContenidoGeneralProps> = ({ }) => {
  return (
    <div className='flex flex-col'>
      <div className='py-12'>
        <p>Nombre comercial de la empresa: <span className='pl-5'>Valor</span></p> 
        <p>País: <span className='pl-5'>Valor</span></p> 
        <p>Ciudad: <span className='pl-5'>Valor</span></p> 
        <p>Código postal: <span className='pl-5'>Valor</span></p> 
        <p>Teléfono principal (con prefijo): <span className='pl-5'>Valor</span></p> 
                <p>Sector: <span className='pl-5'>Valor</span></p> 
        <p>Código postal: <span className='pl-5'>Valor</span></p> 

      </div>

      <div className='py-12'>
        <p>Ferias asistidas: <span className='pl-5'>Valor</span></p> 
        <p>Distribuidores: <span className='pl-5'>Valor</span></p> 
        <p>Agencia: <span className='pl-5'>Valor</span></p> 
        <p>Grupo: <span className='pl-5'>Valor</span></p> 
        <p>Filiales: <span className='pl-5'>Valor</span></p> 
        <p>Categoría comercial: <span className='pl-5'>Valor</span></p> 
      </div>

    </div>
  );
};

export default ContenidoGeneral;