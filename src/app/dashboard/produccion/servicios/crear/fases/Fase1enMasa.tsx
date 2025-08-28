import React, { FC } from 'react';

interface Fase1enMasaProps {
  setFase: (value: string) => void;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}

const Fase1enMasa: FC<Fase1enMasaProps> = ({ setFase, selectedItems, setSelectedItems }) => {

  const options = [
    "Revista Ventanas, Puertas, Cerramientos y Protección Solar España",
    "Revista Ventanas, Puertas, Cerramientos y Protección Solar América Latina",
    "Revista del Vidrio España",
    "Revista del Vidrio América Latina",
    "Hueco arquitectura",
    "Hueco arquitectura parte 2",
    "Quién es Quién Vidrio",
    "Quién es Quién Ventanas, Puertas, Cerramientos y Protección Solar"
  ];

  const handleChange = (option: string) => {
    // Para "Hueco arquitectura parte 2" se requiere "Hueco arquitectura"
    if (option === "Hueco arquitectura parte 2" && !selectedItems.includes("Hueco arquitectura")) {
      alert('Debe seleccionar primero "Hueco arquitectura" para activar esta opción.');
      return;
    }

    if (selectedItems.includes(option)) {
      setSelectedItems(selectedItems.filter(item => item !== option));
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };

  return (
    <div>
      <p className="font-semibold mb-2">Crear en masa</p>
      <p className="mb-4">Qué ediciones quiere reutilizar?</p>

      <div className="flex flex-col gap-2 mb-4">
        {options.map(option => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option}
              checked={selectedItems.includes(option)}
              onChange={() => handleChange(option)}
              disabled={option === "Hueco arquitectura parte 2" && !selectedItems.includes("Hueco arquitectura")}
            />
            {option}
          </label>
        ))}
      </div>

      <button
        className='bg-blue-950 text-white px-4 py-2 rounded-lg shadow cursor-pointer'
        onClick={() => setFase("crearPublicaciones")}
        disabled={selectedItems.length === 0}
      >
        Continuar
      </button>
    </div>
  );
};

export default Fase1enMasa;
