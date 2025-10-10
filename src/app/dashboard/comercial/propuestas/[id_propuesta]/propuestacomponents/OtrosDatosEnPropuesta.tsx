import React, { FC } from 'react';

interface CuentaPropuesta {
  id_cuenta_propuesta: string;
  id_contacto: string;
  cargoContacto: string;
}

interface DetallesPropuesta {
  id_propuesta: string;
  id_agente_propuesta: string;
  estado_propuesta: string;
  fecha_envio_propuesta: string;
}

interface Props {
  propuesta: {
    detalles_propuesta: DetallesPropuesta;
    cuenta_propuesta: CuentaPropuesta;
    // Puedes añadir otros campos si quieres mostrarlos
  };
}

const OtrosDatosEnPropuesta: FC<Props> = ({ propuesta }) => {
  const { cuenta_propuesta } = propuesta;

  return (
    <table className="table-auto border-collapse text-center w-full">
      <thead>
        <tr className="bg-blue-950 text-white">
          <th className="px-4 py-2">ID cuenta</th>
          <th className="px-4 py-2">ID contacto</th>
          <th className="px-4 py-2">Cargo contacto</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-gray-700">
          <td className="px-4 py-2">{cuenta_propuesta.id_cuenta_propuesta}</td>
          <td className="px-4 py-2">{cuenta_propuesta.id_contacto}</td>
          <td className="px-4 py-2">{cuenta_propuesta.cargoContacto}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default OtrosDatosEnPropuesta;
