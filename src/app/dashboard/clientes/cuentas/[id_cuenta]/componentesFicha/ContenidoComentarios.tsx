import React, { FC, useState, useEffect } from "react";
import CardComentario from "./cards/CardComentario";
import comentariosCuentas from "@/app/contents/comentariosCuentasContents.json";
import agentes from "@/app/contents/agentesContents.json";

interface ContenidoComentariosProps {
  id_cuenta: string;
}

interface Comentario {
  id_comentario: string;
  autor: string;
  fecha: string;
  contenido: string;
}

const ContenidoComentarios: FC<ContenidoComentariosProps> = ({ id_cuenta }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [modal, setModal] = useState<{
    tipo: "editar" | "borrar" | null;
    comentario?: Comentario;
  }>({ tipo: null });

  useEffect(() => {
    const cuenta = comentariosCuentas.cuentasConComentarios.find(
      (c) => c.id_cuenta === id_cuenta
    );
    if (!cuenta) {
      setComentarios([]);
      return;
    }

    const comentariosFormateados = cuenta.array_comentarios_cuenta.map((c) => {
      const agente = agentes.find((a) => a.id_agente === c.id_autor);
      const nombreAutor = agente ? agente.nombre_agente : c.id_autor;

      return {
        id_comentario: c.id_comentario,
        autor: nombreAutor,
        fecha: new Date(c.fecha_comentario).toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        contenido: c.contenido_comentario,
      };
    });

    setComentarios(comentariosFormateados);
  }, [id_cuenta]);

  const agregarComentario = () => {
    if (nuevoComentario.trim() === "") return;

    const hoy = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const comentario: Comentario = {
      id_comentario: `temp_${Date.now()}`,
      autor: "Usuario Actual",
      fecha: hoy,
      contenido: nuevoComentario,
    };

    setComentarios([comentario, ...comentarios]);
    setNuevoComentario("");
    setMostrarInput(false);
  };

  const cerrarModal = () => setModal({ tipo: null });

   useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrarModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleConfirmar = () => {
    window.location.reload();  
  };

  return (
    <div className="flex flex-col">
      <div className="text-right w-full">
        <button
          className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/90"
          onClick={() => setMostrarInput(!mostrarInput)}
        >
          {mostrarInput ? "Cancelar" : "Añadir comentario"}
        </button>
      </div>

      {mostrarInput && (
        <div className="flex flex-col gap-2 py-4">
          <textarea
            value={nuevoComentario}
            onChange={(e) => setNuevoComentario(e.target.value)}
            placeholder="Escribe un nuevo comentario..."
            className="border border-gray-300 rounded-lg p-3 resize-none w-full"
          />
          <button
            onClick={agregarComentario}
            className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-700 self-end cursor-pointer text-sm"
          >
            Guardar comentario
          </button>
        </div>
      )}

      <div className="flex flex-col py-5 gap-3">
        {comentarios.map((comentario) => (
          <CardComentario
            key={comentario.id_comentario}
            autor={comentario.autor}
            fecha={comentario.fecha}
            contenido={comentario.contenido}
            onEditar={() => setModal({ tipo: "editar", comentario })}
            onBorrar={() => setModal({ tipo: "borrar", comentario })}
          />
        ))}
      </div>

       {modal.tipo && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative">
             <button
              onClick={cerrarModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            {modal.tipo === "editar" && (
              <div className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  Editar comentario
                </h2>
                <textarea
                  defaultValue={modal.comentario?.contenido}
                  className="border border-gray-300 rounded-lg p-3 resize-none"
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={cerrarModal}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmar}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                  >
                    Modificar
                  </button>
                </div>
              </div>
            )}

            {modal.tipo === "borrar" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  ¿Seguro que quieres borrar el comentario?
                </h2>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={cerrarModal}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                  >
                    No, cancelar
                  </button>
                  <button
                    onClick={handleConfirmar}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                  >
                    Sí, borrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContenidoComentarios;
