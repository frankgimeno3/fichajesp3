'use client'
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import contratosContents from "@/app/contents/contratosContents.json";
import cuentasContents from "@/app/contents/cuentasContents.json";
import contactosContents from "@/app/contents/contactsContents.json";

type ContenidoCampana = {
  medio?: string;
  publicacion?: string;
  producto?: string;
  precio_producto?: number;
  deadline_publicacion?: string;
  fecha_publicacion_publicacion?: string;
  estado_material_contrato?: string;
  urlcontenido?: string;
};

type Contrato = {
  detalles_contrato?: {
    id_contrato?: string;
    fecha_firma_contrato?: string;
  };
  cuenta_contrato?: {
    id_cuenta_contrato?: string;
    id_contacto?: string;   
    cargoContacto?: string;
  };
  datosGenerales?: {
    fecha_firma_contrato?: string;
    fecha_fin_contrato?: string;
    codigo_campana_administrativa?: string;
  };
  contenido_campana?: ContenidoCampana[];
};

type Cuenta = {
  id_cuenta: string;
  nombre_empresa: string;
};

type Contacto = {
  id_contacto: string;
  nombre_completo_contacto: string;
};

const parseDMY = (s?: string): Date | null => {
  if (!s) return null;
  const [d, m, y] = s.split('/').map(p => p.trim());
  if (!d || !m || !y) return null;
  const date = new Date(Number(y), Number(m) - 1, Number(d));
  return isNaN(date.getTime()) ? null : date;
};

const formatDateToISO = (s?: string): string => {
  const d = parseDMY(s);
  if (!d) return '-';
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getEarliestDeadlineISO = (contenidos?: ContenidoCampana[]): string => {
  if (!contenidos || contenidos.length === 0) return '-';
  const dates = contenidos
    .map(c => parseDMY(c.deadline_publicacion))
    .filter((x): x is Date => x !== null);
  if (dates.length === 0) return '-';
  const earliest = dates.reduce((a, b) => (a.getTime() <= b.getTime() ? a : b));
  const yyyy = earliest.getFullYear();
  const mm = String(earliest.getMonth() + 1).padStart(2, '0');
  const dd = String(earliest.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

interface ContenidoPorClienteProps {}

const ContenidoPorCliente: FC<ContenidoPorClienteProps> = () => {
  const router = useRouter();

  const contratos = contratosContents as Contrato[];
  const cuentas = cuentasContents as Cuenta[];
  const contactos = contactosContents as Contacto[];

 
  
  return (
    <div className="flex flex-col gap-3 mt-12 rounded-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left p-2 font-light pl-6">Empresa</th>
              <th className="text-left p-2 font-light">Fecha de firma</th>
              <th className="text-left p-2 font-light">Fecha renovación</th>
              <th className="text-left p-2 font-light">Fecha próximo material</th>
              <th className="text-left p-2 font-light">Contacto principal</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((c, index) => {
              const idContrato =
                c.detalles_contrato?.id_contrato ??
                `${c.cuenta_contrato?.id_contacto ?? 'no_id'}_${index}`;

              const idCuenta = c.cuenta_contrato?.id_cuenta_contrato;
              const cuentaInfo = cuentas.find(cta => cta.id_cuenta === idCuenta);
              const empresa = cuentaInfo?.nombre_empresa ?? idCuenta ?? '—';

              const fechaFirmaRaw =
                c.detalles_contrato?.fecha_firma_contrato ??
                c.datosGenerales?.fecha_firma_contrato;
              const fechaFirma = formatDateToISO(fechaFirmaRaw);
              const fechaRenovacion = formatDateToISO(c.datosGenerales?.fecha_fin_contrato);
              const fechaProxMaterial = getEarliestDeadlineISO(c.contenido_campana);

              const contactoPrincipalID = c.cuenta_contrato?.id_contacto;
              const contactoInfo = contactos.find(
                ct => ct.id_contacto === contactoPrincipalID
              );
              const contactoPrincipal =
                contactoInfo?.nombre_completo_contacto ??
                contactoPrincipalID ??
                '—';

              return (
                <tr
                  key={idContrato}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() =>
                    router.push(`/dashboard/comercial/contratos/${idContrato}`)
                  }
                >
                  <td className="p-2 border-b border-gray-200 pl-6">{empresa}</td>
                  <td className="p-2 border-b border-gray-200">{fechaFirma}</td>
                  <td className="p-2 border-b border-gray-200">{fechaRenovacion}</td>
                  <td className="p-2 border-b border-gray-200">{fechaProxMaterial}</td>
                  <td className="p-2 border-b border-gray-200">{contactoPrincipal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContenidoPorCliente;
