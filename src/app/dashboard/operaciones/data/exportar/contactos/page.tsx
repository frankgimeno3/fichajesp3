import MiddleNav from "@/app/general_components/componentes_recurrentes/MiddleNav";
import React, { FC } from "react";

interface ExportarContactosProps {}

const idiomas = ["inglés","turco","chino","portugués","alemán","español","italiano","otros"];

const camposDatos = [
  "id_contacto","nombre_contacto","apellidos_contacto","nombre_completo_contacto",
  "id_cuenta","nombre_empresa","telefono_contacto","email_contacto","cargo_contacto",
  "idiomas","conocido_en","contactado_en_feria","suscripciones","otros_datos_interes","pais_contacto"
];

const ExportarContactos: FC<ExportarContactosProps> = ({}) => {
  return (
      <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">

      <MiddleNav tituloprincipal={` Exportación de contactos  `} />
    <div className="space-y-6">
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold text-lg">Exportación de contactos</p>
        <button className="bg-blue-950 hover:bg-blue-950/50 cursor-pointer text-white rounded-lg shadow-xl px-3 py-2">
          Deseo exportar cuentas
        </button>
      </div>

      <section className="space-y-2">
        <p className="font-semibold">Filtraje de contactos</p>
        <p className="text-sm text-gray-700">
          Introduzca los parámetros por los que quiere filtrar los contactos
        </p>

         <label className="block text-sm font-medium">País</label>
        <input
          type="text"
          className="border rounded-md px-2 py-1 w-full"
          placeholder="Ej: España"
        />

         <fieldset className="space-y-1">
          <legend className="text-sm font-medium">Idiomas</legend>
          {idiomas.map((i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> {i}
            </label>
          ))}
        </fieldset>

         <fieldset className="space-y-1">
          <legend className="text-sm font-medium">Suscripciones</legend>
          {idiomas.map((i) => (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> {i}
            </label>
          ))}
        </fieldset>

         <label className="block text-sm font-medium">Listado de cuentas (ID separados por coma)</label>
        <textarea
          className="border rounded-md px-2 py-1 w-full min-h-[80px]"
          placeholder="1001,1002,1003"
        />
      </section>

      <section className="space-y-2">
        <p className="font-semibold">Filtraje de datos</p>
        <p className="text-sm text-gray-700">
          Seleccione los valores que quiere que se muestren en el listado
        </p>

        <fieldset className="grid grid-cols-2 gap-2">
          {camposDatos.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> {c}
            </label>
          ))}
        </fieldset>
      </section>

      <button className="bg-blue-950 text-white font-bold cursor-pointer hover:bg-blue-950/90 rounded-lg shadow-xl px-3 py-2">
        Continuar y descargar
      </button>
    </div>
    </div>
  );
};

export default ExportarContactos;
