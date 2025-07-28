import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface ContenidoGeneralContactoProps {
  
}

const ContenidoGeneralContacto: FC<ContenidoGeneralContactoProps> = ({ }) => {
        const router = useRouter();
    
  return (
    <div>
        <p>Nombre del contacto</p>
        <p>Nombre del contacto</p>
        <p>Apellidos</p>
        <p>Empresa actual</p>
        <button onClick={()=>{router.push('/dashboard/clientes/ficha')}}>Ir a la ficha de la empresa</button>
        <p>Idioma</p>
        <p>Cargo actual</p>
        <p>Conocido en ...</p>
        <p>Contactado en feria...</p>
                <p>Emails de contacto</p>
        <p>Teléfonos de contacto</p>
        <p>Suscripciones con vidrioperfil</p>
        <p>Otros datos de interés</p>

    </div>
  );
};

export default ContenidoGeneralContacto;