"use client"
import React, { useState } from 'react';
import cuentas from "@/app/contents/cuentasContents.json"

interface CRMData {
  codigoCRM: string;
  codigoEdisoft: string;
  descripcion: string;
  actividades: string[];
  qq: boolean;
  fuentes: string;
}

const mockData: CRMData[] = [
  {
    codigoCRM: 'CRM001',
    codigoEdisoft: 'ED001',
    descripcion: 'Venta de software empresarial',
    actividades: ['Ventas', 'Consultoría'],
    qq: true,
    fuentes: 'Web, Email',
  },
];

const DatosCRM = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos CRM</h2>
      <table className="min-w-full">
        <thead className="bg-blue-950/80 text-white">
          <tr>
            <th className="text-left p-2 font-light">Código CRM</th>
            <th className="text-left p-2 font-light">Código EDISOFT</th>
            <th className="text-left p-2 font-light">DESCRIPCIÓN DE ACTIVIDAD</th>
            <th className="text-left p-2 font-light">Actividades</th>
            <th className="text-left p-2 font-light">QQ?</th>
            <th className="text-left p-2 font-light">Fuentes novedades</th>
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
    </div>
  );
};

export default DatosCRM;
