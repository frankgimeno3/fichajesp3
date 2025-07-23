import React, { FC } from 'react';

interface Seguimiento {
  tema: string;
  descripcion: string;
  link: string;
}

interface SeguimientosProps {}

const Seguimientos: FC<SeguimientosProps> = () => {
  const seguimientoData: Seguimiento[] = [
    {
      tema: 'Gestiones de renovación de campañas',
      descripcion:
        'Se aprobó la modificación solicitada en el sistema interno para la entrada de datos del cliente X.',
      link: 'https://www.google.es',
    },
    {
      tema: 'Leads abc',
      descripcion:
        'Contrato del proveedor Y en revisión legal. Se espera resolución para el viernes.',
      link: 'https://www.example.com/contrato',
    },
    {
      tema: 'Seguimiento anunciantes competidores',
      descripcion:
        'El proveedor Z confirmó la entrega para el 15 de agosto. Se recomienda confirmar recepción.',
      link: 'https://www.example.com/entrega',
    },
    {
      tema: 'Seguimiento campañas en curso',
      descripcion:
        'Nuevas políticas de seguridad fueron compartidas. Se requiere confirmación de lectura.',
      link: 'https://www.example.com/politicas',
    },
    {
      tema: 'Seguimiento específico ferias',
      descripcion:
        'El equipo completó la capacitación de atención al cliente. Resultados disponibles.',
      link: 'https://www.example.com/capacitacion',
    },
  ];

  return (
    <div className="bg-white h-full min-h-screen p-12 text-gray-600">
      <h2 className="text-lg font-semibold mb-4">
        Seguimientos para el agente Pep
      </h2>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-2 border-b">Tema</th>
            <th className="text-left p-2 border-b">Descripción de las gestiones</th>
            <th className="text-left p-2 border-b">Link al excel</th>
          </tr>
        </thead>
        <tbody>
          {seguimientoData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border-b">{item.tema}</td>
              <td className="p-2 border-b">{item.descripcion}</td>
              <td className="p-2 border-b">
                <a href={item.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  Ver enlace
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default Seguimientos;
