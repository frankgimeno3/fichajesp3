import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface Resultado {
  id: number;
  nombreEmpresa: string;
  codigoCRM: string;
  numeroClientes: number;
  agenteAsignado: number;
  fechaUltimaPropuesta: string;
  telefono: string;
  dominio: string;
}

interface TablaClientesProps {
  clienteFiltro: string;
  agenteFiltro: string;
  telFiltro: string;
  dominioFiltro: string;
}

const mockResultados: Resultado[] = [
  {
    id: 1,
    nombreEmpresa: 'Empresa A',
    codigoCRM: 'CRM001',
    numeroClientes: 3,
    agenteAsignado: 123,
    fechaUltimaPropuesta: '2025-07-20',
    telefono: '123456789',
    dominio: 'empresaA.com',
  },
  {
    id: 2,
    nombreEmpresa: 'Empresa B',
    codigoCRM: 'CRM002',
    numeroClientes: 5,
    agenteAsignado: 456,
    fechaUltimaPropuesta: '2025-07-10',
    telefono: '987654321',
    dominio: 'empresaB.org',
  },
  {
    id: 3,
    nombreEmpresa: 'Cliente X',
    codigoCRM: 'CRM999',
    numeroClientes: 2,
    agenteAsignado: 123,
    fechaUltimaPropuesta: '2025-06-30',
    telefono: '123123123',
    dominio: 'clienteX.net',
  },
];

const TablaClientes: FC<TablaClientesProps> = ({
  clienteFiltro,
  agenteFiltro,
  telFiltro,
  dominioFiltro,
}) => {
  const resultadosFiltrados = mockResultados.filter((r) => {
    const coincideCliente =
      clienteFiltro === '' ||
      r.nombreEmpresa.toLowerCase().includes(clienteFiltro.toLowerCase()) ||
      r.codigoCRM.toLowerCase().includes(clienteFiltro.toLowerCase());

    const coincideAgente =
      agenteFiltro === '' || r.agenteAsignado.toString() === agenteFiltro;

    const coincideTelefono =
      telFiltro === '' || r.telefono.includes(telFiltro);

    const coincideDominio =
      dominioFiltro === '' || r.dominio.toLowerCase().includes(dominioFiltro.toLowerCase());

    return coincideCliente && coincideAgente && coincideTelefono && coincideDominio;
  });

  const router = useRouter();

  const handleRedirection = (params: string) => {
    router.push(params);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left px-4 py-2'>Nombre Empresa</th>
            <th className='text-left px-4 py-2'>Código CRM</th>
            <th className='text-left px-4 py-2'>Agente Asignado</th>
            <th className='text-left px-4 py-2'>País</th>
            <th className='text-left px-4 py-2'>Tel principal</th>
            <th className='text-left px-4 py-2'>Fecha Último Comentario</th>
          </tr>
        </thead>
        <tbody>
          {resultadosFiltrados.map((res) => (
            <tr
              key={res.id}
              className='border-t border-gray-200 hover:bg-gray-100/30 cursor-pointer'
              onClick={() => handleRedirection('/dashboard/Clientes/cliente')}
            >
              <td className='px-4 py-2'>{res.nombreEmpresa}</td>
              <td className='px-4 py-2'>{res.codigoCRM}</td>
              <td className='px-4 py-2'>{res.numeroClientes}</td>
              <td className='px-4 py-2'>{res.agenteAsignado}</td>
              <td className='px-4 py-2'>{res.fechaUltimaPropuesta}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {resultadosFiltrados.length === 0 && (
        <p className='mt-4 text-center text-gray-500'>No se encontraron resultados.</p>
      )}
    </div>
  );
};

export default TablaClientes;
