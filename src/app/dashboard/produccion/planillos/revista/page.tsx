import React, { FC, JSX } from 'react';

interface CeldaData {
    posición: string;
    empresa: string;
    tipoContenido: 'artículo' | 'anuncio';
    estado: 'no pedido' | 'esperando recepción' | 'por revisar producción' | 'material incorrecto' | 'producido' | 'revisado';
    agente: string;
}

interface PlanilloRevistaProps { }

const mockData: CeldaData[] = [
    { posición: 'Página 1', empresa: 'Empresa A', tipoContenido: 'artículo', estado: 'producido', agente: "Pep" },
    { posición: 'Página 2', empresa: 'Empresa B', tipoContenido: 'anuncio', estado: 'revisado', agente: "Pep" },
    { posición: 'Página 3', empresa: 'Empresa C', tipoContenido: 'artículo', estado: 'no pedido', agente: "Pep" },
    // Puedes seguir agregando más
];

const totalCeldas = 60;

const PlanilloRevista: FC<PlanilloRevistaProps> = () => {
    // Creamos las 60 celdas
    const celdas = Array.from({ length: totalCeldas }, (_, i) => {
        if (i === 0) {
            return (
                <div key={i} className="w-1/2 border border-gray-300 p-2 text-xs relative h-56 bg-yellow-100 ml-auto">
                    <div className="absolute top-1 right-2 text-gray-400">#{i}</div>
                    <p className="font-semibold text-center">Portada</p>
                </div>
            );
        }

        const data = mockData[i - 1]; // Datos empiezan desde el índice 1
        return (
            <div key={i} className="w-1/2 border border-gray-300 p-2 text-xs relative h-56">
                <div className="absolute top-1 right-2 text-gray-400">#{i}</div>
                {data ? (
                    <>
                        <p className="font-semibold">{data.posición}</p>
                        <p>{data.empresa}</p>
                        <p>Tipo de contenido: {data.tipoContenido} </p>
                        <p>Estado del material: {data.estado} </p>
                        <p>Agente: {data.agente} </p>
                    </>
                ) : null}
            </div>
        );
    });

    const filas: JSX.Element[] = [];

    for (let i = 1; i < totalCeldas; i += 2) {
        const left = celdas[i];
        const right = celdas[i + 1] || <div key={i + 1} className="w-1/2 border border-gray-300 p-2 h-20 relative text-xs">
            <div className="absolute top-1 right-2 text-gray-400">#{i + 1}</div>
        </div>;

        filas.push(
            <div key={`fila-${i}`} className="flex">
                {left}
                {right}
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen p-12 text-gray-600 bg-white ">
            <h2 className="text-xl font-semibold mb-6">Planillos revista del vidrio españa 242</h2>
            <button className='bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900 ml-36'>
            Descargar como PDF
            </button>           
             <div className="flex flex-row justify-between p-24 px-56">
                <div className="flex flex-col gap-1" style={{ "width": "500px" }}>
                    {celdas[0]}
                    {filas.slice(0, 15)}
                </div>

                <div className="flex flex-col gap-1" style={{ "width": "500px" }}>
                    {filas.slice(15)}
                </div>
            </div>
        </div>
    );
};

export default PlanilloRevista;
