"use client";
import React, { FC, useState } from 'react';

import TablaContenidoCampaña from './resumencomponents/TablaContenidoCampaña';
import TablaDatosPago from './resumencomponents/TablaDatosCobro';
import TablaDatosGenerales from './resumencomponents/TablaDatosGenerales';
import TablaDatosFirmante from './resumencomponents/TablaDatosFirmante';
import TablaDatosAnunciante from './resumencomponents/TablaDatosAnunciante';
import TablaDatosGestion from './resumencomponents/TablaDatosGestion';
import OtrosDatosEnFacturaProps from './resumencomponents/OtrosDatosEnFactura';

const ResumenCampana: FC = () => {
    const [isDatosContactoShown, setIsDatosContactoShown] = useState(false)
    const handleTogleDatosContactoShown = () => {
        setIsDatosContactoShown(!isDatosContactoShown)
    }

    // Datos simulados (puedes pasar esto como props si lo deseas)
    const empresaAnunciante = {
        nombreEmpresa: 'Tvitec',
        codigoCrm: '1234',
        codigoEdisoft: '1234TIGER',
        pais: 'ESTONIA',
        nombreContacto: 'Frank Gimeno',
        //   codigoContacto:'1234',
        cargoContacto: 'Comercial',
    };

    const empresaFirmante = {
        nombreEmpresa: 'Tvitec',
        codigoCrm: '1234',
        codigoEdisoft: '1234TIGER',
        pais: 'ESTONIA',
        nombreContacto: 'Frank Gimeno',
        //   codigoContacto:'1234',
        cargoContacto: 'Comercial',
    };

    const empresaGestion = {
        nombreEmpresa: 'Tvitec',
        codigoCrm: '1234',
        codigoEdisoft: '1234TIGER',
        pais: 'ESTONIA',
        nombreContacto: 'Frank Gimeno',
        //   codigoContacto:'1234',
        cargoContacto: 'Comercial',
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600 p-12">
            <h2 className="text-lg font-semibold mb-4">Resumen de la campaña</h2>

            <p className="font-bold text-gray-500">Datos generales:</p>
            <TablaDatosGenerales />

            <div className='flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12 p-12'>
                <div className='flex flex-row'>
                    <p className="font-bold text-gray-500">Datos de contacto</p>
                    <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
                        onClick={() => handleTogleDatosContactoShown()} >
                        Mostrar
                    </button>
                </div>
                {isDatosContactoShown == true && <div className=''>
                    <p className="font-bold text-gray-500 mt-6">Datos de la empresa anunciante:</p>
                    <TablaDatosAnunciante empresaAnunciante={empresaAnunciante} />

                    <p className="font-bold text-gray-500 mt-6">Datos de la empresa firmante:</p>
                    <TablaDatosFirmante empresaFirmante={empresaFirmante} />

                    <p className="font-bold text-gray-500 mt-6">Datos de gestión publicitaria:</p>
                    <TablaDatosGestion empresaGestion={empresaGestion} />
                </div>}
            </div>
                <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
                    <TablaContenidoCampaña />

                        <p className="font-bold text-gray-500 mt-6">Datos de pago:</p>
                        <TablaDatosPago />
                                                <p className="font-bold text-gray-500 mt-6">Otros datos en factura:</p>
                                                <OtrosDatosEnFacturaProps/>

        </div>
    );
};

export default ResumenCampana;
