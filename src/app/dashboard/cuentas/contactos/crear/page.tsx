import React, { FC, useState } from 'react';

interface CrearContactoProps {
  
}

const CrearContacto: FC<CrearContactoProps> = ({ }) => {
  const [faseCrearContacto, setFaseCrearContacto] = useState(0)
  return (
    <div>CrearContacto</div>
  );
};

export default CrearContacto;