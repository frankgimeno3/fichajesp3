import React, { FC } from 'react';

interface OtrosDatosContactoProps {
  
}

const OtrosDatosContacto: FC<OtrosDatosContactoProps> = ({ }) => {
  return (
<div className="p-4">
      <h2 className="text-xl font-bold mb-4">Otros datos del contacto</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Idiomas</th>
            <th className="text-left p-2 font-light">Conocido en</th>
            <th className="text-left p-2 font-light">Contactado en feria</th>
            <th className="text-left p-2 font-light">Suscripciones en vidrioperfil</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b border-gray-200">{item.codigoCRM}</td>
              <td className="p-2 border-b border-gray-200">{item.codigoEdisoft}</td>
              <td className="p-2 border-b border-gray-200">{item.descripcion}</td>
              <td className="p-2 border-b border-gray-200">{item.actividades.join(', ')}</td>
              <td className="p-2 border-b border-gray-200">{item.qq ? 'Sí' : 'No'}</td>
              <td className="p-2 border-b border-gray-200">{item.fuentes}</td>
            </tr>
          ))}
        </tbody>
      </table>

            <h2 className="text-xl font-bold mb-4">Otros datos de interñes</h2>
            <textarea className='border border-gray-100 text-gray-600' placeholder='Introduzca aquí otros datos de interés'>

            </textarea>
    </div> 
     );
};

export default OtrosDatosContacto;