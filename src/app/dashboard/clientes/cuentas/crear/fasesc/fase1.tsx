import React, { FC, ChangeEvent } from 'react';

interface Agente {
  id_usuario: string;
  nombre_usuario: string;
  rol: string;
}

interface CrearCuentaProps {
  setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
  setNombreCuenta: React.Dispatch<React.SetStateAction<string>>;
  setAgenteAsignado: React.Dispatch<React.SetStateAction<string>>;
  setPais: React.Dispatch<React.SetStateAction<string>>;
  setTelefono: React.Dispatch<React.SetStateAction<string>>;
  setDescripcion: React.Dispatch<React.SetStateAction<string>>;
}

const CrearCuenta: FC<CrearCuentaProps> = ({
  setFaseCrearCuenta,
  setNombreCuenta,
  setAgenteAsignado,
  setPais,
  setTelefono,
  setDescripcion
}) => {
  const agentes: Agente[] = [
    { id_usuario: 'usr_25_00003', nombre_usuario: 'Carlos David Ortega', rol: 'Empleado' },
    { id_usuario: 'usr_25_00004', nombre_usuario: 'Carlos Lamiel', rol: 'Empleado' },
    { id_usuario: 'usr_25_00005', nombre_usuario: 'Frank Admin', rol: 'Superadmin' },
    { id_usuario: 'usr_25_00006', nombre_usuario: 'Frank Auxiliar', rol: 'Empleado' },
    { id_usuario: 'usr_25_00007', nombre_usuario: 'Gimeno Auxiliar', rol: 'Agente' },
    { id_usuario: 'usr_25_00008', nombre_usuario: 'Jose Luis Fernandez Llop', rol: 'Agente' },
    { id_usuario: 'usr_25_00001', nombre_usuario: 'Montserrat Valencia', rol: 'Administrativo' },
    { id_usuario: 'usr_25_00002', nombre_usuario: 'Ricardo Calleja', rol: 'Moderador' },
  ];

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setter(e.target.value);
  };

  return (
     <div className="p-10 px-8 md:px-56 bg-white rounded-2xl shadow-md max-w-5xl mx-auto text-center py-24">
      <h2 className="text-xl font-semibold mb-4 ">Crear nueva cuenta</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre de la cuenta"
          onChange={handleChange(setNombreCuenta)}
          className="border p-2 rounded-lg"
        />

        <select
          onChange={handleChange(setAgenteAsignado)}
          className="border p-2 rounded-lg"
        >
          <option value="" disabled>Selecciona un agente asignado</option>
          {agentes.map(a => (
            <option key={a.id_usuario} value={a.id_usuario}>{a.nombre_usuario} ({a.rol})</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="País de la cuenta"
          onChange={handleChange(setPais)}
          className="border p-2 rounded-lg"
        />

        <input
          type="tel"
          placeholder="Teléfono principal de la cuenta"
          onChange={handleChange(setTelefono)}
          className="border p-2 rounded-lg"
        />

        <textarea
          placeholder="Descripción de la actividad principal"
          onChange={handleChange(setDescripcion)}
          className="border p-2 rounded-lg"
          rows={4}
        />

        <button
          onClick={() => setFaseCrearCuenta(2)}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition cursor-pointer"
        >
          Siguiente fase
        </button>
      </div>
    </div>
  );
};

export default CrearCuenta;
