export interface DatosGenerales {
  fechaFirma: string;
  fechaFinEstimada: string;
  agente: string;
  codigoContrato: string;
  codigoCampaniaAdministrativa: string;
}

export interface Empresa {
  nombreEmpresa: string;
  codigoCrm: string;
  codigoEdisoft: string;
  pais: string;
  nombreContacto: string;
  cargoContacto: string;
}

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

export interface Contrato {
  idContacto: string;
  detallesContrato: Record<string, string>;
  empresa: Empresa;
  datosGenerales: DatosGenerales;
  contenidoCampaña: FilaContenido[];
}

export interface ContratoResumen {
  codigo: string;
  cliente: string;
  agente: string;
  estado: string;
  fechaFirma: string;
  importe: string;
  campania: string;
}