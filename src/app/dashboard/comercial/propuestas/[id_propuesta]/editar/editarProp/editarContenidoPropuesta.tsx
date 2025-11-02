// TablaContenidoPropuesta.tsx
import React, { FC, useState, useEffect } from "react";
import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";
import AnadirContenido from "./modals/AnadirContenido";
 
interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: number;
  descuento_unitario?: number;
  estadoMaterial?: string;
  urlcontenido?: string;
}

interface TablaContenidoPropuestaProps {
  codigoPropuesta: string;
}

const TablaContenidoPropuesta: FC<TablaContenidoPropuestaProps> = ({ codigoPropuesta }) => {
  const propuestasData = propuestas as InterfazPropuesta[];

  const propuesta_seleccionada = propuestasData.find(
    (p) => p.detalles_propuesta.id_propuesta === codigoPropuesta
  );

  if (!propuesta_seleccionada) {
    return <div>No se encontró la propuesta con código: {codigoPropuesta}</div>;
  }

  const contenidoInicial: FilaContenido[] = propuesta_seleccionada.contenido_propuesta.map(
    (item) => ({
      medio: item.medio,
      publicacion: item.publicacion,
      producto: item.producto,
      precio: item.precio_producto,
      descuento_unitario: item.descuento_unitario,
      estadoMaterial: "",
      urlcontenido: "",
    })
  );

  const [filas, setFilas] = useState<FilaContenido[]>(contenidoInicial);
  const [filaAEliminar, setFilaAEliminar] = useState<number | null>(null);
  const [showAgregar, setShowAgregar] = useState(false);

  const confirmarEliminar = () => {
    if (filaAEliminar !== null) {
      setFilas(filas.filter((_, i) => i !== filaAEliminar));
      setFilaAEliminar(null);
    }
  };

  // 🔹 Cerrar modales con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showAgregar) setShowAgregar(false);
        if (filaAEliminar !== null) setFilaAEliminar(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showAgregar, filaAEliminar]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border shadow-xs border-gray-100 text-center text-sm">
        <thead>
          <tr className="bg-blue-950/80 text-white">
            <th className="px-4 py-2">Medio</th>
            <th className="px-4 py-2">Publicación</th>
            <th className="px-4 py-2">Producto</th>
            <th className="px-4 py-2">Precio tarifa</th>
            <th className="px-4 py-2">Descuento unitario</th>
            <th className="px-4 py-2">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <tr key={index} className="bg-white text-gray-700">
              <td className="px-4 py-2">{fila.medio}</td>
              <td className="px-4 py-2">{fila.publicacion}</td>
              <td className="px-4 py-2">{fila.producto}</td>
              <td className="px-4 py-2">{fila.precio}</td>
              <td className="px-4 py-2">{fila.descuento_unitario}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => setFilaAEliminar(index)}
                  className="text-red-600 font-bold text-xl hover:text-red-800 cursor-pointer"
                  aria-label={`Eliminar fila ${index + 1}`}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => setShowAgregar(true)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full mt-2 cursor-pointer"
      >
        + Agregar fila
      </button>

      {/* Modal eliminar */}
      {filaAEliminar !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center">
            <p className="mb-4">¿Seguro que quieres eliminar esta fila?</p>
            <div className="flex justify-around">
              <button
                onClick={() => setFilaAEliminar(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar ×
              </button>
              <button
                onClick={confirmarEliminar}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Agregar (extraído en componente aparte) */}
      {showAgregar && (
        <AnadirContenido
          onClose={() => setShowAgregar(false)}
          onAgregar={(nuevaFila) => {
            setFilas([...filas, nuevaFila]);
            setShowAgregar(false);
          }}
        />
      )}
    </div>
  );
};

export default TablaContenidoPropuesta;
