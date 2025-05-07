'use client';
import React, { FC, useState } from 'react';
import PopUpCrear from './PopUpCrear';
import PopUpEditar from './PopUpEditar';
import AdminNav from '../admincomponents/AdminNav';

interface Usuario {
  nombre: string;
  numero: string;
  contraseña: string;
  estado: string;
}

const Usuarios: FC = () => {


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
      <AdminNav/>
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
