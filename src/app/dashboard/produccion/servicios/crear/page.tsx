"use client";
import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC, useState } from 'react';
import Fase0Inicial from './fases/Fase0Inicial';
import Fase1enMasa from './fases/Fase1enMasa';
import Fase1Especifica from './fases/Fase1especifica';
import Fase2crearPublicaciones from './fases/Fase2crearPublicaciones';
import Fase3Confirmacion from './fases/Fase3Confirmacion';

export interface Publicacion {
  name: string;
  deadline: string;
  fechaPublicacion: string;
  edicionEspecial?: string;
  tematica?: string;
  desdeNumero?: string;
  hastaNumero?: string;
}

interface CrearServiciosProps {}

const CrearServicios: FC<CrearServiciosProps> = () => {
  const [fase, setFase] = useState("inicial");

  // Estado compartido entre fases
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Crear Publicaciones`} />

      <div className="bg-gray-200 min-h-screen text-gray-600">
        <div className='m-8 rounded-lg shadow-xl bg-white min-h-screen p-12'>

          {fase === "inicial" && (
            <Fase0Inicial setFase={setFase} />
          )}

          {fase === "enMasa" && (
            <Fase1enMasa
              setFase={setFase}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems} 
            />
          )}

          {fase === "especifica" && (
  <Fase1Especifica
  selectedItems={selectedItems}       
  setSelectedItems={setSelectedItems} 
  setFase={setFase}
  publicaciones={publicaciones}
  setPublicaciones={setPublicaciones}
/>
          )}

          {fase === "crearPublicaciones" && (
            <Fase2crearPublicaciones
              selectedItems={selectedItems}
              publicaciones={publicaciones}
              setPublicaciones={setPublicaciones}
              setFase={setFase}
            />
          )}

          {fase === "FaseConfirmacion" && (
            <Fase3Confirmacion
              selectedItems={selectedItems}
              publicaciones={publicaciones}
              setFase={setFase}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default CrearServicios;
