import React, { FC } from 'react';

interface Fase0Props {
    setFaseCrearContacto: React.Dispatch<React.SetStateAction<number>>;
}

const Fase0: FC<Fase0Props> = ({ setFaseCrearContacto }) => {
    return (
        <div>
            <p>Fase0</p>
            
            <button onClick={() => setFaseCrearContacto(1)} className='bg-blue-400 cursor-pointer rounded-lg px-3 py-1'>
                Ir a fase siguiente
            </button>
        </div>
    );
};

export default Fase0;
