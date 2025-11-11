import React, { FC, useState, useEffect } from "react";
import servicios from "@/app/contents/ServiciosContents.json"
import publicaciones from "@/app/contents/publicacionesContents.json"

interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: number;
  descuento_unitario?: number;
  estadoMaterial?: string;
  urlcontenido?: string;
}

interface AnadirContenidoProps {
  onClose: () => void;
  onAgregar: (nuevaFila: FilaContenido) => void;
}

const AnadirContenido: FC<AnadirContenidoProps> = ({ onClose, onAgregar }) => {
  const [nuevaFila, setNuevaFila] = useState<FilaContenido>({
    medio: "",
    publicacion: "",
    producto: "",
    precio: 0,
    descuento_unitario: 0,
  });

   useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded shadow-md w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Agregar nueva fila</h2>
          <button
            onClick={onClose}
            className="text-gray-600 font-bold text-xl hover:text-gray-800"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {(["medio", "publicacion", "producto", "precio"] as (keyof FilaContenido)[]).map(
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
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar ×
          </button>
          <button
            onClick={() => onAgregar(nuevaFila)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            disabled={!nuevaFila.medio || !nuevaFila.publicacion || !nuevaFila.producto}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnadirContenido;
