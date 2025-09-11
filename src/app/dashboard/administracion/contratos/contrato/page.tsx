"use client";
import React, { FC, useState } from 'react';
import MiddleNav from '@/app/general_components/MiddleNav';

import TablaContenidoCampaña from './contratoComponents/TablaContenidoCampana';

import TablaDatosEmpresa from './contratoComponents/TablaDatosEmpresa';
import TablaDatosGenerales from './contratoComponents/TablaDatosGenerales';
import TablaDatosPago from './contratoComponents/TablaDatosPago';
import OtrosDatosEnFactura from './contratoComponents/OtrosDatosEnFactura';

const Contrato: FC = () => {
    const [isDatosContactoShown, setIsDatosContactoShown] = useState(false)
    const [codigoContrato] = useState('ORD-2025-001')

    const handleTogleDatosContactoShown = () => {
        setIsDatosContactoShown(!isDatosContactoShown)
    }

    // 🔹 Datos del contrato (antes estaban en "detallesContrato")
    const detallesContrato = {
        Contrato: "ORD-2025-001",
        codigoCRM: "CRM-4589",
        cliente: "Empresa Ejemplo S.A.",
        agente: "Juan Pérez",
        fechaCobroPrevista: "15/09/2025",
        fechaCobroFactura: "18/09/2025",
        estado: "Pendiente",
        comisionesPagadas: "Sí",
        contratoAsociado: "CT-98765",
        factura: "FAC-2025-332",
        fechaFactura: "12/09/2025",
        importeConIVA: "12.500 €",
        formaDeCobro: "Transferencia Bancaria",
        numRecibo: "RCB-55874",
        numRemesa: "REM-2025-09",
        fechaFirmaContrato: "01/09/2025",
        importeTotalBI: "10.330 €",
        campaniaAsociada: "Campaña Otoño 2025",
    };

    // 🔹 Datos de empresas (para la tabla unificada)
    const empresa = {
        nombreEmpresa: 'Tvitec',
        codigoCrm: '1234',
        codigoEdisoft: '1234TIGER',
        pais: 'ESTONIA',
        nombreContacto: 'Frank Gimeno',
        cargoContacto: 'Comercial',
    };
 
    return (
        <div className="min-h-screen flex flex-col bg-gray-200 text-gray-600">
            <MiddleNav tituloprincipal="Detalle del Contrato" />
            <div className="bg-white min-h-screen p-8 text-gray-600 w-full">
                <h2 className="text-lg font-semibold mb-4">
                    Resumen del contrato nº {codigoContrato}
                </h2>

                <p className="font-bold text-gray-500">Datos generales:</p>
                <TablaDatosGenerales codigoContrato={codigoContrato} />

                {/* 🔹 Sección desplegable de contactos */}
                <div className='flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12 '>
                    <div
                        className='flex flex-row items-center justify-between bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
                        onClick={handleTogleDatosContactoShown}
                    >
                        <p className="font-bold">Datos de contacto</p>
                        <div className="ml-2">
                            {isDatosContactoShown ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div>
                    </div>

                    {isDatosContactoShown && (
                        <div className='px-12 bg-gray-100 pb-12'>
                            <p className="font-bold text-gray-500 mt-6">Datos de la empresa :</p>
                            <TablaDatosEmpresa empresa={empresa} />
                        </div>
                    )}
                </div>

                {/* 🔹 Secciones extra */}
                <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
                <TablaContenidoCampaña />

                <p className="font-bold text-gray-500 mt-6">Datos de pago:</p>
                <TablaDatosPago />

                <p className="font-bold text-gray-500 mt-6">Otros datos en factura:</p>
                <OtrosDatosEnFactura />
            </div>
        </div>
    );
};

export default Contrato;
