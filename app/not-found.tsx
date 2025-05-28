'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Сайт на ремонте — sputnikmira.ru';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0">
        {/* Строительные элементы */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-4 border-blue-600 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border-4 border-purple-600 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 border-4 border-blue-600 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-7 h-7 border-4 border-purple-600 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Линии соединения */}
        <div className="absolute top-1/4 left-1/4 w-24 h-0.5 bg-blue-600/30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-0.5 bg-purple-600/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-0.5 bg-blue-600/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-0.5 bg-purple-600/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-md px-4">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
        <p className="text-xl md:text-2xl font-medium mb-6 text-gray-800">
          Сайт находится на доработке
        </p>
        <p className="text-gray-600 mb-8">
          Мы работаем над улучшением нашего сайта. Каждый модуль разрабатывается отдельно, и новые функции будут доступны в ближайшее время. Спасибо за понимание!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Вернуться на главную
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}