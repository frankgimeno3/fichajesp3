import React, { FC, useState } from "react";

interface OtrosDatosContactoProps {}

const OtrosDatosContacto: FC<OtrosDatosContactoProps> = ({ }) => {
  const mockData = {
    idiomas: ["Español", "Inglés", "Francés"],
    conocidoEn: "Glasstec 2022",
    contactadoEnFeria: ["Glasstec 2022", "Vitrum 2023"],
    suscripciones: [
      "Newsletter mensual",
      "Revista digital",
      "Newsletter Vidrio España",
      "Revista Hueco Arquitectura"
    ]
  };

  const [suscripciones, setSuscripciones] = useState<string[]>(mockData.suscripciones);

  const opcionesSuscripciones = [
    "Newsletter Vidrio España",
    "Newsletter Vidrio Latam",
    "Revista del Vidrio España",
    "Revista del vidrio Latam",
    "QQ Vidrio España",
    "Newsletter Ventanas España",
    "Newsletter Ventanas Latam",
    "Revista Ventanas  España",
    "Revista Ventanas  Latam",
    "QQ Ventanas España",
    "Newsletter Proteccion Solar España",
    "Newsletter Proteccion Solar latam",
    "Newsletter Puertas España",
    "Newsletter Puertas Latam",
    "Newsletter Arquitectura",
    "Revista Hueco Arquitectura"
  ];

  const toggleSuscripcion = (opcion: string) => {
    setSuscripciones((prev) =>
      prev.includes(opcion)
        ? prev.filter((s) => s !== opcion) // desmarcar
        : [...prev, opcion] // marcar
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Otros datos del contacto</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-4">
          {/* Idiomas */}
          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Idiomas</label>
            <input
              type="text"
              value={mockData.idiomas.join(", ")}
              readOnly
              className="flex-1 border border-gray-100 rounded-lg bg-transparent text-gray-600 p-2"
            />
          </div>

          {/* Conocido en */}
          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Conocido en</label>
            <input
              type="text"
              value={mockData.conocidoEn}
              readOnly
              className="flex-1 border border-gray-100 rounded-lg bg-transparent text-gray-600 p-2"
            />
          </div>

          {/* Contactado en feria */}
          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Contactado en feria</label>
            <input
              type="text"
              value={mockData.contactadoEnFeria.join(", ")}
              readOnly
              className="flex-1 border border-gray-100 rounded-lg bg-transparent text-gray-600 p-2"
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Suscripciones
          </label>
          <div className="grid grid-cols-2 gap-2">
            {opcionesSuscripciones.map((opcion, idx) => (
              <label key={idx} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={suscripciones.includes(opcion)}
                  onChange={() => toggleSuscripcion(opcion)}
                  className="h-4 w-4 border-gray-300 rounded"
                />
                {opcion}
              </label>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 mt-6">Otros datos de interés</h2>
      <textarea
        className="border border-gray-100 rounded-lg w-full p-2 bg-transparent text-gray-600"
        placeholder="Introduzca aquí otros datos de interés"
      />
    </div>
  );
};

export default OtrosDatosContacto;
