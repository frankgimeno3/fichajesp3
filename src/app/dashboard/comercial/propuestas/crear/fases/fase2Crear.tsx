import React, { FC, useState } from "react";

interface Contacto {
  codigo: string;
  nombre: string;
  codigoEmpresa: string;
  nombreEmpresa: string;
}

interface Fase2CrearProps {
  setFaseCreacionPropuesta: (fase: number) => void;
  setCodigoContactoAnunciante: (codigo: string) => void;
  setCodigoContactoFirmante: (codigo: string) => void;
}

const mockContactos: Contacto[] = [
  { codigo: "CT001", nombre: "Ana López", codigoEmpresa: "C001", nombreEmpresa: "Empresa Alpha" },
  { codigo: "CT002", nombre: "Carlos Pérez", codigoEmpresa: "C002", nombreEmpresa: "Empresa Beta" },
  { codigo: "CT003", nombre: "Lucía Gómez", codigoEmpresa: "C001", nombreEmpresa: "Empresa Alpha" },
  { codigo: "CT004", nombre: "Pedro Martínez", codigoEmpresa: "C003", nombreEmpresa: "Empresa Gamma" },
];

const Fase2Crear: FC<Fase2CrearProps> = ({
  setFaseCreacionPropuesta,
  setCodigoContactoAnunciante,
  setCodigoContactoFirmante,
}) => {
  // Estados Contacto Anunciante
  const [modoAnunciante, setModoAnunciante] = useState<"porcodigo" | "pornombre">("porcodigo");
  const [inputAnunciante, setInputAnunciante] = useState("");
  const [selectedCodigoAnunciante, setSelectedCodigoAnunciante] = useState("");

  // Estados Contacto Firmante
  const [mismoEmpresa, setMismoEmpresa] = useState<boolean>(true);
  const [modoFirmante, setModoFirmante] = useState<"porcodigo" | "pornombre">("porcodigo");
  const [inputFirmante, setInputFirmante] = useState("");
  const [selectedCodigoFirmante, setSelectedCodigoFirmante] = useState("");

  // Popup general
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tablaData, setTablaData] = useState<Contacto[]>([]);
  const [popupTipo, setPopupTipo] = useState<"anunciante" | "firmante">("anunciante");

  const handleBuscar = (tipo: "anunciante" | "firmante") => {
    setPopupTipo(tipo);
    setShowPopup(true);
    setLoading(true);
    setTimeout(() => {
      setTablaData(mockContactos);
      setLoading(false);
    }, 2000);
  };

  const handleSeleccionar = (contacto: Contacto) => {
    if (popupTipo === "anunciante") {
      setSelectedCodigoAnunciante(contacto.codigo);
      setInputAnunciante(contacto.codigo);
      setCodigoContactoAnunciante(contacto.codigo);
    } else {
      setSelectedCodigoFirmante(contacto.codigo);
      setInputFirmante(contacto.codigo);
      setCodigoContactoFirmante(contacto.codigo);
    }
    setShowPopup(false);
  };

  const canConfirmar = () => {
    if (!selectedCodigoAnunciante) return false;
    if (!mismoEmpresa && !selectedCodigoFirmante) return false;
    return true;
  };

  return (
    <div className="p-4 space-y-6">
      {/* Contacto Anunciante */}
      <div className="border p-4 rounded-xl space-y-2">
        <div className="flex justify-between items-center">
          <p>Contacto de la empresa anunciante</p>
          {/* Toggle tipo interruptor con etiquetas */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Código</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={modoAnunciante === "pornombre"}
                onChange={() =>
                  setModoAnunciante(modoAnunciante === "porcodigo" ? "pornombre" : "porcodigo")
                }
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full transition-colors peer-checked:bg-blue-600"></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  modoAnunciante === "pornombre" ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
            <span className="text-gray-400 text-sm">Nombre</span>
          </div>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={modoAnunciante === "porcodigo" ? "código del contacto aquí" : "nombre y apellidos del contacto aquí"}
            className="flex-1 p-2 border rounded-xl text-gray-200"
            value={inputAnunciante}
            onChange={(e) => setInputAnunciante(e.target.value)}
          />
          <button
            className="rounded-xl shadow bg-white text-sm text-gray-500 px-4 py-2 hover:bg-gray-100/50"
            onClick={() => handleBuscar("anunciante")}
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Toggle mismo empresa */}
      <div className="border p-4 rounded-xl space-y-2">
        <div className="flex justify-between items-center">
          <p>El contacto que firma es de la misma empresa que se anuncia?</p>
          {/* Toggle tipo interruptor con etiquetas */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sí</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={!mismoEmpresa}
                onChange={() => setMismoEmpresa(!mismoEmpresa)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full transition-colors peer-checked:bg-blue-600"></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  !mismoEmpresa ? "translate-x-5" : ""
                }`}
              ></div>
            </label>
            <span className="text-gray-400 text-sm">No</span>
          </div>
        </div>

        {/* Contacto Firmante solo si no es mismo */}
        {!mismoEmpresa && (
          <div className="mt-4 border p-4 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <p>Contacto de la empresa firmante</p>
              {/* Toggle tipo interruptor con etiquetas */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Código</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={modoFirmante === "pornombre"}
                    onChange={() =>
                      setModoFirmante(modoFirmante === "porcodigo" ? "pornombre" : "porcodigo")
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full transition-colors peer-checked:bg-blue-600"></div>
                  <div
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      modoFirmante === "pornombre" ? "translate-x-5" : ""
                    }`}
                  ></div>
                </label>
                <span className="text-gray-400 text-sm">Nombre</span>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={modoFirmante === "porcodigo" ? "código del contacto aquí" : "nombre y apellidos del contacto aquí"}
                className="flex-1 p-2 border rounded-xl text-gray-200"
                value={inputFirmante}
                onChange={(e) => setInputFirmante(e.target.value)}
              />
              <button
                className="rounded-xl shadow bg-white text-sm text-gray-500 px-4 py-2 hover:bg-gray-100/50"
                onClick={() => handleBuscar("firmante")}
              >
                Buscar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Botón Confirmar */}
      <div>
        <button
          disabled={!canConfirmar()}
          className={`bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 ${
            !canConfirmar() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setFaseCreacionPropuesta(3)}
        >
          Confirmar y agregar productos
        </button>
      </div>

      {/* Popup */}
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
                    <th className="border px-2 py-1 text-left">Código de contacto</th>
                    <th className="border px-2 py-1 text-left">Nombre de contacto</th>
                    <th className="border px-2 py-1 text-left">Código empresa</th>
                    <th className="border px-2 py-1 text-left">Nombre empresa</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaData.map((c) => (
                    <tr
                      key={c.codigo}
                      className="hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSeleccionar(c)}
                    >
                      <td className="border px-2 py-1">{c.codigo}</td>
                      <td className="border px-2 py-1">{c.nombre}</td>
                      <td className="border px-2 py-1">{c.codigoEmpresa}</td>
                      <td className="border px-2 py-1">{c.nombreEmpresa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fase2Crear;
