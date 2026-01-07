import React, { FC, useState } from 'react';
import Link from 'next/link';

const ArrowIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const LoggedLeftMenu: FC = () => {

  const [isFichajesOpen, setIsFichajesOpen] = useState(false);
  const [isComercialOpen, setIsComercialOpen] = useState(false);
  const [isClientesOpen, setIsClientesOpen] = useState(false);
  const [isOperacionesOpen, setIsOperacionesOpen] = useState(false);
  const [isProduccionOpen, setIsProduccionOpen] = useState(false);
  const [isAdministracionOpen, setIsAdministracionOpen] = useState(false);


  return (
    <div className="flex flex-col min-h-screen w-80 bg-white border-r border-gray-200 p-4 pl-6 shadow-sm text-gray-800  " style={{ "width": "170px", "fontSize": '10px' }}  >

      {/* FICHAJES */}
      <div className="mb-4">
        <div
          onClick={() => setIsFichajesOpen(!isFichajesOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Fichajes</span>
          <ArrowIcon isOpen={isFichajesOpen} />
        </div>
        {isFichajesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link
              href="/dashboard/fichajes/fichar"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Fichar eventos
            </Link>
            <Link
              href="/dashboard/fichajes/historial"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Historial de fichajes
            </Link>
          </div>
        )}
      </div>
{/* CLIENTES */}
      <div className="mb-4">
        <div
          onClick={() => setIsClientesOpen(!isClientesOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Clientes</span>
          <ArrowIcon isOpen={isClientesOpen} />
        </div>
        {isClientesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link
              href="/dashboard/clientes/cuentas"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Cuentas
            </Link>

            <Link
              href="/dashboard/clientes/contactos"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Contactos
            </Link>

          </div>
        )}
      </div>

      {/* COMERCIAL */}
      <div className="mb-4">
        <div
          onClick={() => setIsComercialOpen(!isComercialOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Comercial</span>
          <ArrowIcon isOpen={isComercialOpen} />
        </div>
        {isComercialOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link
              href="/dashboard/comercial/propuestas"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Propuestas
            </Link>
            <Link
              href="/dashboard/comercial/contratos"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Mis contratos
            </Link>
          </div>
        )}
      </div>

      {/* PRODUCCION */}
      <div className="mb-4">
        <div
          onClick={() => setIsProduccionOpen(!isProduccionOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Producción</span>
          <ArrowIcon isOpen={isProduccionOpen} />
        </div>
        {isProduccionOpen && (
          <div className="ml-4 mt-2 space-y-2">
             <Link
              href="/dashboard/produccion/servicios"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Servicios
            </Link>
            <Link
              href="/dashboard/produccion/publicaciones"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Contenidos
            </Link>
         

          </div>
        )}
      </div>

      

      {/* ADMINISTRACION */}
      <div className="mb-4">
        <div
          onClick={() => setIsAdministracionOpen(!isAdministracionOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Administración</span>
          <ArrowIcon isOpen={isAdministracionOpen} />
        </div>
        {isAdministracionOpen && (
          <div className="ml-4 mt-2 space-y-2">
           

             <Link
              href="/dashboard/administracion/contratos"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Contratos
            </Link>
 
           </div>

        )}
      </div>

      {/* OPERACIONES */}
      <div className="mb-4">
        <div
          onClick={() => setIsOperacionesOpen(!isOperacionesOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="">Operaciones</span>
          <ArrowIcon isOpen={isOperacionesOpen} />
        </div>
        {isOperacionesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <Link
              href="/dashboard/operaciones/fichajes"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Gestión de fichajes
            </Link>
            <Link
              href="/dashboard/operaciones/data"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Gestión de BBDD
            </Link>
            <Link
              href="/dashboard/operaciones/usuariosyroles"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Gestión de usuarios y roles
            </Link>
            <Link
              href="/dashboard/operaciones/eventos"
              className="block  px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Registro global de eventos
            </Link>
           
          </div>

        )}
      </div>
    </div>
  );
};

export default LoggedLeftMenu;
