import React, { FC, useState } from 'react';

export interface Publicacion {
  name: string;
  deadline: string;
  fechaPublicacion: string;
  edicionEspecial?: string;
  tematica?: string;
  desdeNumero?: string;
  hastaNumero?: string;
  productos?: { nombre: string; precio: string }[];
}

interface Fase1EspecificaProps {
  setFase: (value: string) => void;
  publicaciones: Publicacion[];
  setPublicaciones: (pubs: Publicacion[]) => void;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const Fase1Especifica: FC<Fase1EspecificaProps> = ({
  setFase,
  publicaciones,
  setPublicaciones,
  selectedItems,
  setSelectedItems
}) => {
  const [medio, setMedio] = useState('');
  const [edicion, setEdicion] = useState('');
  const [publicacion, setPublicacion] = useState('');
  const [deadlineMaterial, setDeadlineMaterial] = useState('');
  const [fechaPublicacion, setFechaPublicacion] = useState('');
  const [productos, setProductos] = useState<{ nombre: string; precio: string }[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState<{ nombre: string; precio: string }>({ nombre: '', precio: '' });

  const validaFormulario = medio && edicion && publicacion && fechaPublicacion;

  const handleAgregarProducto = () => {
    if (nuevoProducto.nombre && nuevoProducto.precio) {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto({ nombre: '', precio: '' });
      setShowPopup(false);
    }
  };

  const handleContinuar = () => {
    const nuevaPublicacion: Publicacion = {
      name: publicacion,
      deadline: deadlineMaterial,
      fechaPublicacion,
      edicionEspecial: edicion,
      productos
    };
    setPublicaciones([...publicaciones, nuevaPublicacion]);
    setFase('crearPublicaciones');
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="text-xl font-bold">Creando publicación específica</h2>

      <input
        type="text"
        placeholder="Medio"
        value={medio}
        onChange={e => setMedio(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Edición"
        value={edicion}
        onChange={e => setEdicion(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Publicación"
        value={publicacion}
        onChange={e => setPublicacion(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        placeholder="Deadline material"
        value={deadlineMaterial}
        onChange={e => setDeadlineMaterial(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        placeholder="Fecha de publicación"
        value={fechaPublicacion}
        onChange={e => setFechaPublicacion(e.target.value)}
        className="border p-2 rounded"
      />

      <div className="mt-4">
        <h3>Productos disponibles</h3>
        <div className="flex flex-col gap-2">
          {productos.map((p, idx) => (
            <div key={idx} className="p-2 border rounded">
              {p.nombre} - ${p.precio}
            </div>
          ))}
          <button
            className="p-2 bg-gray-300 rounded mt-2 w-12"
            onClick={() => setShowPopup(true)}
          >
            +
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg flex flex-col gap-2">
            <h4>Añadir nuevo producto</h4>
            <input
              type="text"
              placeholder="Nombre"
              value={nuevoProducto.nombre}
              onChange={e => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Precio"
              value={nuevoProducto.precio}
              onChange={e => setNuevoProducto({ ...nuevoProducto, precio: e.target.value })}
              className="border p-2 rounded"
            />
            <div className="flex gap-2">
              <button
                className="p-2 bg-green-500 text-white rounded"
                onClick={handleAgregarProducto}
              >
                Añadir
              </button>
              <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={() => setShowPopup(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        disabled={!validaFormulario}
        className={`p-2 mt-4 rounded text-white ${validaFormulario ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'}`}
        onClick={handleContinuar}
      >
        Continuar
      </button>
    </div>
  );
};

export default Fase1Especifica;
