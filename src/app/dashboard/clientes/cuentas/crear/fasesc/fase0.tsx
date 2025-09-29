import React, { FC, useState } from 'react';

interface Fase0Props {
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
}

const Fase0: FC<Fase0Props> = ({ setFaseCrearCuenta }) => {
  const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);
  const [codigoEdisoft, setCodigoEdisoft] = useState('');
  const [loading, setLoading] = useState(false);
  const [cuentaExiste, setCuentaExiste] = useState<null | boolean>(null);

  const handleComprobar = async () => {
    setLoading(true);
    setCuentaExiste(null);
    setTimeout(() => {
      setCuentaExiste(codigoEdisoft === '123');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Fase 0 - Comprobación de cuenta</h2>

      {respuesta === null && (
        <div className="flex flex-col gap-3">
          <p className="mb-2">¿Existe ya esta cuenta en Edisoft?</p>
          <div className="flex gap-4">
            <button
              onClick={() => setFaseCrearCuenta(1)}
              className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition"
            >
              No
            </button>
            <button
              onClick={() => setRespuesta('si')}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
            >
              Sí
            </button>
          </div>
        </div>
      )}

      {respuesta === 'si' && (
        <div className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Introduce código Edisoft"
            value={codigoEdisoft}
            onChange={(e) => setCodigoEdisoft(e.target.value)}
            className="border p-2 rounded-lg"
          />

          <button
            onClick={handleComprobar}
            disabled={loading || !codigoEdisoft}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? 'Cargando...' : 'Comprobar'}
          </button>

          {cuentaExiste && (
            <div className="mt-4 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
              <p>⚠️ La cuenta que intentas crear ya existe.</p>
              <button
                className="mt-3 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition"
              >
                Ir a la ficha de la cuenta
              </button>
            </div>
          )}

          {cuentaExiste === false && !loading && (
            <div className="mt-4 bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg">
              <p>No existe una cuenta con ese código. Puedes crearla.</p>
              <button
                onClick={() => setFaseCrearCuenta(1)}
                className="mt-3 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition"
              >
                Ir a fase 1
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Fase0;
