import React, { FC, useState } from "react";
import propuestas from "@/app/contents/propuestasContents.json";
import { InterfazPropuesta } from "@/app/interfaces/interfaces";

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: number;
  deadline: string;
  fechaPublicacion: string;
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
      deadline: item.deadline_publicacion,
      fechaPublicacion: item.fecha_publicacion_publicacion,
      estadoMaterial: "",
      urlcontenido: "",
    })
  );

  const [filas, setFilas] = useState<FilaContenido[]>(contenidoInicial);
  const [filaAEliminar, setFilaAEliminar] = useState<number | null>(null);
  const [showAgregar, setShowAgregar] = useState(false);
  const [nuevaFila, setNuevaFila] = useState<FilaContenido>({
    medio: "",
    publicacion: "",
    producto: "",
    precio: 0,
    deadline: "",
    fechaPublicacion: "",
    estadoMaterial: "",
    urlcontenido: "",
  });

  const confirmarEliminar = () => {
    if (filaAEliminar !== null) {
      setFilas(filas.filter((_, i) => i !== filaAEliminar));
      setFilaAEliminar(null);
    }
  };

  const agregarFila = () => {
    setFilas([...filas, nuevaFila]);
    setNuevaFila({
      medio: "",
      publicacion: "",
      producto: "",
      precio: 0,
      deadline: "",
      fechaPublicacion: "",
      estadoMaterial: "",
      urlcontenido: "",
    });
    setShowAgregar(false);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse text-center w-full">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2">Medio</th>
            <th className="px-4 py-2">Publicación</th>
            <th className="px-4 py-2">Producto</th>
            <th className="px-4 py-2">Precio tarifa</th>
            <th className="px-4 py-2">Deadline material</th>
            <th className="px-4 py-2">Fecha de publicación</th>
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
              <td className="px-4 py-2">{fila.deadline}</td>
              <td className="px-4 py-2">{fila.fechaPublicacion}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => setFilaAEliminar(index)}
                  className="text-red-600 font-bold text-xl hover:text-red-800"
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
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full mt-2"
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

      {/* Modal agregar */}
      {showAgregar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Agregar nueva fila</h2>
              <button
                onClick={() => setShowAgregar(false)}
                className="text-gray-600 font-bold text-xl hover:text-gray-800"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(["medio", "publicacion", "producto", "precio", "deadline", "fechaPublicacion"] as (keyof FilaContenido)[]).map(
                (field) => (
                  <div key={field} className="flex flex-col">
                    <label className="text-left text-sm font-semibold capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type={field === "precio" ? "number" : "text"}
                      value={nuevaFila[field] as string | number}
                      onChange={(e) =>
                        setNuevaFila({
                          ...nuevaFila,
                          [field]:
                            field === "precio"
                              ? Number(e.target.value)
                              : e.target.value,
                        })
                      }
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowAgregar(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar ×
              </button>
              <button
                onClick={agregarFila}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={!nuevaFila.medio || !nuevaFila.publicacion || !nuevaFila.producto}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaContenidoPropuesta;
