import React, { FC, useState } from "react";

interface Cliente {
  codigo: string;
  nombre: string;
  agente: string;
}

interface Fase1CrearProps {
  setFaseCreacionPropuesta: (fase: number) => void;
  setCodigoCliente: (codigo: string) => void;
  codigoCliente: string;
}

const mockClientes: Cliente[] = [
  { codigo: "C001", nombre: "Empresa Alpha", agente: "Juan Pérez" },
  { codigo: "C002", nombre: "Empresa Beta", agente: "María Gómez" },
  { codigo: "C003", nombre: "Empresa Gamma", agente: "Luis Martínez" },
];

const Fase1Crear: FC<Fase1CrearProps> = ({
  setFaseCreacionPropuesta,
  setCodigoCliente,
  codigoCliente
}) => {
  const [codigoInput, setCodigoInput] = useState(codigoCliente);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

  const handleBuscar = () => {
    setShowPopup(true);
    setLoading(true);

    setTimeout(() => {
      setClientes(mockClientes);  
      setLoading(false);
    }, 2000);
  };

  const handleSeleccionarCliente = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    setCodigoInput(cliente.codigo);
    setCodigoCliente(cliente.codigo);
    setShowPopup(false);
  };

  return (
    <div className="p-4">
      <p className="mb-2">Introduce el código de cliente</p>
      <div className="flex gap-2 items-center mb-4">
        <input
          type="text"
          placeholder="Código de cliente aquí"
          className="flex-1 p-2 border rounded-xl text-gray-400"
          value={codigoInput}
          onChange={(e) => setCodigoInput(e.target.value)}
        />
        <button
          onClick={handleBuscar}
          className="rounded-xl shadow bg-white text-sm text-gray-500 px-4 py-2 hover:bg-gray-100/50"
        >
          Buscar
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-2 py-1 text-left">Código</th>
                    <th className="border px-2 py-1 text-left">Nombre</th>
                    <th className="border px-2 py-1 text-left">Agente</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((c) => (
                    <tr
                      key={c.codigo}
                      className="hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSeleccionarCliente(c)}
                    >
                      <td className="border px-2 py-1">{c.codigo}</td>
                      <td className="border px-2 py-1">{c.nombre}</td>
                      <td className="border px-2 py-1">{c.agente}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {selectedCliente && (
        <div className="mt-4">
          <button
            onClick={() => setFaseCreacionPropuesta(2)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600"
          >
            Confirmar y seleccionar persona de contacto
          </button>
        </div>
      )}
    </div>
  );
};

export default Fase1Crear;
