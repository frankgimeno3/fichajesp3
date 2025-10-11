 


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
    resumen_actividad_cuenta: string;
  };
  array_direcciones_cuenta: InterfazDireccion[];
  array_contactos_cuenta: { id_contacto: string }[];
  array_comentarios_cuenta: string[];
}
