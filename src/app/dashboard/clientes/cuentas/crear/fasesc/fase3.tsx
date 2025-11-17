"use client";

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface Fase3Props {
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
  setApellidos: React.Dispatch<React.SetStateAction<string>>;
  setTelefono: React.Dispatch<React.SetStateAction<string>>;
  setMail: React.Dispatch<React.SetStateAction<string>>;
}

const Fase3: FC<Fase3Props> = () => {
  const router = useRouter();

  return (
    <div className="p-10 px-8 md:px-56 py-24 bg-white rounded-2xl shadow-md max-w-5xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4 pt-10">Cuenta creada con éxito</h2>

      <p>La cuenta ha sido creada correctamente.</p>

      <div className="flex flex-row gap-2 mt-4 justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex-1 cursor-pointer my-12"
          onClick={() => router.push('/dashboard/clientes/cuentas')}
        >
          Ir a la ficha de la cuenta
        </button>
      </div>
    </div>
  );
};

export default Fase3;
