'use client';

import React, { FC, useState } from 'react';

interface Props {
  onFiltrar: (mes: string, anio: string) => void;
}

const FiltroTemporal: FC<Props> = ({ onFiltrar }) => {
  const [mes, setMes] = useState('02');
  const [anio, setAnio] = useState('2025');
  const [mostrarFiltro, setMostrarFiltro] = useState(false); 
  const [isFilterSelected, setIsFilterSelected] = useState(false);

  const handleFiltrar = () => {
    onFiltrar(mes, anio);
  };

  const handleToggleFilter = () => {
    setMostrarFiltro(prev => !prev);
    setIsFilterSelected(prev => !prev);
  };

  return (
    <div
      className='flex flex-row  items-center bg-gray-100 text-gray-600 px py-1 px-5 text-xs rounded-t'
    >
      <p>Mostrando datos del mes {mes} del año {anio}</p>

      <button
        onClick={handleToggleFilter}
        style={{ width: '95px' }}
        className={`mx-5 cursor-pointer transition p-1 px-2 border border-gray-200 shadow rounded text-left bg-white ${
          isFilterSelected ? 'hover:bg-white' : 'hover:bg-gray-100'
        }`}
      >
        {isFilterSelected ? 'Cerrar filtro' : 'Modificar filtro'}
      </button>

      {mostrarFiltro && (
        <div className='flex flex-row  items-center'>
          <div className='flex flex-row items-center'>
            <p>Mostrar datos del mes:</p>
            <select
              className="text-gray-600 px-2 py-1 rounded"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
            >
              {[...Array(12)].map((_, i) => {
                const month = (i + 1).toString().padStart(2, '0');
                return <option className='text-black' key={month} value={month}>{month}</option>;
              })}
            </select>
          </div>

          <div className='flex flex-row items-center ml-5 '>
            <p>Mostrar datos del año:</p>
            <select
              className="text-gray-600 px-2 py-1 rounded"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
            >
              {[...Array(6)].map((_, i) => {
                const year = (2030 - i).toString();
                return <option className='text-black' key={year} value={year}>{year}</option>;
              })}
            </select>
          </div>

          <button
            className=' w-24 py-1 ml-5  border border-gray-600 rounded hover:bg-gray-200 hover:text-black transition'
            onClick={handleFiltrar}
          >
            Filtrar
          </button>
        </div>
      )}
    </div>
  );
};

export default FiltroTemporal;
