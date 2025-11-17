import React, { FC, useState } from 'react';
import cuentas from "@/app/contents/cuentasContents.json"
import { useRouter } from 'next/navigation';

interface Fase0Props {
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
}

const Fase0: FC<Fase0Props> = ({ setFaseCrearCuenta }) => {
  const router = useRouter()
  const [respuesta, setRespuesta] = useState<null | 'si' | 'no'>(null);
  const [codigoEdisoft, setCodigoEdisoft] = useState('');
  const [loading, setLoading] = useState(false);
  const [cuentaExiste, setCuentaExiste] = useState<null | boolean>(null);

const handleComprobar = async () => {
  setLoading(true);
  setCuentaExiste(null);
   setTimeout(() => {
     const existe = cuentas.some((cuenta) => cuenta.id_cuenta === codigoEdisoft);
    setCuentaExiste(existe);
    setLoading(false);
  }, 1000);
};

  return (
    <div className="p-10 px-8 md:px-56 bg-white rounded-2xl shadow-md max-w-5xl mx-auto text-center ">
      <h2 className="text-xl font-semibold mb-4 pt-10">Evitar duplicados antes de crear la cuenta</h2>

      {respuesta === null && (
        <div className="flex flex-col gap-3">
          <p className="mb-2">¿Existía ya esta cuenta en Edisoft?</p>
          <p className="text-sm text-gray-400 italics">Para evitar duplicados, indica el código de esta cuenta en edisoft, si lo conoces</p>
          <div className="flex gap-4 mx-auto my-24">
            <button
              onClick={() => setFaseCrearCuenta(1)}
              className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 cursor-pointer"
            >
              Continuar sin comprobar
            </button>
            <button
              onClick={() => setRespuesta('si')}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 cursor-pointer"
            >
              Comprobar duplicado en edisoft
            </button>

          </div>

        </div>
      )}

      {respuesta === 'si' && (
        <div className="mt-4 flex flex-col gap-3 py-18">
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
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition cursor-pointer disabled:cursor-not-allowed
            disabled:opacity-50 mb-12"
          >
            {loading ? 'Cargando...' : 'Comprobar'}
          </button>

          {cuentaExiste && (
            <div className="mt-4 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
              <p>⚠️ La cuenta que intentas crear ya existe.</p>
              <button
                className="mt-3 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition cursor-pointer"
              onClick={()=>{router.push(`/dashboard/clientes/cuentas/${codigoEdisoft}`)}}
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
                className="mt-3 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition cursor-pointer"
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Fase0;
