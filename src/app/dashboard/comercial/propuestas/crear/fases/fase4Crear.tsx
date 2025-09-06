import React, { FC, useState } from "react";

interface Fase4CrearProps {
  setFaseCreacionPropuesta: (fase: number) => void;
}

const Fase4Crear: FC<Fase4CrearProps> = ({ setFaseCreacionPropuesta }) => {
  // Datos para facturación
  const [nombreFactura, setNombreFactura] = useState("");
  const [direccionFactura, setDireccionFactura] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [estadoZona, setEstadoZona] = useState("");
  const [pais, setPais] = useState("");
  const [vat, setVat] = useState("");

  // Forma de cobro
  const [terminosCobro, setTerminosCobro] = useState("");
  const [baseImponible, setBaseImponible] = useState("");
  const [impuesto, setImpuesto] = useState("");
  const [precioTotal, setPrecioTotal] = useState("");
  const [formaCobro, setFormaCobro] = useState("");
  const [cuentaCobro, setCuentaCobro] = useState("");
  const [numeroCobros, setNumeroCobros] = useState("");

  const camposFacturacion = [nombreFactura, direccionFactura, codigoPostal, estadoZona, pais, vat];
  const camposCobro = [terminosCobro, baseImponible, impuesto, precioTotal, formaCobro, cuentaCobro, numeroCobros];

  const canConfirmar = camposFacturacion.every((c) => c.trim() !== "") && camposCobro.every((c) => c.trim() !== "");

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-col gap-6">
        {/* Datos para facturación */}
        <div className="flex-1 border p-4 rounded-xl space-y-4">
          <p className="font-semibold">Datos para facturación:</p>
          <div className="grid grid-cols-1 gap-2">
            <input
              type="text"
              placeholder="Nombre en factura"
              className="border rounded p-2"
              value={nombreFactura}
              onChange={(e) => setNombreFactura(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dirección en factura"
              className="border rounded p-2"
              value={direccionFactura}
              onChange={(e) => setDireccionFactura(e.target.value)}
            />
            <input
              type="text"
              placeholder="Código Postal"
              className="border rounded p-2"
              value={codigoPostal}
              onChange={(e) => setCodigoPostal(e.target.value)}
            />
            <input
              type="text"
              placeholder="Estado/Zona"
              className="border rounded p-2"
              value={estadoZona}
              onChange={(e) => setEstadoZona(e.target.value)}
            />
            <input
              type="text"
              placeholder="País"
              className="border rounded p-2"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
            <input
              type="text"
              placeholder="VAT"
              className="border rounded p-2"
              value={vat}
              onChange={(e) => setVat(e.target.value)}
            />
          </div>
        </div>

        {/* Forma de cobro */}
        <div className="flex-1 border p-4 rounded-xl space-y-4">
          <p className="font-semibold">Forma de cobro:</p>
          <div className="grid grid-cols-1 gap-2">
            <input
              type="text"
              placeholder="Términos de Cobro"
              className="border rounded p-2"
              value={terminosCobro}
              onChange={(e) => setTerminosCobro(e.target.value)}
            />
            <input
              type="text"
              placeholder="Base imponible"
              className="border rounded p-2"
              value={baseImponible}
              onChange={(e) => setBaseImponible(e.target.value)}
            />
            <input
              type="text"
              placeholder="Impuesto"
              className="border rounded p-2"
              value={impuesto}
              onChange={(e) => setImpuesto(e.target.value)}
            />
            <input
              type="text"
              placeholder="Precio total"
              className="border rounded p-2"
              value={precioTotal}
              onChange={(e) => setPrecioTotal(e.target.value)}
            />
            <input
              type="text"
              placeholder="Forma de Cobro"
              className="border rounded p-2"
              value={formaCobro}
              onChange={(e) => setFormaCobro(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cuenta de Cobro"
              className="border rounded p-2"
              value={cuentaCobro}
              onChange={(e) => setCuentaCobro(e.target.value)}
            />
            <input
              type="text"
              placeholder="Número de Cobros"
              className="border rounded p-2"
              value={numeroCobros}
              onChange={(e) => setNumeroCobros(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Botón Confirmar */}
      <div>
        <button
          disabled={!canConfirmar}
          className={`bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 ${
            !canConfirmar ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => canConfirmar && setFaseCreacionPropuesta(5)}
        >
          Confirmar y pasar a revisión final
        </button>
      </div>
    </div>
  );
};

export default Fase4Crear;
