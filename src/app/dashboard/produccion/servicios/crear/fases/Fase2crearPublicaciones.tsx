import React, { FC, ChangeEvent, useEffect } from 'react';
import { Publicacion } from './Fase1especifica';
 
interface Fase2crearPublicacionesProps {
  selectedItems: string[];
  publicaciones: Publicacion[];
  setPublicaciones: (pubs: Publicacion[]) => void;
  setFase: (value: string) => void;
}

const Fase2crearPublicaciones: FC<Fase2crearPublicacionesProps> = ({
  selectedItems,
  publicaciones,
  setPublicaciones,
  setFase
}) => {

  // Inicializa publicaciones si no existen
  useEffect(() => {
    if (publicaciones.length === 0 && selectedItems.length > 0) {
      const inicial = selectedItems.map(item => ({
        name: item,
        deadline: '',
        fechaPublicacion: '',
        edicionEspecial: '',
        tematica: '',
        desdeNumero: '',
        hastaNumero: '',
        productos: []
      }));
      setPublicaciones(inicial);
    }
  }, [selectedItems, publicaciones, setPublicaciones]);

  const handleChange = (index: number, field: Exclude<keyof Publicacion, 'productos'>, value: string) => {
    const updated = [...publicaciones];
    updated[index][field] = value;
    setPublicaciones(updated);
  };

  const handleChangeProductos = (index: number, productos: { nombre: string; precio: string }[]) => {
    const updated = [...publicaciones];
    updated[index].productos = productos;
    setPublicaciones(updated);
  };

  const isRevista = (name: string) =>
    name.includes("Revista del Vidrio") || name.includes("Revista Ventanas, Puertas, Cerramientos y Protección Solar");

  const isValid = publicaciones.every(pub =>
    pub.deadline.trim() !== '' &&
    pub.fechaPublicacion.trim() !== '' &&
    (!isRevista(pub.name) || (pub.desdeNumero?.trim() !== '' && pub.hastaNumero?.trim() !== ''))
  );

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Crear publicaciones</h2>

      {publicaciones.map((pub, index) => (
        <div key={pub.name} className="border p-4 rounded-lg shadow flex flex-col gap-2">
          <h3 className="font-semibold">{pub.name}</h3>

          <div className="flex gap-4 items-center">
            <label className="w-48">Deadline máximo materiales:</label>
            <input
              type="date"
              value={pub.deadline}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'deadline', e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">Fecha de publicación:</label>
            <input
              type="date"
              value={pub.fechaPublicacion}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'fechaPublicacion', e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">Edición especial (opcional):</label>
            <input
              type="text"
              value={pub.edicionEspecial}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'edicionEspecial', e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label className="w-48">Temática (opcional):</label>
            <input
              type="text"
              value={pub.tematica}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'tematica', e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>

          {isRevista(pub.name) && (
            <>
              <div className="flex gap-4 items-center">
                <label className="w-48">Desde número:</label>
                <input
                  type="number"
                  value={pub.desdeNumero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'desdeNumero', e.target.value)}
                  className="border rounded px-2 py-1"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label className="w-48">Hasta número:</label>
                <input
                  type="number"
                  value={pub.hastaNumero}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, 'hastaNumero', e.target.value)}
                  className="border rounded px-2 py-1"
                />
              </div>
            </>
          )}
        </div>
      ))}

      <button
        className="bg-blue-950 text-white px-4 py-2 rounded-lg shadow cursor-pointer"
         onClick={() => setFase('FaseConfirmacion')}
      >
        Continuar
      </button>
    </div>
  );
};

export default Fase2crearPublicaciones;
