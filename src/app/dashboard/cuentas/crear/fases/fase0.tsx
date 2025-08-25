import React, { FC } from 'react';

interface Fase0Props {
    setFaseCrearCuenta: React.Dispatch<React.SetStateAction<number>>;
}

const Fase0: FC<Fase0Props> = ({ setFaseCrearCuenta }) => {
    return (
        <div>
            <p>Fase0</p>
            
            <button onClick={() => setFaseCrearCuenta(1)} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
            </button>
        </div>
    );
};

export default Fase0;
