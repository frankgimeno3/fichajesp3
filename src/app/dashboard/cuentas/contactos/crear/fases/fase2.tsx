import React, { FC } from 'react';

interface Fase2Props {
      setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;

}

const Fase2: FC<Fase2Props> = ({ setFaseCrearContacto}) => {
  return (
    <div>
                                    <p>Fase2</p>
                  <p>Contacto creado!</p>
                  <p>Quieres asociarlo a una cuenta?</p>
                  <button>Si!</button>
            <button onClick={() => { setFaseCrearContacto(3) }}className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
</button>
    </div>
  );
};

export default Fase2;