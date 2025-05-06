'use client';

import { useState } from 'react';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    document.title = 'Авторизация — sputnikmira.ru';
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // эта логика сделана для будущего api'
      console.log('Логин:', { email, password });
      alert('Успешный вход!');
    } catch (err) {
      setError('Ошибка входа. Проверьте данные.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700 text-black bg-[url('/images/test-img.jpg')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">Вход</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Электронная почта
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md shadow-sm transition duration-300 focus:outline-none"          >
            Войти
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Нет аккаунта?{' '}
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
}