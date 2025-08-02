import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface Informe {
  mes: string;
  tipo: string;
  comisiones: string;
}

const mockData: Informe[] = [
  { mes: '2025-08', tipo: 'Informe de remuneraciones', comisiones: '4,350.00 €' },
  { mes: '2025-07', tipo: 'Informe de remuneraciones', comisiones: '3,875.40 €' },
  { mes: '2025-06', tipo: 'Informe de remuneraciones', comisiones: '4,120.75 €' },
  { mes: '2025-05', tipo: 'Informe de remuneraciones', comisiones: '3,650.00 €' },
  { mes: '2025-04', tipo: 'Informe de remuneraciones', comisiones: '4,500.90 €' },
  { mes: '2025-03', tipo: 'Informe de remuneraciones', comisiones: '3,980.30 €' },
  { mes: '2025-02', tipo: 'Informe de remuneraciones', comisiones: '4,200.00 €' },
  { mes: '2025-01', tipo: 'Informe de remuneraciones', comisiones: '3,750.00 €' },
  { mes: '2024-12', tipo: 'Informe de remuneraciones', comisiones: '4,100.00 €' },
  { mes: '2024-11', tipo: 'Informe de remuneraciones', comisiones: '3,900.00 €' },
  { mes: '2024-10', tipo: 'Informe de remuneraciones', comisiones: '4,250.00 €' },
  { mes: '2024-09', tipo: 'Informe de remuneraciones', comisiones: '4,000.00 €' },
];

const InformesRemuneraciones: FC = () => {
    const router = useRouter()
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Informes de Remuneraciones</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="px-4 py-2 text-left">Mes</th>
            <th className="px-4 py-2 text-left">Tipo de informe</th>
            <th className="px-4 py-2 text-left">Comisiones totales a cobrar</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((informe, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 cursor-pointer' : 'bg-white cursor-pointer'} 
            onClick={()=>{router.push('/dashboard/administracion/informes/comercial/informeremuneraciones')}}>
              <td className="px-4 py-2">{informe.mes}</td>
              <td className="px-4 py-2">{informe.tipo}</td>
              <td className="px-4 py-2">{informe.comisiones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InformesRemuneraciones;