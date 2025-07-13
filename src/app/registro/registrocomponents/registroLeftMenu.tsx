import React, { FC, useState } from 'react';
import { useRouter } from "next/navigation";

interface RegistroLeftMenuProps {

}

const RegistroLeftMenu: FC<RegistroLeftMenuProps> = ({ }) => {
    const router = useRouter()
    const handleRedirection = (path: string) => {
        router.push(path)
    }
    const [isFichajesOpen, setIsFichajesOpen] = useState(false)
    const [isPropuestasOpen, setIsPropuestasOpen] = useState(false)
    const [isSeguimientosOpen, setIsSeguimientosOpen] = useState(false)
    const [isClientesOpen, setIsClientesOpen] = useState(false)
    return (
        <div className="flex flex-col min-h-screen w-56 bg-gray-100 text-gray-600 p-5 cursor-pointer">
            {isFichajesOpen ?
                <div className='flex flex-col' onClick={() => { setIsFichajesOpen(!isFichajesOpen) }} >
                    <p>Fichajes</p>
                    <div className='p-5'>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro/historial') }}
                        >
                            Fichar eventos
                        </button>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro') }}>
                            Historial
                        </button>
                    </div>
                </div>
                :
                <p onClick={() => { setIsFichajesOpen(!isFichajesOpen) }}>Fichajes</p>}

         {isSeguimientosOpen ?
                <div className='flex flex-col' onClick={() => { setIsSeguimientosOpen(!isSeguimientosOpen) }} >
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro/historial') }}
                        >
                            Seguimientos
                        </button>
                
                </div>
                :
                <p onClick={() => { setIsSeguimientosOpen(!isSeguimientosOpen) }}>sEGUIMIENTOS</p>}
                         {isPropuestasOpen ?
                <div className='flex flex-col' onClick={() => { setIsPropuestasOpen(!isPropuestasOpen) }} >
                    <p>Propuestas</p>
                    <div className='p-5'>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro/historial') }}
                        >
                            Ver propuestas
                        </button>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro') }}>
                            Crear Propuestas
                        </button>
                    </div>
                </div>
                :
                <p onClick={() => { setIsPropuestasOpen(!isPropuestasOpen) }}>Propuestas</p>}
                         {isClientesOpen ?
                <div className='flex flex-col' onClick={() => { setIsClientesOpen(!isClientesOpen) }} >
                    <p>Clientes</p>
                    <div className='p-5'>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro/historial') }}
                        >
                            Fichas de clientes
                        </button>
                        <button
                            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
                            onClick={() => { handleRedirection('/registro') }}>
                            Crear cliente 
                        </button>
                    </div>
                </div>
                :
                <p onClick={() => { setIsClientesOpen(!isClientesOpen) }}>Clientes</p>}
        </div>
    );
};

export default RegistroLeftMenu;