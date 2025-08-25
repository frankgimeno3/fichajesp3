import React, { FC } from 'react';

interface Fase1Props {
      setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;

}

const Fase1: FC<Fase1Props> = ({setFaseCrearCuenta}) => {
  return (
    <div>
                  <p>Fase1</p>
            <button onClick={() => { setFaseCrearCuenta(2) }} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
</button>

    </div>
  );
};

export default Fase1;