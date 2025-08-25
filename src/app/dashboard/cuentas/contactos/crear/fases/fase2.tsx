"use client";

import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface Cuenta {
  codigo: string;
  nombre: string;
  pais: string;
}

interface Fase2Props {
  setId_Cuenta: React.Dispatch<React.SetStateAction<string>>;
  setCargo: React.Dispatch<React.SetStateAction<string>>; // nuevo setter
}

const Fase2: FC<Fase2Props> = ({ setId_Cuenta, setCargo }) => {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [cargo, setCargoLocal] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultados, setResultados] = useState<Cuenta[] | null>(null);
  const [seleccionado, setSeleccionado] = useState(false);

  const router = useRouter();

  const cuentasMock: Cuenta[] = [
    { codigo: "123", nombre: "Empresa A", pais: "España" },
    { codigo: "456", nombre: "Empresa B", pais: "México" },
    { codigo: "789", nombre: "Empresa C", pais: "Argentina" },
  ];

  const handleBuscar = () => {
    setModalOpen(true);
    setLoading(true);
    setResultados(null);

    setTimeout(() => {
      const filtradas = cuentasMock.filter(
        (c) =>
          (codigo && c.codigo.includes(codigo)) ||
          (nombre && c.nombre.toLowerCase().includes(nombre.toLowerCase()))
      );
      setResultados(filtradas.length > 0 ? filtradas : []);
      setLoading(false);
    }, 2000);
  };

  const handleSeleccionar = (cuenta: Cuenta) => {
    setId_Cuenta(cuenta.codigo); // guardamos en el setter
    setCodigo(cuenta.codigo); // rellenamos input de código
    setNombre(cuenta.nombre); // rellenamos input de nombre
    setSeleccionado(true); // ya tenemos una cuenta seleccionada
    setModalOpen(false); // cerramos modal
  };

  const handleCargoChange = (valor: string) => {
    setCargoLocal(valor);
    setCargo(valor); // sincronizamos con el setter recibido por props
  };

  return (
    <div className="p-4 bg-gray-100 rounded-2xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Fase 2 - Seleccionar Cuenta</h2>

      <div className="flex flex-col gap-3">
        <label className="flex flex-col">
          <span className="text-sm mb-1">Código de la cuenta</span>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="border p-2 rounded-lg"
            disabled={seleccionado}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm mb-1">Nombre de la cuenta</span>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border p-2 rounded-lg"
            disabled={seleccionado}
          />
        </label>

        {!seleccionado ? (
          <button
            onClick={handleBuscar}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
          >
            Buscar
          </button>
        ) : (
          <>
            {/* Input para el cargo */}
            <label className="flex flex-col">
              <span className="text-sm mb-1">
                Introduzca el cargo del contacto en la empresa
              </span>
              <input
                type="text"
                value={cargo}
                onChange={(e) => handleCargoChange(e.target.value)}
                className="border p-2 rounded-lg"
              />
            </label>

            <button
              onClick={() =>
                router.push("/dashboard/cuentas/contactos/ficha")
              }
              className={`rounded-lg px-4 py-2 transition ${
                cargo.trim()
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-green-500 text-white opacity-50 cursor-not-allowed"
              }`}
              disabled={!cargo.trim()}
            >
              Ir a la ficha del contacto
            </button>
          </>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 relative w-[90%] max-w-lg">
            {/* Botón cerrar */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {loading ? (
              <p className="text-center">Cargando...</p>
            ) : resultados && resultados.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold mb-3">Resultados</h3>
                <table className="w-full border-collapse border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-3 py-2">Código Cuenta</th>
                      <th className="border px-3 py-2">Nombre Cuenta</th>
                      <th className="border px-3 py-2">País</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultados.map((c, i) => (
                      <tr
                        key={i}
                        className="text-center cursor-pointer hover:bg-blue-100"
                        onClick={() => handleSeleccionar(c)}
                      >
                        <td className="border px-3 py-2">{c.codigo}</td>
                        <td className="border px-3 py-2">{c.nombre}</td>
                        <td className="border px-3 py-2">{c.pais}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center">
                <p className="mb-4">No se encontraron cuentas con estos datos.</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fase2;
