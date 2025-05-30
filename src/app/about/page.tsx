'use client'

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Input, Card, Image } from "@heroui/react";
import { FaHome, FaInfoCircle, FaMedal, FaList, FaVoteYea, FaNewspaper, FaSearch, FaGlobe, FaImage, FaExpand, FaFileAlt, FaHandshake, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { ImageModal } from './components/ImageModal';

export default function App() {
  // Массив изображений для галереи
  const galleryImages = [
    { id: 1, src: "/images/gallery/photo1.jpg", alt: "Встреча волонтеров" },
    { id: 2, src: "/images/gallery/photo2.jpg", alt: "Благотворительная акция" },
    { id: 3, src: "/images/gallery/photo3.jpg", alt: "Волонтерский лагерь" },
    { id: 4, src: "/images/gallery/photo4.jpg", alt: "Образовательный семинар" },
    { id: 5, src: "/images/gallery/photo5.jpg", alt: "Международная конференция" },
    { id: 6, src: "/images/gallery/photo6.jpg", alt: "Награждение волонтеров" },
    { id: 7, src: "/images/gallery/photo7.jpg", alt: "Экологическая акция" },
    { id: 8, src: "/images/gallery/photo8.jpg", alt: "Детский праздник" },
    { id: 9, src: "/images/gallery/photo9.jpg", alt: "Спортивное мероприятие" },
    { id: 10, src: "/images/gallery/photo10.jpg", alt: "Культурный фестиваль" },
    { id: 11, src: "/images/gallery/photo11.jpg", alt: "Волонтерский десант" },
    { id: 12, src: "/images/gallery/photo12.jpg", alt: "Образовательный форум" },
    { id: 13, src: "/images/gallery/photo13.jpg", alt: "Благотворительный концерт" },
    { id: 14, src: "/images/gallery/photo14.jpg", alt: "Экологический субботник" },
    { id: 15, src: "/images/gallery/photo15.jpg", alt: "Волонтерский сбор" },
    { id: 16, src: "/images/gallery/photo16.jpg", alt: "Международный форум" },
    { id: 17, src: "/images/gallery/photo17.jpg", alt: "Награждение партнеров" },
    { id: 18, src: "/images/gallery/photo18.jpg", alt: "Годовой отчет" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = galleryImages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; id: number } | null>(null);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Получаем изображения для текущей страницы
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return galleryImages.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      if (currentIndex < galleryImages.length - 1) {
        setSelectedImage(galleryImages[currentIndex + 1]);
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
      if (currentIndex > 0) {
        setSelectedImage(galleryImages[currentIndex - 1]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <!-- Hero блок --> */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-sky-400 to-purple-900 text-white animate-gradient shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 opacity-20 bg-cover bg-black bg-center"></div>
        <div className="absolute right-[-50px] top-0 bottom-0 w-[30%] min-w-[400px] hidden md:block flex items-center">
            <img 
                src="/images/hero/nevsky.png"  
                alt="Сергей Немцов" 
                className="w-full h-auto max-h-full object-contain opacity-80" 
            />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-shadow-lg">В добрый путь друзья!
Желаю Вам крепкого здоровья
и Божией Благодати!</h1>
                <p className="text-xl mb-8 animate-fade-in animation-delay-200 text-shadow">
               
                </p>
                <p className="italic mb-1 animate-fade-in animation-delay-400 text-shadow">— Президент Благотворительного фонда
                РВД Спутник Мира имени К. Э. Циолковского</p>
                <p className="font-bold animate-fade-in animation-delay-400 text-shadow">Невский Сергей Владимирович</p>
    
            </div>
        </div>
    </section>

      {/* Модальное окно */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          hasNext={selectedImage.id < galleryImages.length}
          hasPrev={selectedImage.id > 1}
        />
      )}

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photo Gallery Section */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaImage className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Фотогалерея</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {getCurrentPageItems().map((image) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedImage(image)}
                        className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <FaExpand className="text-white text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Пагинация */}
            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <FaChevronLeft />
                Предыдущая
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                Следующая
                <FaChevronRight />
              </button>
            </div>
          </Card>

          {/* Text Content Section */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <FaInfoCircle className="text-indigo-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">О фонде</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Благотворительный фонд РВД "Спутник Мира" имени К.Э. Циолковского - это организация, 
                которая объединяет людей, стремящихся сделать мир лучше через волонтерскую деятельность 
                и благотворительность.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша миссия - развитие волонтерского движения, поддержка социальных инициатив и 
                создание условий для реализации потенциала каждого человека.
              </p>
            </div>
          </Card>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Official Appeals */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-green-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Официальные обращения</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h3 className="font-semibold text-gray-800 mb-2">Обращение к волонтерам</h3>
                <p className="text-gray-600">Присоединяйтесь к нашему движению и станьте частью большой семьи волонтеров.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">Читать далее →</a>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h3 className="font-semibold text-gray-800 mb-2">Обращение к партнерам</h3>
                <p className="text-gray-600">Станьте партнером фонда и поддержите наши инициативы.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">Читать далее →</a>
              </div>
            </div>
          </Card>

          {/* Fund Documents */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaHandshake className="text-purple-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Документы Фонда</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h3 className="font-semibold text-gray-800 mb-2">Устав фонда</h3>
                <p className="text-gray-600">Основные документы, регламентирующие деятельность фонда.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">Скачать PDF →</a>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <h3 className="font-semibold text-gray-800 mb-2">Отчеты о деятельности</h3>
                <p className="text-gray-600">Ежегодные отчеты о работе фонда и достигнутых результатах.</p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block">Скачать PDF →</a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}