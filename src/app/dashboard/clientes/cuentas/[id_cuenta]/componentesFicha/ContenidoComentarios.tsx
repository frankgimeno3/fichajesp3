import React, { FC, useState, useEffect } from 'react';
import CardComentario from './cards/CardComentario';
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

  useEffect(() => {
    const cuenta = comentariosCuentas.cuentasConComentarios.find(c => c.id_cuenta === id_cuenta);
    if (!cuenta) {
      setComentarios([]);
      return;
    }

    const comentariosFormateados = cuenta.array_comentarios_cuenta.map(c => {
      const agente = agentes.find(a => a.id_agente === c.id_autor);
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
            className="bg-blue-600 text-white rounded-lg px-5 py-2 hover:bg-blue-700 self-end"
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
          />
        ))}
      </div>
    </div>
  );
};

export default ContenidoComentarios;
