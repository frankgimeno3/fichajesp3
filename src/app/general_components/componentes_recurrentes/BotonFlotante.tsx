"use client";
import React from "react";

interface BotonFlotanteProps {
  isContenidoEdited: boolean;
}

const BotonFlotante: React.FC<BotonFlotanteProps> = ({ isContenidoEdited }) => {
  if (!isContenidoEdited) return null;

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-5 rounded-2xl shadow-lg transition-all duration-300 z-50 cursor-pointer"
    >
      Guardar mis cambios
    </button>
  );
};

export default BotonFlotante;
