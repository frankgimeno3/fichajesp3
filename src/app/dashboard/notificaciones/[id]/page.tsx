"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import notifications from "@/app/contents/notifsContents.json";

interface NotificacionProps {
  params: { id: string };
}

const Notificacion = ({ params }: NotificacionProps) => {
  const router = useRouter();
  const { id } = params;

  // Buscar notificación según el id de la URL
  const notificationData = notifications.find(
    (notif) => notif.id_notif === id
  );

  const [isVisualizado, setIsVisualizado] = useState(
    notificationData?.estado_notif === "leida"
  );

  if (!notificationData) {
    return (
      <div className="bg-white h-full min-h-screen p-12 text-gray-600">
        <h2 className="text-lg font-semibold">Notificación no encontrada</h2>
      </div>
    );
  }

  const handleRedirection = (param: string) => {
    router.push(param.replace(/\"/g, "")); // limpio comillas dobles extra en el json
  };

  return (
    <div className="bg-white h-full min-h-screen p-12 text-gray-600">
      <div className="flex flex-row justify-between items-center py-2">
        <h2 className="text-lg font-semibold mb-4">
          {notificationData.titulo_notif}
        </h2>
        <button
          className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
          onClick={() => setIsVisualizado(!isVisualizado)}
        >
          {isVisualizado ? (
            <p>Marcar como no leído</p>
          ) : (
            <p>Marcar como leído</p>
          )}
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr className="py-4">
            <th className="text-left p-2 border-b">Fecha</th>
            <th className="text-left p-2 border-b">Hora</th>
            <th className="text-left p-2 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="p-2 border-b">{notificationData.fecha_notif}</td>
            <td className="p-2 border-b">{notificationData.hora_notif}</td>
            <td className="p-2 border-b">{isVisualizado ? "leída" : "pendiente"}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-lg font-semibold mb-4 pt-24">
        Detalles de la notificación:
      </h2>
      <p>{notificationData.contenido_notif}</p>
      <button
        className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 mt-5"
        onClick={() => handleRedirection(notificationData.redireccion_notif)}
      >
        Ir al origen
      </button>
    </div>
  );
};

export default Notificacion;
