"use client";
import React, { FC, useState } from "react";
import { useParams } from "next/navigation";
import ContenidoGeneralContacto from "../componentesFichaContacto/ContenidoGeneralContacto";
import contactsContents from '@/app/contents/contactsContents.json';
import BotonFlotante from "@/app/general_components/componentes_recurrentes/BotonFlotante";
import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";

const FichaContacto: FC = () => {
  const params = useParams();

  const contactoId: string | null = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id ?? null;

 
  const [isContenidoEdited, setIsContenidoEdited] = useState(false);

  const contacto = contactsContents.find((c) => c.id_contacto === contactoId);

  if (!contacto) {
    return (
      <div className="bg-gray-100 min-h-screen p-12 text-gray-600">
        <h2 className="text-lg font-semibold">Contacto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Ficha del contacto ${contacto.nombre_completo_contacto}`} />
      <div className="bg-gray-100 min-h-screen p-12 text-gray-600 relative">

        <div className="flex flex-row mt-3 relative">
          <div className="p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300 bg-white z-30 rounded-tl-lg">
            Datos Generales
          </div>
        </div>

        <div className="bg-white p-12 shadow-xl rounded-b-lg">
          <ContenidoGeneralContacto contacto={contacto} setIsContenidoEdited={setIsContenidoEdited} />
        </div>

        <BotonFlotante isContenidoEdited={isContenidoEdited} />
      </div>
    </div>
  );
};

export default FichaContacto;
