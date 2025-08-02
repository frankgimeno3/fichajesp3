"use client";
import React, { FC, useState } from 'react';


import { useRouter } from 'next/navigation';
import EditarDatosGenerales from './editarProp/editarDatosGenerales';
import EditarDatosAnunciante from './editarProp/editarDatosAnunciante';
import EditarDatosFirmante from './editarProp/editarDatosFirmante';
import EditarDatosGestion from './editarProp/editarDatosGestion';
import EditarContenidoPropuesta from './editarProp/editarContenidoPropuesta';
import EditarOtrosDatosEnFactura from './editarProp/editarOtrosDatosEnFactura';
import EditarDatosCobro from './editarProp/editarDatosCobro';

const EditarPropuesta: FC = () => {
  const router = useRouter()
  const [isDatosContactoShown, setIsDatosContactoShown] = useState(false)
  const [codigoPropuesta] = useState('C25.000.204')
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
      <div className='flex flex-row justify-between'>
        <h2 className="text-lg font-semibold mb-4"><span className='pr-3 font-black text-blue-950'>Editando</span>propuesta con Código {codigoPropuesta}</h2>

        <div className='flex flex-row gap-5'>
          <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')} >
            Guardar cambios
          </button>
          <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')} >
            Cancelar
          </button>
          <button className="bg-blue-950 text-gray-100 p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900"
            onClick={() => router.push('/dashboard/comercial/propuestas/propuesta/editar')} >
            Guardar como nueva
          </button>
        </div>
      </div>

      <p className="font-bold text-gray-500">Datos generales:</p>
      <EditarDatosGenerales codigoPropuesta={codigoPropuesta} />

      <div className='flex flex-col bg-gray-100 rounded-lg shadow-xl mt-12 '>
        <div className='flex flex-row items-center justify-between bg-blue-950 text-white p-2 px-4 rounded-lg shadow-xl cursor-pointer hover:bg-blue-900'
          onClick={handleTogleDatosContactoShown}>
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

        {isDatosContactoShown == true && <div className='flex flex-row px-12 bg-gray-100 py-5 gap-2 '>
          <div className='flex flex-col w-full'>
            <EditarDatosAnunciante empresaAnunciante={empresaAnunciante} />
          </div>
          <div className='flex flex-col w-full'>
            <EditarDatosFirmante empresaFirmante={empresaFirmante} />
          </div>
          <div className='flex flex-col w-full'>
            <EditarDatosGestion empresaGestion={empresaGestion} />
          </div>
        </div>}
      </div>
      <p className="font-bold text-gray-500 mt-6">Contenido en campaña:</p>
      <EditarContenidoPropuesta />

      <p className="font-bold text-gray-500 mt-6">Datos para facturación:</p>
      <EditarOtrosDatosEnFactura />
      <p className="font-bold text-gray-500 mt-6">Forma de cobro</p>
      <EditarDatosCobro />

      <p className="font-bold text-gray-500 mt-6">Comentarios adicionales:</p>
      <textarea className='bg-white rounded text-gray-500 p-5'>
        Contenido aquí, Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta et nemo delectus atque at unde, cupiditate fugit quisquam. A ducimus qui cupiditate doloribus nulla maxime obcaecati illum repellendus voluptate?
      </textarea>

    </div>
  );
};

export default EditarPropuesta;
