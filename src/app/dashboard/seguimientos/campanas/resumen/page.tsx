"use client";
import React, { FC } from 'react';

 import TablaContenidoCampaña from './resumencomponents/TablaContenidoCampaña';
import TablaDatosPago from './resumencomponents/TablaDatosPago';
import TablaDatosGenerales from './resumencomponents/TablaDatosGenerales';
import TablaDatosFirmante from './resumencomponents/TablaDatosFirmante';
import TablaDatosAnunciante from './resumencomponents/TablaDatosAnunciante';
import TablaDatosGestion from './resumencomponents/TablaDatosGestion';

const ResumenCampana: FC = () => {
  // Datos simulados (puedes pasar esto como props si lo deseas)
  const empresaAnunciante = {
    nombreEmpresa: 'Acme Corp',
    codigoCrm: 'ACM-123',
    codigoEdisoft: 'VTG-456',
    pais: 'España',
  };

  const empresaFirmante = {
    nombreFirmante: 'Juan Pérez',
    cargoFirmante: 'Director Comercial',
    nombreEmpresaFirmante:'TVITEC',
    emailFirmante: 'juan.perez@acme.com',
    pais: 'España',
  };
  
  const empresaGestion = {
      nombreEmpresa: 'Tvitec',
      codigoCrm: '1234',
      codigoEdisoft: '1234TIGER',
      pais: 'ESTONIA',
        nombreContacto:'Frank Gimeno',
        cargoContacto:'Comercial',
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-600 p-12">
      <h2 className="text-lg font-semibold mb-4">Resumen de la campaña</h2>

      <p className="font-bold text-gray-500">Datos generales:</p>
      <TablaDatosGenerales />

      <p className="font-bold text-gray-500 mt-6">Datos de la empresa anunciante:</p>
      <TablaDatosAnunciante empresaAnunciante={empresaAnunciante} />

      <p className="font-bold text-gray-500 mt-6">Datos de la empresa firmante:</p>
      <TablaDatosFirmante empresaFirmante={empresaFirmante} />

        <p className="font-bold text-gray-500 mt-6">Datos de gestión publicitaria:</p>
        <TablaDatosGestion empresaGestion={empresaGestion}/>

      <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
      <TablaContenidoCampaña />

      <div className="flex flex-col text-sm border border-gray-100 mt-6">
        <p className="font-bold text-gray-500">Datos de pago:</p>
        <TablaDatosPago />
      </div>
    </div>
  );
};

export default ResumenCampana;
