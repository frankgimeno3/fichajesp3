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
  const [isSeguimientosOpen, setIsSeguimientosOpen] = useState(false);
  const [isPropuestasOpen, setIsPropuestasOpen] = useState(false);
  const [isClientesOpen, setIsClientesOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isProduccionOpen, setIsProduccionOpen] = useState(false);
  const [isAdministracionOpen, setIsAdministracionOpen] = useState(false);
  

  return (
    <div className="flex flex-col min-h-screen w-64 bg-white border-r border-gray-200 p-4 
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
              onClick={() => router.push('/dashboard/registro')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Fichar eventos
            </button>
            <button
              onClick={() => router.push('/dashboard/registro/historial')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Historial
            </button>
          </div>
        )}
      </div>

      {/* SEGUIMIENTOS */}
      <div className="mb-4">
        <div
          onClick={() => setIsSeguimientosOpen(!isSeguimientosOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Seguimientos</span>
          <ArrowIcon isOpen={isSeguimientosOpen} />
        </div>
        {isSeguimientosOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/seguimientos')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Ver seguimientos
            </button>
          </div>
        )}
      </div>

      {/* PROPUESTAS */}
      <div className="mb-4">
        <div
          onClick={() => setIsPropuestasOpen(!isPropuestasOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Propuestas</span>
          <ArrowIcon isOpen={isPropuestasOpen} />
        </div>
        {isPropuestasOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/propuestas')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Ver propuestas
            </button>
            <button
              onClick={() => router.push('/dashboard/propuestas/crear')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Crear propuestas
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
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Seguimiento de materiales
            </button>
            <button
              onClick={() => router.push('/dashboard/produccion/preferentes')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Páginas preferentes
            </button>
            <button
              onClick={() => router.push('/dashboard/produccion/planillos')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Planillos de revista
            </button>
          </div>
        )}
      </div>

      {/* CLIENTES */}
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
              onClick={() => router.push('/dashboard/clientes')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Fichas de clientes
            </button>
            <button
              onClick={() => router.push('/dashboard/clientes/crear')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Crear cliente
            </button>
             <button
              onClick={() => router.push('/dashboard/clientes/contactos')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Contactos
            </button>
             <button
              onClick={() => router.push('/dashboard/clientes/contactos/crear')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Crear contacto
            </button>
          </div>
        )}
      </div>

      {/* SERVICIOS */}
      <div className="mb-4">
        <div
          onClick={() => setIsServiciosOpen(!isServiciosOpen)}
          className="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 transition"
        >
          <span className="font-medium">Servicios</span>
          <ArrowIcon isOpen={isServiciosOpen} />
        </div>
        {isServiciosOpen && (
          <div className="ml-4 mt-2 space-y-2">
            <button
              onClick={() => router.push('/dashboard/servicios')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => router.push('/dashboard/servicios/crear')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Crear Servicio
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
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Campañas
            </button>
            <button
              onClick={() => router.push('/dashboard/administracion/controladministrativo')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
              hover:text-white transition cursor-pointer"
            >
              Control administrativo
            </button>
             <button
              onClick={() => router.push('/dashboard/administracion/informescomerciales')}
              className="block text-sm px-3 py-1.5 text-left rounded hover:bg-blue-500 
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
