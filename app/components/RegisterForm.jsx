"use client";

import Link from 'next/link';
import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgError, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError('Las contraseñas no coinciden.');
    }

    try {
      const res = await fetch("http://app-7627139a-0e98-484c-b5e6-93e7f2612bf3.cleverapps.io/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
      });

      if (!res.ok) {
        const err = await res.json();
        return setError(err.message);
      }

      window.location.href = '/';
    } catch (error) {
      setError('Ocurrió un error al registrar. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <div className="mt-20 w-full max-w-md p-4 bg-black bg-opacity-30 rounded-lg shadow-md mx-auto">
      <h2 className="text-2xl text-gray-500 font-semibold mb-4">Registro</h2>
      {msgError && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-red-600 font-semibold">{msgError}</p>
            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Cerrar</button>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-500 font-semibold mb-2">Usuario</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" className="border text-black border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-500 font-semibold mb-2">Correo electrónico</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" className="border text-black border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-500 font-semibold mb-2">Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" className="border text-black border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-500 font-semibold mb-2">Confirmar contraseña</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" name="confirmPassword" className="border text-black border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0 md:space-x-4">
          <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-blue-600">Registrarse</button>
          <Link href={'/'}>
            <button type="button" className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Salir</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
