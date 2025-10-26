import React, { FC } from 'react';

interface Modalf1Props {
  setModalFase: React.Dispatch<React.SetStateAction<number>>
}

const Modalf2: FC<Modalf1Props> = ({ setModalFase }) => {
  return (
    <div>
      <p className='font-bold text-blue-950/70 text-lg pb-5'>Cargando datos del informe</p>
      <div className='flex flex-row justify-between bg-white border border-gray-100 rounded-lg shadow-xl'>
        <div className='flex flex-col'>
          <p>Resumen de los parámetros seleccionados</p>
          {/* aquí se deben listar con enunciado en bold seguido de ":", y los valores a la derecha */}
        </div>
        <button onClick={() => { setModalFase(1) }}>Modificar</button>
      </div>
      {/* Aquí debe haber el loading, que cargará temporalmente. No un texto, sino un círculo de carga. */}
      {/* Aquí hay que añadir un div dentro del que se pueda descargar el excel creado, una vez desaparezca el círculo de carga */}

    </div>
  );
};

export default Modalf2;