import { InterfazContacto } from "@/app/interfaces/interfaces";
import React, { FC, useState, useEffect } from "react";
 
interface OtrosDatosContactoProps {
  contacto: InterfazContacto;
  onChange: (updatedContacto: InterfazContacto) => void;
}

const OtrosDatosContacto: FC<OtrosDatosContactoProps> = ({ contacto, onChange }) => {
  const [suscripciones, setSuscripciones] = useState<string[]>(contacto.suscripciones || []);
  const [otrosDatos, setOtrosDatos] = useState<string>(contacto.otros_datos_interes || "");
  const [idiomas, setIdiomas] = useState<string>(contacto.idiomas);
  const [pais, setPais] = useState<string>(contacto.pais_contacto);
  const [conocidoEn, setConocidoEn] = useState<string>(contacto.conocido_en || "");
  const [contactadoEnFeria, setContactadoEnFeria] = useState<string>(contacto.contactado_en_feria );

  useEffect(() => {
    setSuscripciones(contacto.suscripciones || []);
    setOtrosDatos(contacto.otros_datos_interes || "");
    setIdiomas(contacto.idiomas);
    setConocidoEn(contacto.conocido_en || "");
    setContactadoEnFeria(contacto.contactado_en_feria);
  }, [contacto]);

  const opcionesSuscripciones = [
    "Newsletter Vidrio España",
    "Newsletter Vidrio Latam",
    "Revista del Vidrio España",
    "Revista del vidrio Latam",
    "QQ Vidrio España",
    "Newsletter Ventanas España",
    "Newsletter Ventanas Latam",
    "Revista Ventanas España",
    "Revista Ventanas Latam",
    "QQ Ventanas España",
    "Newsletter Proteccion Solar España",
    "Newsletter Proteccion Solar Latam",
    "Newsletter Puertas España",
    "Newsletter Puertas Latam",
    "Newsletter Arquitectura",
    "Revista Hueco Arquitectura",
  ];

  const toggleSuscripcion = (opcion: string) => {
    const nuevasSuscripciones = suscripciones.includes(opcion)
      ? suscripciones.filter((s) => s !== opcion)
      : [...suscripciones, opcion];

    setSuscripciones(nuevasSuscripciones);
    onChange({ ...contacto, suscripciones: nuevasSuscripciones });
  };

  const handleOtrosDatosChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setOtrosDatos(value);
    onChange({ ...contacto, otros_datos_interes: value });
  };

  const handleIdiomasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIdiomas(value);
    onChange({ ...contacto, idiomas: value});
  };

  const handlePaisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPais(value);
    onChange({ ...contacto, pais_contacto: value});
  };

  const handleConocidoEnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConocidoEn(value);
    onChange({ ...contacto, conocido_en: value });
  };

  const handleContactadoEnFeriaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContactadoEnFeria(value);
    onChange({ ...contacto, contactado_en_feria: value});
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Otros datos del contacto</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">País</label>
            <input
              type="text"
              value={pais}
              onChange={handlePaisChange}
              className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-700"
              placeholder="Ej: España"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Idiomas</label>
            <input
              type="text"
              value={idiomas}
              onChange={handleIdiomasChange}
              className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-700"
              placeholder="Ej: Español, Inglés"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Conocido en</label>
            <input
              type="text"
              value={conocidoEn}
              onChange={handleConocidoEnChange}
              className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-700"
              placeholder="Ej: Feria, Referencia..."
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-1/3 text-gray-700">Contactado en feria</label>
            <input
              type="text"
              value={contactadoEnFeria}
              onChange={handleContactadoEnFeriaChange}
              className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-700"
              placeholder="Ej: Veteco, Glasstech..."
            />
          </div>
        </div>

         <div>
          <label className="block text-gray-700 mb-2 font-medium">Suscripciones</label>
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
        className="border border-gray-300 rounded-lg w-full p-2 text-gray-700"
        placeholder="Introduzca aquí otros datos de interés"
        value={otrosDatos}
        onChange={handleOtrosDatosChange}
        rows={4}
      />
    </div>
  );
};

export default OtrosDatosContacto;
