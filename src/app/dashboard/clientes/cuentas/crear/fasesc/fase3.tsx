"use client";

import React, { FC, ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Cuenta {
  codigo: string;
  nombre: string;
  pais: string;
}

interface Fase3Props {
    setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    setApellidos: React.Dispatch<React.SetStateAction<string>>;
    setTelefono: React.Dispatch<React.SetStateAction<string>>;
    setMail: React.Dispatch<React.SetStateAction<string>>;
}

const Fase3: FC<Fase3Props> = ({ setFaseCrearCuenta, setNombre, setApellidos, setTelefono, setMail }) => {
  const router = useRouter();
  const [vincular, setVincular] = useState(false);
  const [codigoBuscar, setCodigoBuscar] = useState('');
  const [nombreBuscar, setNombreBuscar] = useState('');
  const [resultados, setResultados] = useState<Cuenta[] | null>(null);
  const [seleccionado, setSeleccionado] = useState<Cuenta | null>(null);
  const [relacion, setRelacion] = useState('');
  const [loading, setLoading] = useState(false);

  const cuentasMock: Cuenta[] = [
    { codigo: '123', nombre: 'Empresa A', pais: 'España' },
    { codigo: '456', nombre: 'Empresa B', pais: 'México' },
    { codigo: '789', nombre: 'Empresa C', pais: 'Argentina' },
  ];

  const handleBuscar = () => {
    setLoading(true);
    setResultados(null);
    setTimeout(() => {
      const filtradas = cuentasMock.filter(c =>
        (codigoBuscar && c.codigo.includes(codigoBuscar)) ||
        (nombreBuscar && c.nombre.toLowerCase().includes(nombreBuscar.toLowerCase()))
      );
      setResultados(filtradas.length > 0 ? filtradas : []);
      setLoading(false);
    }, 1000);
  };

  const handleSeleccionar = (cuenta: Cuenta) => {
    setSeleccionado(cuenta);
    setCodigoBuscar(cuenta.codigo);
    setNombreBuscar(cuenta.nombre);
  };

  return (
       <div className="p-10 px-8 md:px-56 bg-white rounded-2xl shadow-md max-w-5xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4 pt-10">Cuenta creada con éxito</h2>

      {!vincular ? (
        <>
          <p>La cuenta ha sido creada correctamente.</p>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => router.push('/dashboard/cuentas/ficha')}
            >
              Ir a la ficha de la cuenta
            </button>

            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              onClick={() => setVincular(true)}
            >
              Vincular a otra
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Código de la cuenta"
            className="border p-2 rounded-lg"
            value={codigoBuscar}
            onChange={(e) => setCodigoBuscar(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre de la cuenta"
            className="border p-2 rounded-lg"
            value={nombreBuscar}
            onChange={(e) => setNombreBuscar(e.target.value)}
          />
          <button
            onClick={handleBuscar}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Buscar
          </button>

          {loading && <p>Cargando...</p>}
          {resultados && resultados.length > 0 && (
            <table className="w-full border-collapse border mt-2">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-2 py-1">Código</th>
                  <th className="border px-2 py-1">Nombre</th>
                  <th className="border px-2 py-1">País</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((c, i) => (
                  <tr
                    key={i}
                    className="text-center cursor-pointer hover:bg-blue-100"
                    onClick={() => handleSeleccionar(c)}
                  >
                    <td className="border px-2 py-1">{c.codigo}</td>
                    <td className="border px-2 py-1">{c.nombre}</td>
                    <td className="border px-2 py-1">{c.pais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {seleccionado && (
            <>
              <p className="mt-2">Cuenta seleccionada: {seleccionado.nombre} ({seleccionado.codigo})</p>
              <input
                type="text"
                placeholder="Introduce la relación"
                className="border p-2 rounded-lg"
                value={relacion}
                onChange={(e) => setRelacion(e.target.value)}
              />
              <button
                className={`rounded-lg px-4 py-2 mt-2 ${relacion.trim() ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-green-500 text-white opacity-50 cursor-not-allowed'}`}
                disabled={!relacion.trim()}
                onClick={() => router.push('/dashboard/cuentas/ficha')}
              >
                Ir a la ficha de la cuenta
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Fase3;
