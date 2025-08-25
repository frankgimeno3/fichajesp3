import React, { FC } from 'react';

interface Fase1Props {
      setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;

}

const Fase1: FC<Fase1Props> = ({setFaseCrearContacto}) => {
  return (
    <div>
                  <p>Fase1</p>
            <button onClick={() => { setFaseCrearContacto(2) }} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
</button>

    </div>
  );
};

export default Fase1;