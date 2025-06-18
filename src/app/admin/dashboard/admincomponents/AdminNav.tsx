import React, { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AuthenticationService from "@/app/service/AuthenticationService";

interface AdminNavProps {

}

const AdminNav: FC<AdminNavProps> = ({ }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        await AuthenticationService.logout();
        router.replace('/admin');
    };

    const handleInformes = () => {
      router.push('/admin/dashboard/informes');
    };

    const handleUsuarios = () => {
      router.push('/admin/dashboard/usuarios');
    };
    const handleDashboard = () => {
      router.push('/admin/dashboard');
    };

    const getSubtitle = () => {
      if (pathname === '/admin/dashboard/informes') {
        return 'Página de informes';
      } else if (pathname === '/admin/dashboard/usuarios') {
        return 'Página de gestión de usuarios';
      }
      return 'Página principal de administración';
    };

  return (
    <nav className="flex flex-row justify-between p-5 px-12 items-center bg-blue-950 text-gray-100">
      <div className='flex flex-col text-left cursor-pointer' onClick={()=>handleDashboard()}>
        <p className="text-2xl font-bold">Dashboard ADMIN</p>
        <p className="">{getSubtitle()}</p>
      </div>
      <div className="flex flex-row gap-12 text-lg">
        <button
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={handleInformes}
        >
          Sacar informes
        </button>
        <button
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={handleUsuarios}
        >
          Gestionar usuarios
        </button>
        <button
          className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;