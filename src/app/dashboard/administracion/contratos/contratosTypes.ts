export interface Empresa {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
  nombreContacto: string;
  cargoContacto: string;
}

// ✅ Esta versión de DatosGenerales es la que coincide con tu JSON real
export interface DatosGenerales {
  fecha_firma_contrato: string;
  fecha_fin_contrato: string;
  codigo_campana_administrativa: string;
}

export interface Factura {
  id_factura: string;
}

export interface Recibo {
  num_recibo: string;
  numRemesa: string;
}

export interface DetallesContrato {
  id_contrato: string;
  id_agente_contrato: string;
  fecha_cobro_prevista_contrato: string;
  fecha_cobro_factura_contrato: string;
  estado_contrato: string;
  comisiones_contrato_pagadas: string;
  array_facturas: Factura[];
  fecha_factura: string;
  forma_cobro_factura: string;
  array_recibos: Recibo[];
  fecha_firma_contrato: string;
  id_campana_asociada: string;
}

export interface CuentaContrato {
  id_cuenta_contrato: string;
  id_contacto: string;
  cargoContacto: string;
}

export interface Contenido {
  id_contenido: string;
}

export interface ContenidoCampana {
  medio: string;
  publicacion: string;
  producto: string;
  precio_producto: number;
  deadline_publicacion: string;
  fecha_publicacion_publicacion: string;
  estado_material_contrato: string;
  urlcontenido: string;
}

// ✅ Estructura completa del contrato (coincide con tu JSON uniforme)
export interface Contrato {
  id_contacto: string;
  detalles_contrato: DetallesContrato;
  cuenta_contrato: CuentaContrato;
  datosGenerales: DatosGenerales;
  array_contenidos: Contenido[];
  contenido_campana: ContenidoCampana[];
  descuento_final_contrato: number;
  importe_total_BI_contrato: number;
  iva_aplicable: boolean;
  importe_factura_con_iva: number;
}

// Opcional: para resúmenes o tablas
export interface ContratoResumen {
  codigo: string;
  cliente: string;
  agente: string;
  estado: string;
  fechaFirma: string;
  importe: string;
  campania: string;
}

// Solo si lo usas en tablas u otras vistas
export interface FilaContenido {
  medio: string;
  publicacion: string;
  producto: string;
  precio: string;
  deadline: string;
  fechaPublicacion: string;
  estadoMaterial: string;
  urlcontenido: string;
}
