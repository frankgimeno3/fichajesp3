'use client';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import PopUpCrear from './PopUpCrear';
import PopUpEditar from './PopUpEditar';

interface Usuario {
  nombre: string;
  numero: string;
  contraseña: string;
  estado: string;
}

const Usuarios: FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    console.log('logout');
  };
  const handleDashboard = () => {
    router.push('/admin/dashboard');
  };
  const handleInformes = () => {
    router.push('/admin/dashboard/informes');
  };
  const handleUsuarios = () => {
    router.push('/admin/dashboard/usuarios');
  };

  const handleCrearUsuario = () => {
    setShowPopUpCrear(true);
  };

  const handleEditUsuario = (usuario: Usuario) => {
    setUserToEdit({
      name: usuario.nombre,
      phoneNumber: usuario.numero,
      password: usuario.contraseña,
      status: usuario.estado,
    });
    setShowPopUpEditar(true);
  };

  // Datos simulados
  const [usuarios, setUsuarios] = useState<Usuario[]>([
    { nombre: 'Juan Pérez', numero: '001', contraseña: '******', estado: 'Activo' },
    { nombre: 'Ana López', numero: '002', contraseña: '******', estado: 'Bloqueado' },
  ]);

  // Estado para mostrar los popups
  const [showPopUpCrear, setShowPopUpCrear] = useState<boolean>(false);
  const [showPopUpEditar, setShowPopUpEditar] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<{ name: string; phoneNumber: string; password: string; status: string } | null>(null);

  const handleClosePopUpCrear = () => {
    setShowPopUpCrear(false);
  };

  const handleClosePopUpEditar = () => {
    setShowPopUpEditar(false);
  };

  const handleCreateUser = (newUser: { name: string; phoneNumber: string; password: string }) => {
    const usuarioNuevo: Usuario = {
      nombre: newUser.name,
      numero: newUser.phoneNumber,
      contraseña: newUser.password,
      estado: 'Activo',  
    };
  
    setUsuarios([...usuarios, usuarioNuevo]);
    setShowPopUpCrear(false);
  };
  

  const handleEditUser = (updatedUser: { name: string; phoneNumber: string; password: string; status: string }) => {
    const updatedUsuarios = usuarios.map((user) =>
      user.numero === updatedUser.phoneNumber ? { ...user, ...updatedUser } : user
    );
    setUsuarios(updatedUsuarios);
    setShowPopUpEditar(false);
  };

  return (
    <div>
      <nav className="flex flex-row justify-between p-5 px-12 items-center border-b border-gray-600" style={{ backgroundColor: 'rgb(255, 255, 255, 0.04)' }}>
        <p className="text-2xl text-gray-300" onClick={handleDashboard}>Dashboard ADMIN</p>
        <div className="flex flex-row">
          <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleInformes}>Sacar informes</button>
          <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleUsuarios}>Gestionar usuarios</button>
          <button className="p-1 border border-gray-100 m-1 rounded px-4 hover:bg-gray-100 hover:text-black hover:opacity-90" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </nav>

      <div className="p-6 px-12 bg-gray-100 min-h-screen ">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl text-gray-600">Usuarios</p>
          <button onClick={handleCrearUsuario} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Crear nuevo usuario</button>
        </div>
        <table className="min-w-full bg-white text-black rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Nombre</th>
              <th className="text-left px-4 py-2">Número usuario</th>
              <th className="text-left px-4 py-2">Contraseña</th>
              <th className="text-left px-4 py-2">Estado</th>
              <th className="text-left px-4 py-2">Editar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2">{usuario.nombre}</td>
                <td className="px-4 py-2">{usuario.numero}</td>
                <td className="px-4 py-2">{usuario.contraseña}</td>
                <td className="px-4 py-2">{usuario.estado}</td>
                <td className="px-4 py-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => handleEditUsuario(usuario)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mostrar PopUpCrear si el estado es true */}
      {showPopUpCrear && (
        <PopUpCrear
          onClose={handleClosePopUpCrear}
          onCreate={handleCreateUser}
        />
      )}

      {/* Mostrar PopUpEditar si el estado es true */}
      {showPopUpEditar && userToEdit && (
        <PopUpEditar
          user={userToEdit}
          onClose={handleClosePopUpEditar}
          onEdit={handleEditUser}
        />
      )}
    </div>
  );
};

export default Usuarios;
