import React, { FC } from 'react';
import { useRouter, usePathname } from "next/navigation";
import AuthenticationService from "@/app/service/AuthenticationService";

interface RegistroNavProps {
}

const RegistroNav: FC<RegistroNavProps> = ({ }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await AuthenticationService.logout();
    router.replace('/')
  }

  const handleRedirection = (path:string)=>{
     router.push(path)
  }
  
  return (
    <nav className="flex flex-row justify-between p-5 px-12 items-center bg-blue-950 text-gray-100">
      <div className='flex flex-col text-left'>
        <p className="text-2xl font-bold">Sistema de fichaje PROPORCIÓN 3, S.A.</p>
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
          onClick={()=>{handleRedirection('/registro/historial')}}
        >
          Fichar eventos
        </button>
        <button 
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={()=>{handleRedirection('/registro')}}>
          Historial
        </button>
        <button 
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={() => handleLogout()}>
          Cerrar sesión
        </button>
      </div>
    </nav>);
};

export default RegistroNav;