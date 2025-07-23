import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface Resultado {
  id: number;
  nombreContacto: string;
  apellidosContacto: string;
  codigoContacto: string;
  empresaAsociada: string;
  telefono: string;
  email: string;
  // Si tienes más campos puedes agregarlos aquí
}

interface TablaContactosProps {
  contactoFiltro: string;
  apellidosFiltro: string;
  codigoContactoFiltro: string;
  empresaAsociadaFiltro: string;
  telFiltro: string;
  emailFiltro: string;
}

// Datos de ejemplo (mock)
const mockResultados: Resultado[] = [
  {
    id: 1,
    nombreContacto: 'Juan',
    apellidosContacto: 'Pérez',
    codigoContacto: '001',
    empresaAsociada: 'Empresa A',
    telefono: '123456789',
    email: 'juan.perez@empresaA.com',
  },
  {
    id: 2,
    nombreContacto: 'María',
    apellidosContacto: 'Gómez',
    codigoContacto: '002',
    empresaAsociada: 'Empresa B',
    telefono: '987654321',
    email: 'maria.gomez@empresaB.com',
  },
  {
    id: 3,
    nombreContacto: 'Carlos',
    apellidosContacto: 'López',
    codigoContacto: '003',
    empresaAsociada: 'Empresa A',
    telefono: '123123123',
    email: 'carlos.lopez@empresaA.com',
  },
];

const TablaContactos: FC<TablaContactosProps> = ({
  contactoFiltro,
  apellidosFiltro,
  codigoContactoFiltro,
  empresaAsociadaFiltro,
  telFiltro,
  emailFiltro,
}) => {
  const router = useRouter();

  const resultadosFiltrados = mockResultados.filter((res) => {
    const coincideNombre =
      contactoFiltro === '' ||
      res.nombreContacto.toLowerCase().includes(contactoFiltro.toLowerCase());

    const coincideApellidos =
      apellidosFiltro === '' ||
      res.apellidosContacto.toLowerCase().includes(apellidosFiltro.toLowerCase());

    const coincideCodigoContacto =
      codigoContactoFiltro === '' ||
      res.codigoContacto.includes(codigoContactoFiltro);

    const coincideEmpresa =
      empresaAsociadaFiltro === '' ||
      res.empresaAsociada.toLowerCase().includes(empresaAsociadaFiltro.toLowerCase());

    const coincideTelefono =
      telFiltro === '' || res.telefono.includes(telFiltro);

    const coincideEmail =
      emailFiltro === '' ||
      res.email.toLowerCase().includes(emailFiltro.toLowerCase());

    return (
      coincideNombre &&
      coincideApellidos &&
      coincideCodigoContacto &&
      coincideEmpresa &&
      coincideTelefono &&
      coincideEmail
    );
  });

  const handleRedirection = (id: number) => {
    router.push(`/dashboard/contactos/${id}`);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left px-4 py-2'>Nombre</th>
            <th className='text-left px-4 py-2'>Apellidos</th>
            <th className='text-left px-4 py-2'>Código Contacto</th>
            <th className='text-left px-4 py-2'>Empresa Asociada</th>
            <th className='text-left px-4 py-2'>Teléfono</th>
            <th className='text-left px-4 py-2'>Email</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.length > 0 ? (
            resultadosFiltrados.map((res) => (
              <tr
                key={res.id}
                className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
                onClick={() => handleRedirection(res.id)}
              >
                <td className='px-4 py-2'>{res.nombreContacto}</td>
                <td className='px-4 py-2'>{res.apellidosContacto}</td>
                <td className='px-4 py-2'>{res.codigoContacto}</td>
                <td className='px-4 py-2'>{res.empresaAsociada}</td>
                <td className='px-4 py-2'>{res.telefono}</td>
                <td className='px-4 py-2'>{res.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className='text-center py-4 text-gray-500'>
                No se encontraron resultados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaContactos;
