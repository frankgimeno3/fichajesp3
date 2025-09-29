import React, { FC, useState, useEffect } from 'react';

const criteriosOpciones = {
  Agente: ['Agente 1', 'Agente 2', 'Agente 3'],
  Pais: ['España', 'Francia', 'Alemania'],
  'Tipo cliente': ['VIP', 'Regular', 'Nuevo'],
  'Asistencia a ferias': ['Sí', 'No'],
};

const Exportar: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [selectedCriterios, setSelectedCriterios] = useState<(keyof typeof criteriosOpciones)[]>([]);

  const filas = ['Exportar cuentas', 'Exportar contactos'];

  // Cierra modal al presionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleCriterio = (criterio: keyof typeof criteriosOpciones) => {
    setSelectedCriterios(prev =>
      prev.includes(criterio)
        ? prev.filter(c => c !== criterio)
        : [...prev, criterio]
    );
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

            <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>

            <form>
              <p className="mb-2 font-medium">Filtrar por...</p>
              {(Object.keys(criteriosOpciones) as (keyof typeof criteriosOpciones)[]).map(
                (criterio) => (
                  <div key={criterio} className="mb-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCriterios.includes(criterio)}
                        onChange={() => toggleCriterio(criterio)}
                      />
                      <span>{criterio}</span>
                    </label>

                    {/* Mostrar opciones si el checkbox está marcado */}
                    {selectedCriterios.includes(criterio) && (
                      <div className="ml-6 mt-1">
                        {criteriosOpciones[criterio].map((opcion) => (
                          <label key={opcion} className="flex items-center space-x-2">
                            <input type="checkbox" />
                            <span>{opcion}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}

              <button
                type="button"
                className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Exportar como CSV
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exportar;
