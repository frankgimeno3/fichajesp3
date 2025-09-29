import React, { FC, useState } from 'react';
import RegistroCard from './cards/RegistroCard';

interface ContenidoRegistroProps {}

const ContenidoRegistro: FC<ContenidoRegistroProps> = ({ }) => {
  const [mes, setMes] = useState("Marzo");

  const registros = [
    {
      autor: 'Frank Gimeno',
      fecha: '24 Marzo 2025',
      tipoEvento: 'Comentario',
      detalles:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt iusto cum quae molestiae perspiciatis.',
    },
    {
      autor: 'Laura Pérez',
      fecha: '25 Marzo 2025',
      tipoEvento: 'Modificación de campo "Dirección"',
      detalles: 'Se actualizó la dirección a: Calle Falsa 123, Springfield.',
    },
    {
      autor: 'Frank Gimeno',
      fecha: '26 Marzo 2025',
      tipoEvento: 'Edición de comentario',
      detalles: 'Se modificó el contenido del comentario para mayor claridad.',
    },
    {
      autor: 'Ricardo Gómez',
      fecha: '27 Marzo 2025',
      tipoEvento: 'Añadido en apartado Ferias',
      detalles: 'Se registró la asistencia a la feria tecnológica de Berlín 2025.',
    },
    {
      autor: 'Pep Martínez',
      fecha: '28 Marzo 2025',
      tipoEvento: 'Nueva propuesta creada',
      detalles: 'Se creó una nueva propuesta para la empresa con código: ASD123.',
    },
  ];

  return (
    <div>
      <p className="text-xl font-semibold mb-4">Registro {mes}</p>
      {registros.map((registro, index) => (
        <RegistroCard key={index} {...registro} />
      ))}
    </div>
  );
};

export default ContenidoRegistro;
