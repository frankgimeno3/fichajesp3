"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface CardComentarioProps {
  autor: string;
  fecha: string;
  contenido: string;
}

const CardComentarioContacto: FC<CardComentarioProps> = ({ autor, fecha, contenido }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"editar" | "borrar" | null>(null);
  const [editContenido, setEditContenido] = useState(contenido);
  const router = useRouter();

  const openModal = (type: "editar" | "borrar") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
    setEditContenido(contenido);  
  };

  const handleEditar = () => {
    console.log("Nuevo contenido editado:", editContenido);
    closeModal();
  };

  const handleBorrar = () => {
    router.push("/dashboard/cuentas/contactos/ficha");
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-white border border-gray-100 rounded shadow p-6 my-2">
        <div className="flex flex-5 flex-col w-full">
          <div className="flex flex-row">
            <p className="font-bold pr-1">Autor:</p>
            <p>{autor}</p>
          </div>
          <div className="flex flex-row">
            <p className="font-bold pr-1">Fecha:</p>
            <p>{fecha}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold ">Contenido:</p>
            <p>{contenido}</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-center justify-center items-center gap-3">
          <button
            className="text-gray-500 bg-gray-100/30 hover:bg-gray-100/50 cursor-pointer rounded-lg shadow px-5 py-2"
            onClick={() => openModal("editar")}
          >
            Editar
          </button>
          <button
            className="text-gray-500 bg-gray-100/30 hover:bg-gray-100/50 cursor-pointer rounded-lg shadow px-5 py-2"
            onClick={() => openModal("borrar")}
          >
            Borrar
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-[500px] relative">
            {/* Botón X */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {modalType === "editar" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">Editar comentario</h2>
                <textarea
                  value={editContenido}
                  onChange={(e) => setEditContenido(e.target.value)}
                  className="border border-gray-300 rounded-lg p-3 resize-none w-full"
                  rows={4}
                />
                <button
                  onClick={handleEditar}
                  className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-700"
                >
                  Guardar edición
                </button>
              </div>
            )}

            {modalType === "borrar" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-bold">¿Seguro que deseas borrar el comentario?</h2>
                <div className="flex flex-row justify-end gap-2">
                  <button
                    onClick={handleBorrar}
                    className="bg-red-600 text-white rounded-lg px-5 py-2 hover:bg-red-700"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 text-gray-800 rounded-lg px-5 py-2 hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CardComentarioContacto;
