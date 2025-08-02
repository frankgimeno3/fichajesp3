import React, { FC } from 'react';

interface InformeVentas {
  mes: string;
  tipo: string;
  ventasTotales: string;
  comisionesGeneradas: string;
}

const mockDataVentas: InformeVentas[] = [
  { mes: '2025-08', tipo: 'Informe de ventas', ventasTotales: '15,000.00 €', comisionesGeneradas: '1,200.00 €' },
  { mes: '2025-07', tipo: 'Informe de ventas', ventasTotales: '14,500.00 €', comisionesGeneradas: '1,150.00 €' },
  { mes: '2025-06', tipo: 'Informe de ventas', ventasTotales: '16,300.00 €', comisionesGeneradas: '1,300.00 €' },
  { mes: '2025-05', tipo: 'Informe de ventas', ventasTotales: '13,700.00 €', comisionesGeneradas: '1,100.00 €' },
  { mes: '2025-04', tipo: 'Informe de ventas', ventasTotales: '17,000.00 €', comisionesGeneradas: '1,350.00 €' },
  { mes: '2025-03', tipo: 'Informe de ventas', ventasTotales: '15,600.00 €', comisionesGeneradas: '1,250.00 €' },
  { mes: '2025-02', tipo: 'Informe de ventas', ventasTotales: '14,900.00 €', comisionesGeneradas: '1,180.00 €' },
  { mes: '2025-01', tipo: 'Informe de ventas', ventasTotales: '16,100.00 €', comisionesGeneradas: '1,290.00 €' },
  { mes: '2024-12', tipo: 'Informe de ventas', ventasTotales: '15,300.00 €', comisionesGeneradas: '1,220.00 €' },
  { mes: '2024-11', tipo: 'Informe de ventas', ventasTotales: '14,800.00 €', comisionesGeneradas: '1,160.00 €' },
  { mes: '2024-10', tipo: 'Informe de ventas', ventasTotales: '16,500.00 €', comisionesGeneradas: '1,310.00 €' },
  { mes: '2024-09', tipo: 'Informe de ventas', ventasTotales: '15,700.00 €', comisionesGeneradas: '1,260.00 €' },
];

const InformesVentas: FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Informes de Ventas</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2 text-left">Mes</th>
            <th className="px-4 py-2 text-left">Tipo de informe</th>
            <th className="px-4 py-2 text-left">Ventas totales</th>
            <th className="px-4 py-2 text-left">Comisiones generadas</th>
          </tr>
        </thead>
        <tbody>
          {mockDataVentas.map((informe, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2">{informe.mes}</td>
              <td className="px-4 py-2">{informe.tipo}</td>
              <td className="px-4 py-2">{informe.ventasTotales}</td>
              <td className="px-4 py-2">{informe.comisionesGeneradas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InformesVentas;
