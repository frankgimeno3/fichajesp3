import React, { FC, useState, useEffect, ChangeEvent } from 'react';

interface ImportarProps {}

const Importar: FC<ImportarProps> = () => {
  const filas = ['Importar contactos', 'Importar cuentas'];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [archivos, setArchivos] = useState<File[]>([]);

   useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setArchivos(prev => [...prev, ...Array.from(files)]);
    }
  };

  const eliminarArchivo = (index: number) => {
    setArchivos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="h-full p-4">
      <table className="min-w-full border">
        <tbody>
          {filas.map(fila => (
            <tr key={fila} className="border-b">
              <td className="p-2">{fila}</td>
              <td className="p-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={() => {
                    setModalTitle(fila);
                    setModalOpen(true);
                    setArchivos([]); 
                  }}
                >
                  Abrir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-96 p-4 relative">
            {/* Cerrar con X */}
            <button
              className="absolute top-2 right-2 text-gray-600 text-lg font-bold"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>

            <h2 className="text-xl font-semibold mb-4">{`Importar ${modalTitle.includes('contactos') ? 'contactos' : 'cuentas'}`}</h2>

            {/* Botón para seleccionar archivos */}
            <label className="cursor-pointer inline-block mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Haga click en el botón para adjuntar
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* Mostrar archivos seleccionados */}
            <div className="flex flex-wrap gap-2 mb-4">
              {archivos.map((file, index) => (
                <div key={index} className="bg-gray-200 px-3 py-2 rounded flex items-center space-x-2">
                  <span>{file.name}</span>
                  <button
                    className="text-red-600 font-bold"
                    onClick={() => eliminarArchivo(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Botón de importar solo si hay archivos */}
            {archivos.length > 0 && (
              <button
                type="button"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                {`Importar ${modalTitle.includes('contactos') ? 'contactos' : 'cuentas'}`}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Importar;
