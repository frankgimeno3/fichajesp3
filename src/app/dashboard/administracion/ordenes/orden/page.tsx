import MiddleNav from '@/app/general_components/MiddleNav';
import React, { FC } from 'react';

interface OrdenProps { }

const Orden: FC<OrdenProps> = ({ }) => {

     const detallesOrden = {
        orden: "ORD-2025-001",
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

    const secciones = [
        {
            titulo: "Datos Generales",
            campos: [
                { label: "ORDEN", value: detallesOrden.orden },
                { label: "CÓDIGO CRM", value: detallesOrden.codigoCRM },
                { label: "CLIENTE", value: detallesOrden.cliente },
                { label: "AGENTE", value: detallesOrden.agente },
                { label: "ESTADO", value: detallesOrden.estado },
            ]
        },
        {
            titulo: "Facturación",
            campos: [
                { label: "FECHA DE COBRO PREVISTA", value: detallesOrden.fechaCobroPrevista },
                { label: "FECHA DE COBRO FACTURA", value: detallesOrden.fechaCobroFactura },
                { label: "FACTURA", value: detallesOrden.factura },
                { label: "FECHA FACTURA", value: detallesOrden.fechaFactura },
                { label: "IMPORTE CON IVA", value: detallesOrden.importeConIVA },
                { label: "FORMA DE COBRO", value: detallesOrden.formaDeCobro },
                { label: "Nº RECIBO", value: detallesOrden.numRecibo },
                { label: "Nº REMESA", value: detallesOrden.numRemesa },
                { label: "COMISIONES PAGADAS", value: detallesOrden.comisionesPagadas },
            ]
        },
        {
            titulo: "Contrato",
            campos: [
                { label: "CONTRATO ASOCIADO", value: detallesOrden.contratoAsociado },
                { label: "FECHA FIRMA CONTRATO", value: detallesOrden.fechaFirmaContrato },
                { label: "IMPORTE TOTAL BI CONTRATO", value: detallesOrden.importeTotalBI },
                { label: "CAMPAÑA ASOCIADA", value: detallesOrden.campaniaAsociada },
            ]
        }
    ];

    return (
        <div className="flex flex-col bg-gray-200 h-full min-h-screen text-gray-600">
            <MiddleNav tituloprincipal="Detalle de Orden" />
            <div className="bg-white min-h-screen p-4 text-gray-600 w-full">
                <p className="text-lg font-semibold mb-4">Detalles de la orden</p>

                <div className="space-y-6">
                    {secciones.map((seccion, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl shadow p-4">
                            <h2 className="text-md font-semibold mb-3 text-gray-700">{seccion.titulo}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                                {seccion.campos.map((campo, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-xs text-gray-500">{campo.label}</span>
                                        <span className="text-sm font-medium text-gray-800">{campo.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orden;
