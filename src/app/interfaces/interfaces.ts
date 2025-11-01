 


export interface InterfazContacto {
  id_contacto: string;
  nombre_contacto: string;
  apellidos_contacto: string;
  nombre_completo_contacto:string;
    id_cuenta: string,
    nombre_empresa: string,
    telefono_contacto: string,
    email_contacto: string,
    cargo_contacto: string,
    idiomas: string,
    conocido_en: string,
    contactado_en_feria: string,
    suscripciones:string[],
    otros_datos_interes:string
  }

export interface InterfazDireccion {
  nombre_direccion: string;
  pais_direccion: string;
  region_direccion: string;
  ciudad_direccion: string;
  codigo_postal: string;
  direccion_completa: string;
  telefono_direccion: string;
  descripcion_direccion: string;
}

export interface InterfazCuenta {
  id_cuenta: string;
  nombre_empresa: string;
  pais_cuenta: string;
  id_agente: string;
  descripcion_cuenta: string;
  actividades_cuenta: string;
  presente_en_qq: boolean;
  fuente_novedades_cuenta: string;
  datos_comerciales: {
    ciudad_principal_cuenta: string;
    telefono_principal_cuenta: string;
    categoria_principal_cuenta: string;
    contacto_principal: string;
    resumen_actividad_cuenta: string;
  };
  array_direcciones_cuenta: InterfazDireccion[];
  array_contactos_cuenta: { id_contacto: string }[];
  array_comentarios_cuenta: string[];
}

export interface InterfazServicio {
  id_servicio: string;
  ano_servicio: string;
  soporte_servicio: string;
  precio_servicio: string;
  fecha_deadline_servicio: string;
  fecha_publicacion_servicio: string;
  es: {
    medio: string;
    edicion: string;
    publicacion: string;
    nombre: string;
  };
  en: {
    medio: string;
    edicion: string;
    publicacion: string;
    nombre: string;
  };
}

export interface InterfazPropuesta {
  detalles_propuesta: {
    id_propuesta: string;
    id_agente_propuesta: string;
    estado_propuesta: 'Pendiente' | 'Aceptada' | 'Rechazada';
    fecha_envio_propuesta: string;  
  };
  cuenta_propuesta: {
    id_cuenta_propuesta: string;
    id_contacto: string;
    cargoContacto: string;
  };
  contenido_propuesta: {
    medio: string;
    publicacion: string;
    producto: string;
    precio_producto: number;
    deadline_publicacion: string;  
    fecha_publicacion_publicacion: string; 
  }[];
  total_previo_propuesta:number;
  descuento_final_propuesta: number;
  importe_total_BI_propuesta: number;
  iva_aplicable: boolean;
  importe_propuesta_con_iva: number;
  comentarios_adicionales_propuesta:string;
  cobros:{
    numero_cobro:string;
    fecha_cobro:string;
    importe_cobro:string;
    forma_cobro:string;
  }[]
}
