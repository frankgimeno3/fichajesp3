import React, { FC } from 'react';
import data from './contenidopestanas/preferentesdata.json';

interface Oferta {
  ofrecida_por: string;
  ofrecida_a: string;
}

interface Contratada {
  contratada_por: string;
  vendida_a: string;
}

type ContratadaField = Contratada | 'no';

interface PreferenteEstado {
  contratada: ContratadaField;
  ofrecida_a: Oferta[];
}

interface Preferente {
  pagina: string;
  estado: PreferenteEstado;
}

interface Edicion {
  edicion: string;
  preferentes: Preferente[];
}

const preferentesDisponibles = [
  "PORTADA", "INT. PORTADA", "P1", "P2", "P3", "P5", "P6+7", "P7+8"
];

const PreferentesAnoContent: FC = () => {
  const mockData = data as Edicion[];

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-left bg-blue-900/50 text-white text-center">Edición</th>
            {preferentesDisponibles.map((pref) => (
              <th key={pref} className="border border-gray-300 px-2 py-1 text-center bg-blue-950 text-white">
                {pref}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((ed) => (
            <tr key={ed.edicion}>
              <td className="border border-gray-300 px-2 py-1 font-medium bg-blue-900/50 text-white text-center">{ed.edicion}</td>
              {preferentesDisponibles.map((pref) => {
                const encontrado = ed.preferentes.find(p => p.pagina === pref);

                if (!encontrado) {
                  return <td key={pref} className="border border-gray-300 px-2 py-1 text-center text-gray-400">—</td>;
                }

                const { contratada, ofrecida_a } = encontrado.estado;

                return (
                  <td key={pref} className="border border-gray-300 px-2 py-1 text-sm align-top">
                    {contratada !== 'no' ? (
                      <div>
                        <div className="p-2 px-3 text-white bg-green-700 rounded-xl shadow-lg">
                          <p className='font-semibold'>Contratada</p>
                          <div className="text-xs">
                            Por agente: {contratada.contratada_por}<br />
                            A empresa: {contratada.vendida_a}
                          </div>
                        </div>
                        <p className='font-bold p-3'>Ya no disponible para:</p>
                        {ofrecida_a.length > 0 && (
                          <div className="mx-3 text-red-500 text-xs bg-gray-200 p-2 px-3 rounded-xl shadow">
                            {ofrecida_a.map((o, i) => (
                              <div key={i}>
                                <p>{o.ofrecida_a}</p>
                                <p>Ofrecida por: {o.ofrecida_por}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {ofrecida_a.length > 0 ? (
                          <div className="text-white text-xs bg-blue-400 rounded shadow px-3 py-2">
                            {ofrecida_a.map((o, i) => (
                              <div key={i}>
                                Ofrecida por {o.ofrecida_por} a {o.ofrecida_a}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-gray-400 text-xs text-center">Sin datos</div>
                        )}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PreferentesAnoContent;
