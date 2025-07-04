"use client";

import React, { FC, useState } from "react";
import PopUp from "./PopUp";
import {TimeLogService} from "@/app/service/TimeLogService";

interface RegistroProps { }

const Registro: FC<RegistroProps> = () => {
  const [employeeId] = useState("");
  const [event, setEvent] = useState("entrada");
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleReset = () => {
    window.location.reload();
  };

  const handleConfirm = async () => {
      try {
          await TimeLogService.createTimeLog(event, comments);
          alert("Evento registrado correctamente");
      } catch (e){
          alert(e);
      } finally {
          setShowPopup(false);
      }
  };


  return (
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
            <option value="entrada">Fichar entrada</option>
            <option value="descanso">Fichar pausa</option>
            <option value="salida">Fichar salida</option>
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
            data={{ employeeId, event, comments }}
            onClose={() => setShowPopup(false)}
            onCancel={() => setShowPopup(false)}
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default Registro;