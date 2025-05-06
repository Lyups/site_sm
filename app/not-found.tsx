'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Страница не найдена — sputnikmira.ru';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-black">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          404
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Ой, похоже, вы потерялись!
        </p>
        <p className="text-gray-600 mb-8">
          Извините, но мы не можем найти страницу, которую вы ищете. Попробуйте проверить URL или вернуться на главную.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-md transition duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}