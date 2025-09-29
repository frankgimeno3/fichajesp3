"use client";
import React, { FC, useState } from "react";
import { useParams } from "next/navigation";
import ContenidoGeneralContacto from "../ContenidoGeneralContacto";
import ContenidoComentariosContacto from "../ContenidoComentariosContacto";
import contactsContents from '../../../../../contents/contactsContents.json';
import BotonFlotante from "@/app/general_components/componentes_recurrentes/BotonFlotante";
 
const FichaContacto: FC = () => {
  const params = useParams();
  const contactoId = params?.id ? parseInt(params.id as string, 10) : null;

  const [pestana, setPestana] = useState<
    "general" | "comentarios" | "administrativo" | "registro"
  >("general");

  const [isContenidoEdited, setIsContenidoEdited] = useState(false);

  const contacto = contactsContents.find((c) => c.id === contactoId);

  if (!contacto) {
    return (
      <div className="bg-gray-100 min-h-screen p-12 text-gray-600">
        <h2 className="text-lg font-semibold">Contacto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-12 text-gray-600 relative">
      <h2 className="text-lg font-semibold">
        Ficha de contacto
        <span className="px-6 font-light">
          Código Contacto: {contacto.codigoContacto}
        </span>
        <span className="px-6 font-light">Nombre: {contacto.nombreCompleto}</span>
      </h2>

      <div className="flex flex-row mt-3 relative">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${
              pestana === "general"
                ? "bg-white z-30 rounded-tl-lg"
                : "bg-gray-200/70 z-10 hover:bg-gray-200"
            }`}
          onClick={() => setPestana("general")}
        >
          Datos Generales
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${
              pestana === "comentarios"
                ? "bg-white z-30 rounded-tl-lg"
                : "bg-gray-200/70 z-20 hover:bg-gray-200"
            }`}
          style={{ marginLeft: "-5px" }}
          onClick={() => setPestana("comentarios")}
        >
          Comentarios
        </div>
      </div>

      <div className="bg-white p-12 shadow-xl rounded-b-lg">
        {pestana === "general" && (
          <ContenidoGeneralContacto 
            contacto={contacto} 
            setIsContenidoEdited={setIsContenidoEdited} 
          />
        )}
        {pestana === "comentarios" && (
          <ContenidoComentariosContacto contacto={contacto} />
        )}
      </div>

       <BotonFlotante isContenidoEdited={isContenidoEdited} />
    </div>
  );
};

export default FichaContacto;
