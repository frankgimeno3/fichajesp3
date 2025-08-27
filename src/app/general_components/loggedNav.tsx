import React, { FC } from 'react';
import { useRouter, usePathname } from "next/navigation";
import AuthenticationService from "@/app/service/AuthenticationService";

interface LoggedNavProps {}

const LoggedNav: FC<LoggedNavProps> = () => {
  const router = useRouter();
  const pathname = usePathname();

  const unreadNotifications = ['1', '2', '3']; // Aquí simulas notificaciones no leídas

  const handleLogout = async () => {
    await AuthenticationService.logout();
    router.replace('/');
  };

  const handleRedirection = (path: string) => {
    router.push(path);
  };

  const routeDescriptions: Record<string, string> = {
    '/dashboard': 'Haga click en un módulo para continuar',
    '/dashboard/administracion': 'Módulo administrativo',
    '/dashboard/clientes': 'Módulo de gestión de clientes y contactos',
    '/dashboard/notificaciones': 'Notificaciones',
    '/dashboard/produccion': 'Módulo de producción',
    '/dashboard/propuestas': 'Módulo de propuestas',
    '/dashboard/registro': 'Módulo de fichaje',
    '/dashboard/seguimientos': 'Módulo de seguimientos',
    '/dashboard/servicios': 'Módulo de servicios',
  };

  const getDescription = (pathname: string, routes: Record<string, string>) => {
    const sortedRoutes = Object.keys(routes).sort((a, b) => b.length - a.length);

    for (const route of sortedRoutes) {
      if (pathname.startsWith(route)) {
        return routes[route];
      }
    }

    return 'Página de registro de fichajes';
  };

  const description = getDescription(pathname, routeDescriptions);

  return (
    <nav className="flex flex-row justify-between p-5 px-8 items-center bg-blue-950 text-gray-100 relative">
      <div className="flex flex-col text-left">
        <p
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleRedirection('/dashboard')}
        >
          Portal de gestión PROPORCIÓN 3, S.A.
        </p>
        <p>{description}</p>
      </div>
      <div className="flex flex-row gap-12 text-lg items-center">
        <div className="relative">
          <button
            className="text-gray-300 hover:text-white transition-colors duration-[2000ms] cursor-pointer"
            onClick={() => handleRedirection('/dashboard/notificaciones')}
          >
            Notificaciones
          </button>
          {unreadNotifications.length > 0 && (
            <div className="absolute -bottom-3 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 shadow-lg">
              {unreadNotifications.length}
            </div>
          )}
        </div>
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

export default LoggedNav;
