'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ContenidoGeneral from './componentesFicha/ContenidoGeneral';
import ContenidoComentarios from './componentesFicha/ContenidoComentarios';
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import BotonFlotante from '@/app/general_components/componentes_recurrentes/BotonFlotante';
import cuentas from "@/app/contents/cuentasContents.json";
import comentariosCuentas from "@/app/contents/comentariosCuentasContents.json";
import agentes from "@/app/contents/agentesContents.json";
import { InterfazCuenta } from '@/app/interfaces/interfaces';

interface Comentario {
  id_comentario: string;
  autor: string;
  fecha: string;
  contenido: string;
}

const FichaCliente = () => {
  const params = useParams();

  const id_cuenta = params?.id_cuenta as string;

  const [pestana, setPestana] = useState<'general' | 'comentarios'>('general');
  const [isContenidoEdited, setIsContenidoEdited] = useState(false);
  
  // Estados de cuenta (desde ContenidoGeneral)
  const [cuentaEditable, setCuentaEditable] = useState<InterfazCuenta | undefined>(
    () => cuentas.find((c) => c.id_cuenta === id_cuenta)
  );

  // Estados de comentarios (desde ContenidoComentarios)
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);
  const [modal, setModal] = useState<{
    tipo: "editar" | "borrar" | null;
    comentario?: Comentario;
  }>({ tipo: null });

  useEffect(() => {
    const cuenta = cuentas.find((c) => c.id_cuenta === id_cuenta);
    setCuentaEditable(cuenta);
  }, [id_cuenta]);

  // Cargar comentarios desde JSON
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

  if (!id_cuenta) {
    return <p className="text-red-500">El id_cuenta introducido no corresponde a ninguna cuenta</p>;
  }

  return (
    <div className="flex flex-col h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={`Ficha de la cuenta ${id_cuenta}`} />

      <div className="bg-gray-200 min-h-screen p-12 text-gray-600">
        <div className="flex flex-row justify-between  relative">
          <div className='flex flex-row justify-left mt-2'>
            {[
              { key: 'general', label: 'Datos Generales' },
              { key: 'comentarios', label: 'Comentarios' },
            ].map(({ key, label }, index) => (
              <div
                key={key}
                className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
                ${pestana === key
                    ? 'bg-gray-100 z-30 rounded-tl-lg'
                    : 'bg-blue-950 text-white z-10 hover:bg-blue-950/80'
                  }`}
                style={{ marginLeft: index === 0 ? '0px' : '-5px' }}
                onClick={() => setPestana(key as typeof pestana)}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-4 mb-4 items-center">
            <Link
              href={`/dashboard/comercial/propuestas/cuentas/${id_cuenta}`}
              className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            >
              <p>Propuestas</p>
            </Link>
          </div>
        </div>

        <div className="bg-white p-12 shadow-xl rounded-b-lg">
          {pestana === 'general' && cuentaEditable && (
            <ContenidoGeneral
              id_cuenta={id_cuenta}
              cuentaEditable={cuentaEditable}
              setCuentaEditable={setCuentaEditable}
              setIsContenidoEdited={setIsContenidoEdited}
            />
          )}

          {pestana === 'comentarios' && (
            <ContenidoComentarios 
              id_cuenta={id_cuenta}
              comentarios={comentarios}
              setComentarios={setComentarios}
              nuevoComentario={nuevoComentario}
              setNuevoComentario={setNuevoComentario}
              mostrarInput={mostrarInput}
              setMostrarInput={setMostrarInput}
              modal={modal}
              setModal={setModal}
            />
          )}
        </div>
      </div>

      <BotonFlotante isContenidoEdited={isContenidoEdited} />
    </div>
  );
};

export default FichaCliente;
