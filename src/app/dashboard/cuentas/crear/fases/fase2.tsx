import React, { FC } from 'react';

interface Fase2Props {
      setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;

}

const Fase2: FC<Fase2Props> = ({ setFaseCrearCuenta}) => {
  return (
    <div>
                                    <p>Fase2</p>
                  <p>Contacto creado!</p>
                  <p>Quieres asociarlo a una cuenta?</p>
                  <button>Si!</button>
            <button onClick={() => { setFaseCrearCuenta(3) }}className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
</button>
    </div>
  );
};

export default Fase2;