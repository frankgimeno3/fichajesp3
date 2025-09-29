"use client";

import React, { FC, useState } from 'react';
import Fase0 from './fasesc/fase0';
import Fase1 from './fasesc/fase1';
import Fase2 from './fasesc/fase2';
import Fase3 from './fasesc/fase3';
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';

const CrearCuenta: FC = () => {
  const [faseCrearCuenta, setFaseCrearCuenta] = useState(0);

  // Fase 0
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mail, setMail] = useState('');

  // Fase 1
  const [nombreCuenta, setNombreCuenta] = useState('');
  const [agenteAsignado, setAgenteAsignado] = useState('');
  const [paisCuenta, setPaisCuenta] = useState('');
  const [telefonoCuenta, setTelefonoCuenta] = useState('');
  const [descripcionCuenta, setDescripcionCuenta] = useState('');

  // Fase 2
  const [nombreUbicacion, setNombreUbicacion] = useState('');
  const [paisUbicacion, setPaisUbicacion] = useState('');
  const [estadoUbicacion, setEstadoUbicacion] = useState('');
  const [ciudadUbicacion, setCiudadUbicacion] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [direccionCompleta, setDireccionCompleta] = useState('');
  const [telefonoPrincipal, setTelefonoPrincipal] = useState('');
  const [descripcionUbicacion, setDescripcionUbicacion] = useState('');

  // Fase 3
  const [cargo, setCargo] = useState('');

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Crear cuenta `} />
      <div className="bg-gray-100 h-full min-h-screen p-12 text-gray-600">
        {faseCrearCuenta === 0 && (
          <Fase0
            setFaseCrearCuenta={setFaseCrearCuenta}
           
          />
        )}
        {faseCrearCuenta === 1 && (
          <Fase1
            setFaseCrearCuenta={setFaseCrearCuenta}
            setNombreCuenta={setNombreCuenta}
            setAgenteAsignado={setAgenteAsignado}
            setPais={setPaisCuenta}
            setTelefono={setTelefonoCuenta}
            setDescripcion={setDescripcionCuenta}
          />
        )}
        {faseCrearCuenta === 2 && (
          <Fase2
            setNombreUbicacion={setNombreUbicacion}
            setPaisUbicacion={setPaisUbicacion}
            setEstadoUbicacion={setEstadoUbicacion}
            setCiudadUbicacion={setCiudadUbicacion}
            setCodigoPostal={setCodigoPostal}
            setDireccionCompleta={setDireccionCompleta}
            setTelefonoPrincipal={setTelefonoPrincipal}
            setDescripcionUbicacion={setDescripcionUbicacion}
            setFaseCrearCuenta={setFaseCrearCuenta}
          />
        )}
        {faseCrearCuenta === 3 && (
          <Fase3
            setFaseCrearCuenta={setFaseCrearCuenta}
            setNombre={setNombre}
            setApellidos={setApellidos}
            setTelefono={setTelefono}
            setMail={setMail}
          />
        )}
      </div>
    </div>
  );
};

export default CrearCuenta;
