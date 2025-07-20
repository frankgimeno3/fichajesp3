import React, { FC } from 'react';
import { useRouter, usePathname } from "next/navigation";
import AuthenticationService from "@/app/service/AuthenticationService";

interface LoggedNavProps {
}

const LoggedNav: FC<LoggedNavProps> = ({ }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await AuthenticationService.logout();
    router.replace('/')
  }

  const handleRedirection = (path: string) => {
    router.push(path)
  }

  return (
    <nav className="flex flex-row justify-between p-5 px-8 items-center bg-blue-950 text-gray-100">
      <div className='flex flex-col text-left'>
        <p className="text-2xl font-bold cursor-pointer"
          onClick={() => { handleRedirection('/dashboard') }}
        >Portal de gestión PROPORCIÓN 3, S.A.</p>
        <p className="">
          {pathname === '/registro/historial'
            ? 'Página de historial de cambios en los fichajes'
            : 'Página de registro de fichajes'
          }
        </p>
      </div>
      <div className="flex flex-row gap-12 text-lg">
        <button
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={() => { handleRedirection('/dashboard/notificaciones') }}
        >
          Notificaciones
        </button>
        <button
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={() => handleLogout()}>
          Cerrar sesión
        </button>
      </div>
    </nav>);
};

export default LoggedNav;