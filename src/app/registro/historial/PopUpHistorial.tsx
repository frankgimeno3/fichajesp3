import React, { FC, useEffect, useState } from "react";

interface PopUpHistorialHistorialProps {
  data: {
    employeeId: string;
    dia: string;
    hora: string;
    event: string;
    comments: string;
  };
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const PopUpHistorialHistorial: FC<PopUpHistorialHistorialProps> = ({
  data,
  onClose,
  onConfirm,
  onCancel
}) => {
  const [ipAddress, setIpAddress] = useState<string>("");

  const [formState, setFormState] = useState({
    employeeId: data.employeeId,
    event: data.event,
    comments: data.comments || ""
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress("No disponible"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 text-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="bg-white p-6 rounded-xl w-96 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-gray-600"
        >
          ×
        </button>
        <h3 className="text-lg font-semibold mb-4 text-center">
          Modifique los valores que desea cambiar
        </h3>
        <div className="space-y-4 text-sm text-gray-700 mb-4">
          <div>
            <p>Ip: {ipAddress}</p>
            <label className="block text-gray-600 font-semibold mb-1">Evento:</label>
            <select
              name="event"
              value={formState.event}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-lg"
            >
              <option>Fichar entrada</option>
              <option>Fichar pausa</option>
              <option>Fichar salida</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Día de registro:</label>
            <input
              type="text"
              value={data.dia}
              readOnly
              className="w-full px-3 py-1 border rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Hora de registro:</label>
            <input
              type="text"
              value={data.hora}
              readOnly
              className="w-full px-3 py-1 border rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-semibold mb-1">Comentarios:</label>
            <textarea
              name="comments"
              value={formState.comments}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
          >
            Confirmar
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded-xl hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpHistorialHistorial;