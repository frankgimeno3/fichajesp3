import React, { FC } from 'react';

interface CampañasProps {

}

const Campañas: FC<CampañasProps> = ({ }) => {
    return (
        <div className="bg-white h-full min-h-screen p-12 text-gray-600">
            <h2 className="text-lg font-semibold mb-4">
                Campañas en curso</h2>
            <button>Campañas por cliente</button>
            <button>Contenidos por orden cronológico</button>
        </div>
    );
};

export default Campañas;