import React, { FC } from 'react';

interface CuentaRelacionada {
  nombreEmpresa: string;
  codigoCRM: string;
  relacion: string;
  agenteAsignado: string;
  pais: string;
  fechaUltimoComentario: string;
}

interface Factura {
  numero: string;
  fecha: string;
  estado: string;
  contenido: string;
}

interface DatosFacturacion {
  nombreFiscal: string;
  vat: string;
  direccionFiscal: string;
  pais: string;
}

interface ContenidoAdministrativoProps {}

const mockCuentas: CuentaRelacionada[] = [
  {
    nombreEmpresa: 'Tech Solutions S.A.',
    codigoCRM: 'CRM1001',
    relacion: 'Cliente',
    agenteAsignado: 'Juan Pérez',
    pais: 'México',
    fechaUltimoComentario: '2025-08-15',
  },
  {
    nombreEmpresa: 'Innovación Global Ltd.',
    codigoCRM: 'CRM1002',
    relacion: 'Proveedor',
    agenteAsignado: 'María López',
    pais: 'España',
    fechaUltimoComentario: '2025-08-18',
  },
];

const mockFacturas: Factura[] = [
  {
    numero: 'F-2025-001',
    fecha: '2025-07-10',
    estado: 'Pagada',
    contenido: 'Licencia de software anual',
  },
  {
    numero: 'F-2025-002',
    fecha: '2025-08-01',
    estado: 'Pendiente',
    contenido: 'Servicios de consultoría',
  },
];

const mockDatosFacturacion: DatosFacturacion = {
  nombreFiscal: 'Tech Solutions S.A.',
  vat: 'MX123456789',
  direccionFiscal: 'Av. Reforma 123, CDMX',
  pais: 'México',
};

const ContenidoAdministrativo: FC<ContenidoAdministrativoProps> = ({ }) => {
  return (
    <div className="p-4 space-y-8">
      {/* Cuentas relacionadas */}
      <div>
        <h2 className="text-xl font-bold mb-4">Cuentas relacionadas</h2>
        <table className="min-w-full">
          <thead className="bg-blue-950/80 text-white">
            <tr>
              <th className="text-left p-2 font-light">Nombre Empresa</th>
              <th className="text-left p-2 font-light">Código CRM</th>
              <th className="text-left p-2 font-light">Relación con la cuenta</th>
              <th className="text-left p-2 font-light">Agente Asignado</th>
              <th className="text-left p-2 font-light">País</th>
              <th className="text-left p-2 font-light">Fecha Último Comentario</th>
            </tr>
          </thead>
          <tbody>
            {mockCuentas.map((cuenta, idx) => (
              <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
                <td className="p-2 border-b border-gray-200">{cuenta.nombreEmpresa}</td>
                <td className="p-2 border-b border-gray-200">{cuenta.codigoCRM}</td>
                <td className="p-2 border-b border-gray-200">{cuenta.relacion}</td>
                <td className="p-2 border-b border-gray-200">{cuenta.agenteAsignado}</td>
                <td className="p-2 border-b border-gray-200">{cuenta.pais}</td>
                <td className="p-2 border-b border-gray-200">{cuenta.fechaUltimoComentario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Facturas anteriores */}
      <div>
        <h2 className="text-xl font-bold mb-4">Facturas anteriores</h2>
        <table className="min-w-full">
          <thead className="bg-blue-950/80 text-white">
            <tr>
              <th className="text-left p-2 font-light">Nº Factura</th>
              <th className="text-left p-2 font-light">Fecha</th>
              <th className="text-left p-2 font-light">Estado</th>
              <th className="text-left p-2 font-light">Contenido</th>
            </tr>
          </thead>
          <tbody>
            {mockFacturas.map((factura, idx) => (
              <tr key={idx} className="border-t border-gray-200 hover:bg-gray-100/30">
                <td className="p-2 border-b border-gray-200">{factura.numero}</td>
                <td className="p-2 border-b border-gray-200">{factura.fecha}</td>
                <td className="p-2 border-b border-gray-200">{factura.estado}</td>
                <td className="p-2 border-b border-gray-200">{factura.contenido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Datos de facturación */}
      <div>
        <h2 className="text-xl font-bold mb-4">Datos de facturación</h2>
        <table className="min-w-full">
          <thead className="bg-blue-950/80 text-white">
            <tr>
              <th className="text-left p-2 font-light">Nombre Fiscal</th>
              <th className="text-left p-2 font-light">VAT</th>
              <th className="text-left p-2 font-light">Dirección Fiscal</th>
              <th className="text-left p-2 font-light">País</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 hover:bg-gray-100/30">
              <td className="p-2 border-b border-gray-200">{mockDatosFacturacion.nombreFiscal}</td>
              <td className="p-2 border-b border-gray-200">{mockDatosFacturacion.vat}</td>
              <td className="p-2 border-b border-gray-200">{mockDatosFacturacion.direccionFiscal}</td>
              <td className="p-2 border-b border-gray-200">{mockDatosFacturacion.pais}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContenidoAdministrativo;
