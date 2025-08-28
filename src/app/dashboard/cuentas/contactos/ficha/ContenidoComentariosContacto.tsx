import React, { FC, useState } from 'react';
import CardComentarioContacto from './CardComentarioContacto';

interface ContenidoComentariosContactoProps {}

interface Comentario {
  autor: string;
  fecha: string;
  contenido: string;
}

const ContenidoComentariosContacto: FC<ContenidoComentariosContactoProps> = ({ }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      autor: "Frank Gimeno",
      fecha: "24 Febrero 2025",
      contenido: "Este es un comentario inicial de ejemplo."
    }
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");

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
  };

  return (
    <div>
      <p className="mb-4 text-gray-600">
        Aviso: Los comentarios agregados aquí se agregarán automáticamente también en la ficha de la empresa
      </p>

       <div className="flex flex-row gap-2 mb-6">
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe un nuevo comentario..."
          className="border border-gray-300 rounded-lg p-3 resize-none w-full"
        />
        <button
          onClick={agregarComentario}
          className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-700"
        >
          Agregar comentario
        </button>
      </div>

       {comentarios.map((comentario, idx) => (
        <CardComentarioContacto
          key={idx}
          autor={comentario.autor}
          fecha={comentario.fecha}
          contenido={comentario.contenido}
        />
      ))}
    </div>
  );
};

export default ContenidoComentariosContacto;
