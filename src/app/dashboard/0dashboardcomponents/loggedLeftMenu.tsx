import React, { FC, useState } from 'react';
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [isFichajesOpen, setIsFichajesOpen] = useState(false);
  const [isComercialOpen, setIsComercialOpen] = useState(false);
   const [isClientesOpen, setIsClientesOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isProduccionOpen, setIsProduccionOpen] = useState(false);
  const [isAdministracionOpen, setIsAdministracionOpen] = useState(false);
  

  return (
    <div className="flex flex-col min-h-screen w-80 bg-white border-r border-gray-200 p-4 
    pl-6 shadow-sm text-gray-800">

      {/* FICHAJES */}
      <div className="mb-4">
        <div
          onClick={() => setIsFichajesOpen(!isFichajesOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Fichajes</span>
          <ArrowIcon isOpen={isFichajesOpen} />
        </div>
        {isFichajesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/fichajes')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Fichar eventos
            </button>
            <button
              onClick={() => router.push('/dashboard/fichajes/historial')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Historial de fichajes
            </button>
          </div>
        )}
      </div>

      {/* COMERCIAL */}
      <div className="mb-4">
        <div
          onClick={() => setIsComercialOpen(!isComercialOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Comercial</span>
          <ArrowIcon isOpen={isComercialOpen} />
        </div>
        {isComercialOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/comercial')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Seguimientos
            </button>
           <button
              onClick={() => router.push('/dashboard/comercial/propuestas')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Propuestas
            </button>
             <button
              onClick={() => router.push('/dashboard/produccion/tarifas')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Tarifas
            </button>
          </div>
        )}
      </div>

       
      
      {/* PRODUCCION */}
      <div className="mb-4">
        <div
          onClick={() => setIsProduccionOpen(!isProduccionOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Producción</span>
          <ArrowIcon isOpen={isProduccionOpen} />
        </div>
        {isProduccionOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/produccion/materiales')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Materiales
            </button>
            <button
              onClick={() => router.push('/dashboard/produccion/preferentes')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Páginas preferentes
            </button>
           
          </div>
        )}
      </div>

      {/* CUENTAS */}
      <div className="mb-4">
        <div
          onClick={() => setIsClientesOpen(!isClientesOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Clientes</span>
          <ArrowIcon isOpen={isClientesOpen} />
        </div>
        {isClientesOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/cuentas')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Cuentas
            </button>
            
             <button
              onClick={() => router.push('/dashboard/cuentas/contactos')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Contactos
            </button>
            
          </div>
        )}
      </div>

 
      {/* ADMINISTRACION */}
      <div className="mb-4">
        <div
          onClick={() => setIsAdministracionOpen(!isAdministracionOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Administración</span>
          <ArrowIcon isOpen={isAdministracionOpen} />
        </div>
        {isAdministracionOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/administracion/campanas')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Campañas
            </button>
            <button
              onClick={() => router.push('/dashboard/administracion/controladministrativo')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Control administrativo
            </button>
            <button
              onClick={() => router.push('/dashboard/administracion/pendiente')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Pendiente Cobro
            </button>
             <button
              onClick={() => router.push('/dashboard/administracion/informescomerciales')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-950 w-full
              hover:text-white transition cursor-pointer"
            >
              Informes comerciales
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoggedLeftMenu;
