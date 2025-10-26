import React, { FC } from 'react';
import agentes from "@/app/contents/agentesContents.json"

interface Modalf1Props {
    setModalFase: React.Dispatch<React.SetStateAction<number>>
    onClose: () => void;

}

const Modalf1: FC<Modalf1Props> = ({ setModalFase, onClose }) => {

const tiposEvento = [
  "Todos",
  "Modificación en cuenta o contacto",
  "Creación en cuenta o contacto",
  "Edición de propuesta",
  "Creación de propuesta",
  "Creación de contrato",
  "Modificación de contrato",
  "Modificación de materiales",
  "Creación de servicio",
  "Modificación de servicio",
  "Modificación de Orden",
  "Evento de fichaje",
  "Evento de solicitud de fichaje",
  "Evento de aprovación/rechazo fichaje",
  "Creación de usuario",
  "Edición de usuario",
  "Importación",
  "Exportación"
];   

// const agentes = Y SI EN VEZ DE [""] LOS TOMAMOS DEL JSON?

    const meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    const anos = ["2025", "2024"]

    return (
        <div>
            <p className='font-bold text-gray-400 text-md pb-5'>Introduzca los parámetros por los que desea filtrar los eventos registrados</p>
            <div className='flex flex-row '>
                <div className='flex flex-col w-1/2 border border-gray-100 p-5 rounded-lg'>
                    <p>Fecha inicial</p>
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col p-5'>
                            <p>Mes</p>
                            {/* SELECT DE MESES EN BASE AL ARRAY MESES*/}
                        </div>
                        <div className='flex flex-col p-5'>
                            <p>Año</p>
                            {/* SELECT DE AÑOS EN BASE AL ARRAY ANOS */}
                        </div>
                    </div>
                </div>
                 <div className='flex flex-col w-1/2 border border-gray-100 p-5 rounded-lg'>
                    <p>Fecha final</p>
                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-col p-5'>
                            <p>Mes</p>
                            {/* SELECT DE MESES EN BASE AL ARRAY MESES*/}
                        </div>
                        <div className='flex flex-col p-5'>
                            <p>Año</p>
                            {/* SELECT DE AÑOS EN BASE AL ARRAY ANOS */}
                        </div>
                    </div>
                </div>
            </div>
            <p>Selección de agentes</p>
            <p>Selección de tipos de evento</p>

            <div className='flex flex-row gap-8'>
                <button className="px-3 py-1 rounded-lg shadow bg-blue-950 hover:bg-blue-950/90 text-white " onClick={() => { setModalFase(2) }}>Continuar</button>
                <button className="px-3 py-1 rounded-lg shadow bg-blue-950 hover:bg-blue-950/90 text-white " onClick={() => { onClose() }}>Cancelar</button>
            </div>

        </div>
    );
};

export default Modalf1;