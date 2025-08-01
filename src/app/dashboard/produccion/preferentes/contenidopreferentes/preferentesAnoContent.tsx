import React, { FC } from 'react';

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

const mockData: Edicion[] = [
  {
    "edicion": "212",
    "preferentes": [
      {
        "pagina": "PORTADA",
        "estado": {
          "contratada": {
            "contratada_por": "Agente A",
            "vendida_a": "Empresa Alpha"
          },
          "ofrecida_a": [
            { "ofrecida_por": "Agente B", "ofrecida_a": "Empresa Beta" }
          ]
        }
      },
      {
        "pagina": "P1",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente C", "ofrecida_a": "Empresa Delta" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "213",
    "preferentes": [
      {
        "pagina": "P2",
        "estado": {
          "contratada": {
            "contratada_por": "Agente D",
            "vendida_a": "Empresa Zeta"
          },
          "ofrecida_a": []
        }
      },
      {
        "pagina": "P5",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente E", "ofrecida_a": "Empresa Gamma" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "214",
    "preferentes": [
      {
        "pagina": "P6+7",
        "estado": {
          "contratada": {
            "contratada_por": "Agente F",
            "vendida_a": "Empresa Sigma"
          },
          "ofrecida_a": [
            { "ofrecida_por": "Agente G", "ofrecida_a": "Empresa Omega" }
          ]
        }
      },
      {
        "pagina": "INT. PORTADA",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente H", "ofrecida_a": "Empresa Epsilon" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "215",
    "preferentes": [
      {
        "pagina": "P3",
        "estado": {
          "contratada": {
            "contratada_por": "Agente I",
            "vendida_a": "Empresa Kronos"
          },
          "ofrecida_a": []
        }
      },
      {
        "pagina": "P7+8",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente J", "ofrecida_a": "Empresa Lambda" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "216",
    "preferentes": [
      {
        "pagina": "INT. PORTADA",
        "estado": {
          "contratada": {
            "contratada_por": "Agente K",
            "vendida_a": "Empresa Nova"
          },
          "ofrecida_a": [
            { "ofrecida_por": "Agente L", "ofrecida_a": "Empresa Orion" }
          ]
        }
      },
      {
        "pagina": "P1",
        "estado": {
          "contratada": "no",
          "ofrecida_a": []
        }
      }
    ]
  },
  {
    "edicion": "217",
    "preferentes": [
      {
        "pagina": "PORTADA",
        "estado": {
          "contratada": {
            "contratada_por": "Agente M",
            "vendida_a": "Empresa Quark"
          },
          "ofrecida_a": []
        }
      },
      {
        "pagina": "P5",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente N", "ofrecida_a": "Empresa Reactor" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "218",
    "preferentes": [
      {
        "pagina": "P2",
        "estado": {
          "contratada": {
            "contratada_por": "Agente O",
            "vendida_a": "Empresa Sombra"
          },
          "ofrecida_a": []
        }
      },
      {
        "pagina": "P6+7",
        "estado": {
          "contratada": "no",
          "ofrecida_a": [
            { "ofrecida_por": "Agente P", "ofrecida_a": "Empresa Titan" }
          ]
        }
      }
    ]
  },
  {
    "edicion": "219",
    "preferentes": [
      {
        "pagina": "P3",
        "estado": {
          "contratada": {
            "contratada_por": "Agente Q",
            "vendida_a": "Empresa Umbra"
          },
          "ofrecida_a": [
            { "ofrecida_por": "Agente R", "ofrecida_a": "Empresa Vector" }
          ]
        }
      },
      {
        "pagina": "P1",
        "estado": {
          "contratada": "no",
          "ofrecida_a": []
        }
      }
    ]
  }
]


const preferentesDisponibles = [
  "PORTADA", "INT. PORTADA", "P1", "P2", "P3", "P5", "P6+7", "P7+8"
];

const PreferentesAnoContent: FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1 text-left">Edición</th>
            {preferentesDisponibles.map((pref) => (
              <th key={pref} className="border border-gray-300 px-2 py-1 text-center">
                {pref}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((ed) => (
            <tr key={ed.edicion}>
              <td className="border border-gray-300 px-2 py-1 font-medium">{ed.edicion}</td>
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
                        <div className="font-semibold text-green-700">Contratada</div>
                        <div className="text-xs text-gray-600">
                          por {contratada.contratada_por}<br />
                          a {contratada.vendida_a}
                        </div>
                        {ofrecida_a.length > 0 && (
                          <div className="mt-1 text-red-500 line-through text-xs">
                            {ofrecida_a.map((o, i) => (
                              <div key={i}>
                                Ofrecida por {o.ofrecida_por} a {o.ofrecida_a}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        {ofrecida_a.length > 0 ? (
                          <div className="text-blue-700 text-xs">
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
