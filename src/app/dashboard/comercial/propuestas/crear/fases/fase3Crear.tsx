import React, { FC, useState } from "react";

interface Producto {
  medio: string;
  publicacion: string;
  producto: string;
  precioTarifa: number;
  precioOfrecido: number | "";
  fechaPublicacion: string;
}

interface Fase3CrearProps {
  setFaseCreacionPropuesta: (fase: number) => void;
}

const mediosMock = ["Medio A", "Medio B", "Medio C"];
const publicacionesMock: { [key: string]: string[] } = {
  "Medio A": ["Publicación A1", "Publicación A2"],
  "Medio B": ["Publicación B1", "Publicación B2"],
  "Medio C": ["Publicación C1", "Publicación C2"],
};
const productosMock: { [key: string]: string[] } = {
  "Publicación A1": ["Producto A1-1", "Producto A1-2"],
  "Publicación A2": ["Producto A2-1"],
  "Publicación B1": ["Producto B1-1"],
  "Publicación B2": ["Producto B2-1", "Producto B2-2"],
  "Publicación C1": ["Producto C1-1"],
  "Publicación C2": ["Producto C2-1", "Producto C2-2"],
};

const preciosMock: { [key: string]: number } = {
  "Producto A1-1": 100,
  "Producto A1-2": 120,
  "Producto A2-1": 150,
  "Producto B1-1": 80,
  "Producto B2-1": 90,
  "Producto B2-2": 95,
  "Producto C1-1": 110,
  "Producto C2-1": 130,
  "Producto C2-2": 140,
};

const Fase3Crear: FC<Fase3CrearProps> = ({ setFaseCreacionPropuesta }) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [medioSeleccionado, setMedioSeleccionado] = useState("");
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [precioOfrecido, setPrecioOfrecido] = useState<number | "">("");

  const resetPopup = () => {
    setMedioSeleccionado("");
    setPublicacionSeleccionada("");
    setProductoSeleccionado("");
    setPrecioOfrecido("");
    setShowPopup(false);
  };

  const handleAñadirProducto = () => {
    if (!medioSeleccionado || !publicacionSeleccionada || !productoSeleccionado) return;

    const precioTarifa = preciosMock[productoSeleccionado] || 0;
    const fechaPublicacion = new Date().toLocaleDateString();

    setProductos([
      ...productos,
      {
        medio: medioSeleccionado,
        publicacion: publicacionSeleccionada,
        producto: productoSeleccionado,
        precioTarifa,
        precioOfrecido: precioOfrecido === "" ? precioTarifa : precioOfrecido,
        fechaPublicacion,
      },
    ]);
    resetPopup();
  };

  const handleEliminarProducto = (index: number) => {
    const nuevaLista = [...productos];
    nuevaLista.splice(index, 1);
    setProductos(nuevaLista);
  };

  const canConfirmar = productos.length > 0;

  return (
    <div className="p-4 space-y-6">
      {/* Header con botón */}
      <div className="flex justify-between items-center">
        <p className="font-semibold">Contenido en propuesta:</p>
        <button
          className="rounded-xl shadow bg-white text-sm text-gray-500 px-4 py-2 hover:bg-gray-100/50"
          onClick={() => setShowPopup(true)}
        >
          Agregar productos
        </button>
      </div>

      {/* Contenedor de productos */}
      <div className="border p-4 rounded-xl bg-white space-y-4">
        {productos.length === 0 ? (
          <p className="text-gray-400">Haz click para agregar productos</p>
        ) : (
          productos.map((p, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between items-center bg-white shadow p-2 rounded-xl"
            >
              <div className="flex flex-col w-1/6">{p.medio}</div>
              <div className="flex flex-col w-1/6">{p.publicacion}</div>
              <div className="flex flex-col w-1/6">{p.producto}</div>
              <div className="flex flex-col w-1/6">{p.precioTarifa}</div>
              <div className="flex flex-col w-1/6">
                <input
                  type="number"
                  className="border rounded px-1 text-gray-300"
                  placeholder={p.precioTarifa.toString()}
                  value={p.precioOfrecido}
                  onChange={(e) =>
                    setProductos((prev) => {
                      const copia = [...prev];
                      copia[index].precioOfrecido = e.target.value === "" ? "" : Number(e.target.value);
                      return copia;
                    })
                  }
                />
              </div>
              <div className="flex flex-col w-1/6">
                {p.fechaPublicacion}
              </div>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                onClick={() => handleEliminarProducto(index)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {/* Botón Confirmar */}
      <div>
        <button
          disabled={!canConfirmar}
          className={`bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 ${
            !canConfirmar ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => canConfirmar && setFaseCreacionPropuesta(4)}
        >
          Confirmar y pasar a la configuración del pago
        </button>
      </div>

      {/* Popup para agregar productos */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl w-96 relative space-y-4">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={resetPopup}
            >
              X
            </button>
            {/* Select Medio */}
            <div className="flex flex-col">
              <label className="text-gray-700">Medio</label>
              <select
                className="border rounded p-1"
                value={medioSeleccionado}
                onChange={(e) => {
                  setMedioSeleccionado(e.target.value);
                  setPublicacionSeleccionada("");
                  setProductoSeleccionado("");
                  setPrecioOfrecido("");
                }}
              >
                <option value="">Selecciona medio</option>
                {mediosMock.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            {/* Select Publicación */}
            <div className="flex flex-col">
              <label className="text-gray-700">Publicación</label>
              <select
                className="border rounded p-1"
                value={publicacionSeleccionada}
                disabled={!medioSeleccionado}
                onChange={(e) => {
                  setPublicacionSeleccionada(e.target.value);
                  setProductoSeleccionado("");
                  setPrecioOfrecido("");
                }}
              >
                <option value="">Selecciona publicación</option>
                {medioSeleccionado &&
                  publicacionesMock[medioSeleccionado].map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
              </select>
            </div>
            {/* Select Producto */}
            <div className="flex flex-col">
              <label className="text-gray-700">Producto</label>
              <select
                className="border rounded p-1"
                value={productoSeleccionado}
                disabled={!publicacionSeleccionada}
                onChange={(e) => {
                  setProductoSeleccionado(e.target.value);
                  setPrecioOfrecido(preciosMock[e.target.value] || 0);
                }}
              >
                <option value="">Selecciona producto</option>
                {publicacionSeleccionada &&
                  productosMock[publicacionSeleccionada].map((prod) => (
                    <option key={prod} value={prod}>
                      {prod}
                    </option>
                  ))}
              </select>
            </div>

            {/* Botón Añadir */}
            {medioSeleccionado && publicacionSeleccionada && productoSeleccionado && (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600"
                onClick={handleAñadirProducto}
              >
                Añadir
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fase3Crear;
