"use client"
import React, { FC } from 'react';
import TablaDatosEmpresa from './resumencomponents/Tabladatosempresa';
import TablaContenidoCampaña from './resumencomponents/TablaContenidoCampaña';
import TablaDatosPago from './resumencomponents/TablaDatosPago';
import TablaDatosGenerales from './resumencomponents/TablaDatosGenerales';

interface ResumenCampanaProps {

}

const ResumenCampana: FC<ResumenCampanaProps> = ({ }) => {
    return (
        <div className='min-h-screen flex flex-col  bg-gray-100 text-gray-600 p-12'>
            <h2 className="text-lg font-semibold mb-4">Resumen de la campaña</h2>
            <p className='font-bold text-gray-500'>Datos generales:</p>
            <TablaDatosGenerales/>
        
            <p className='font-bold text-gray-500'>Datos de la empresa:</p>
                <TablaDatosEmpresa
                    empresaAnunciante={{
                        nombreEmpresa: 'Acme Corp',
                        codigoCrm: 'ACM-123',
                        codigoVtiger: 'VTG-456',
                        pais: 'España',
                    }}
                    empresaFirmante={{
                        nombreFirmante: 'Juan Pérez',
                        cargoFirmante: 'Director Comercial',
                        emailFirmante: 'juan.perez@acme.com',
                        pais: 'España',
                    }}
                />
             <p className='font-bold text-gray-500'>Contenido en campaña:</p>
            <TablaContenidoCampaña />

            <div className='flex flex-col text-sm border border-gray-100 '>
                <p className='font-bold text-gray-500'>Datos de pago:</p>
                <TablaDatosPago />
            </div>
        </div>
    );
};

export default ResumenCampana;