import React, { FC, useState } from 'react';
import CardComentario from './cards/CardComentario';

interface ContenidoComentariosProps {}

interface Comentario {
  autor: string;
  fecha: string;
  contenido: string;
}

const ContenidoComentarios: FC<ContenidoComentariosProps> = ({ }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      autor: "Frank Gimeno",
      fecha: "24 Febrero 2025",
      contenido: "Este es un comentario inicial de ejemplo."
    }
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);

  const agregarComentario = () => {
    if (nuevoComentario.trim() === "") return;

    const hoy = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const comentario: Comentario = {
      autor: "Usuario Actual",
      fecha: hoy,
      contenido: nuevoComentario,
    };

    setComentarios([comentario, ...comentarios]);
    setNuevoComentario("");
    setMostrarInput(false);
  };

  return (
    <div className="flex flex-col">
      {/* Botón añadir */}
      <div className="text-right w-full">
        <button
          className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-950/90"
          onClick={() => setMostrarInput(!mostrarInput)}
        >
          {mostrarInput ? "Cancelar" : "Añadir comentario"}
        </button>
      </div>

      {/* Input nuevo comentario */}
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
            className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-700 self-end"
          >
            Guardar comentario
          </button>
        </div>
      )}

      {/* Listado de comentarios */}
      <div className="flex flex-col py-5 gap-3">
        {comentarios.map((comentario, idx) => (
          <CardComentario
            key={idx}
            autor={comentario.autor}
            fecha={comentario.fecha}
            contenido={comentario.contenido}
          />
        ))}
      </div>
    </div>
  );
};

export default ContenidoComentarios;
