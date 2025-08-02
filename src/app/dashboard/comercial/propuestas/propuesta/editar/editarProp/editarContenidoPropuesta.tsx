import React, { FC, useState } from "react";

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: string;
  deadline: string;
  fechaPublicacion: string;
  estadoMaterial: string;
  urlcontenido: string;
}

const datosIniciales: FilaContenido[] = [
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 210",
    producto: "Anuncio de una página",
    precio: "1760€",
    deadline: "11/10/2025",
    fechaPublicacion: "12/12/2025",
    estadoMaterial: "Publicado",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 211",
    producto: "Media página",
    precio: "850€",
    deadline: "15/10/2025",
    fechaPublicacion: "01/01/2026",
    estadoMaterial: "Pedido no recibido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 212",
    producto: "Doble página",
    precio: "500€",
    deadline: "20/10/2025",
    fechaPublicacion: "05/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 213",
    producto: "Publicidad en portada",
    precio: "2300€",
    deadline: "25/10/2025",
    fechaPublicacion: "10/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
  {
    medio: "Revista del vidrio España",
    publicacion: "Edición 214",
    producto: "Anuncio interior portada",
    precio: "1200€",
    deadline: "30/10/2025",
    fechaPublicacion: "15/01/2026",
    estadoMaterial: "No pedido",
    urlcontenido: "/dashboard/produccion/contenidos/revista/contenido",
  },
];


const TablaContenidoPropuesta: FC = () => {
  const [filas, setFilas] = useState<FilaContenido[]>(datosIniciales);
  const [filaAEliminar, setFilaAEliminar] = useState<number | null>(null);
  const [showAgregar, setShowAgregar] = useState(false);
  const [nuevaFila, setNuevaFila] = useState<FilaContenido>({
    medio: "",
    publicacion: "",
    producto: "",
    precio: "",
    deadline: "",
    fechaPublicacion: "",
    estadoMaterial: "",
    urlcontenido: "",
  });

  // Función para eliminar una fila confirmada
  const confirmarEliminar = () => {
    if (filaAEliminar !== null) {
      setFilas(filas.filter((_, i) => i !== filaAEliminar));
      setFilaAEliminar(null);
    }
  };

  // Función para agregar una fila
  const agregarFila = () => {
    setFilas([...filas, nuevaFila]);
    setNuevaFila({
      medio: "",
      publicacion: "",
      producto: "",
      precio: "",
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
        className=" px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full"
      >
        + Agregar fila
      </button>
      {/* Popup para confirmar eliminación */}
      {filaAEliminar !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center">
            <p className="mb-4">
              ¿Seguro que quieres eliminar esta fila?
            </p>
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

      {/* Popup para agregar fila */}
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

            {/* Inputs para agregar nueva fila */}
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  "medio",
                  "publicacion",
                  "producto",
                  "precio",
                  "deadline",
                  "fechaPublicacion",
                ] as (keyof FilaContenido)[]
              ).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-left text-sm font-semibold capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    value={nuevaFila[field]}
                    onChange={(e) =>
                      setNuevaFila({ ...nuevaFila, [field]: e.target.value })
                    }
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
              ))}
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
                disabled={
                  !nuevaFila.medio ||
                  !nuevaFila.publicacion ||
                  !nuevaFila.producto
                }
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
