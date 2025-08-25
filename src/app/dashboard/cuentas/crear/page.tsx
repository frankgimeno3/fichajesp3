"use client"
import React, { FC, useState } from 'react';
import Fase0 from './fases/fase0';
import Fase1 from './fases/fase1';
import Fase2 from './fases/fase2';
import Fase3 from './fases/fase3';
import MiddleNav from '@/app/dashboard/0dashboardcomponents/MiddleNav';

interface CrearCuentaProps {
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
}

const CrearCuenta: FC<CrearCuentaProps> = ({ }) => {
  const [faseCrearCuenta, setFaseCrearCuenta] = useState(0)
  const [nombre, setNombre] = useState("")
  const [apellidos, setApellidos] = useState("")  
  const [telefono, setTelefono] = useState("")
  const [mail, setMail] = useState("")
  const [cargo, setCargo] = useState("")
  return (
    <div className="flex flex-col  h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Crear contacto  `} />
      <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">      
        {faseCrearCuenta == 0 && <Fase0 setFaseCrearCuenta={setFaseCrearCuenta} />}
        {faseCrearCuenta == 1 && <Fase1 setFaseCrearCuenta={setFaseCrearCuenta} />}
        {faseCrearCuenta == 2 && <Fase2 setFaseCrearCuenta={setFaseCrearCuenta} />}
        {faseCrearCuenta == 3 && <Fase3 />}
      </div>
    </div>
  );
};

export default CrearCuenta;