"use client";
import MiddleNav from '@/app/general_components/componentes_recurrentes/MiddleNav';
import { useRouter } from 'next/navigation';
import React from 'react';

const ExportarCuentas = () => {
  const router = useRouter()
  
  const camposCuenta = [
    'id_cuenta',
    'nombre_empresa',
    'pais_cuenta',
    'id_agente',
    'presente_en_qq',
    'descripcion_cuenta',
    'actividades_cuenta',
    'datos_comerciales.ciudad_principal_cuenta',
    'datos_comerciales.telefono_principal_cuenta',
  ];

  return (
    <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
      <MiddleNav tituloprincipal={` Exportación de cuentas`} />
      <div className="bg-white mx-12 my-6 p-12 rounded-xl shadow">
        <div className="flex flex-row items-center justify-between mb-12">
          <p className="font-semibold text-3xl text-blue-950">Exportación de cuentas</p>
          <button className="bg-blue-950 hover:bg-blue-950/50 cursor-pointer text-white rounded-lg shadow-xl px-3 py-2"
          onClick={()=>{router.push("/dashboard/operaciones/data/exportar/contactos")}}>
            Deseo exportar contactos
          </button>
        </div>

        <section className="py-12 border border-gray-100 rounded shadow px-8">
          <p className="font-semibold text-xl">Filtraje de cuentas</p>
          <p className="text-sm text-gray-700">Introduzca parámetros para filtrar las cuentas</p>

          <div className="flex flex-row mt-12 gap-8">
            <div className="flex-1">
              <label className="block text-sm font-bold">Filtrar por país</label>
              <input className="border border-gray-300 rounded-md px-2 py-1 w-full" placeholder="España, Francia" />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-bold">Filtrar por id_agente</label>
              <input className="border border-gray-300 rounded-md px-2 py-1 w-full" placeholder="ag_25_0004" />
            </div>

            <div className="flex-1 flex items-end gap-2">
              <label className="text-sm font-bold">Presentes en QQ</label>
              <input type="checkbox" />
            </div>
          </div>

          <label className="block text-sm mt-8 font-bold">Listado de cuentas</label>
          <label className="block text-sm mb-2">Introduzca códigos separados por comas</label>
          <textarea className="border border-gray-300 rounded-md px-2 py-1 w-full min-h-[80px]" placeholder="62500001,62500002" />
        </section>

        <section className="space-y-2 border border-gray-100 rounded shadow p-8 mt-8">
          <p className="font-semibold text-xl">Campos a exportar</p>
          <p className="text-sm text-gray-700">Seleccione los campos que quiere incluir en el excel</p>
          <fieldset className="grid grid-cols-2 gap-2">
            {camposCuenta.map(c => (
              <label key={c} className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> {c}
              </label>
            ))}
          </fieldset>
        </section>

        <button className="bg-blue-950 text-white font-bold cursor-pointer hover:bg-blue-950/90 rounded-lg shadow-xl px-3 py-2 my-12">
          Continuar y descargar
        </button>
      </div>
    </div>
  );
};

export default ExportarCuentas;
