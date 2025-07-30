import React, { FC, useState } from 'react';

interface PendienteCobroProps {
  
}

const PendienteCobro: FC<PendienteCobroProps> = ({ }) => {
      const [pestana, setPestana] = useState<'recibosptes' | 'rempasadas'| 'transpendientes'| 'transcobradas'>('recibosptes');
    
  return (
    <div>
              <h2 className="text-lg font-semibold mb-4">Pendiente de cobro</h2>
      <div className="flex flex-row relative mb-4">
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'recibosptes' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '0px' }}
          onClick={() => setPestana('recibosptes')}
        >
          Recibos pendientes
        </div>
        <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'rempasadas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('rempasadas')}
        >
          Remesas pasadas
        </div>
                <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'transpendientes' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('transpendientes')}
        >
          Transfers pendientes
        </div>
                <div
          className={`p-3 rounded-tr-lg cursor-pointer w-60 text-center transition-all duration-300
            ${pestana === 'transcobradas' ? 'bg-blue-950 text-white z-30 rounded-tl-lg' : 'z-10 bg-gray-100 hover:bg-gray-200'}`}
          style={{ marginLeft: '-5px' }}
          onClick={() => setPestana('transcobradas')}
        >
          Transfers cobradas
        </div>
      </div>
    </div>
  );
};

export default PendienteCobro;