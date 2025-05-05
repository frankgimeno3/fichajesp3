"use client";

import React, { FC, useState } from "react";
import PopUp from "./PopUp";
import { useRouter } from "next/navigation";

interface RegistroProps { }

const Registro: FC<RegistroProps> = () => {
  const [employeeId] = useState("");
  const [password] = useState("");
  const [event, setEvent] = useState("Fichar entrada");
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter()

  const handleReset = () => {
    window.location.reload();
  };

  const handleConfirm = () => {
    alert("Evento registrado correctamente");
    setShowPopup(false);
  };

  const handleLogout = () => {
    console.log('logout')
  }
  const handleHistory = () => {
    router.push('/registro/historial')
  }

  return (
    <>
      <nav className="flex flex-row justify-between p-5 px-12 items-center border-b border-gray-600" style={{ backgroundColor: 'rgb(255, 255, 255, 0.04)' }}>
        <p className=" text-2xl text-gray-300">Página de registro de fichajes</p>
        <div className="flex flex-row">
          <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
            onClick={() => handleHistory()}>
            Historial</button>
          <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90"
            onClick={() => handleLogout()}>
            Cerrar sesión</button> 
        </div>
      </nav>
      <div className="min-h-screen bg-gray-500 pt-12">
      <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-center">Registro de Evento de Fichaje</h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Introduzca evento de fichaje</label>
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Fichar entrada</option>
            <option>Fichar pausa</option>
            <option>Fichar salida</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Comentarios</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Introduzca comentarios sobre el registro si es necesario."
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="w-full  text-gray-500 bg-gray-100  py-2 px-4 rounded-xl shadow hover:bg-gray-200 transition duration-200"
          >
            Cancelar y borrar
          </button>
          <button
            onClick={() => setShowPopup(true)}
            className="w-full bg-gray-100 text-gray-500  py-2 px-4 rounded-xl shadow hover:bg-gray-200 transition duration-200"
          >
            Registrar evento
          </button>
        </div>

        {showPopup && (
          <PopUp
            data={{ employeeId, password, event, comments }}
            onClose={() => setShowPopup(false)}
            onCancel={() => setShowPopup(false)}
            onConfirm={handleConfirm}
          />
        )}
      </div>
      </div>
    </>

  );
};

export default Registro;
