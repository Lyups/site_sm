'use client'

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link, Input, Card, Image } from "@heroui/react";
import { FaHome, FaInfoCircle, FaMedal, FaList, FaVoteYea, FaNewspaper, FaSearch, FaGlobe, FaImage, FaExpand, FaFileAlt, FaHandshake, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { ImageModal } from './components/ImageModal';

export default function App() {
  // Массив изображений для галереи
  const galleryImages = [
    { id: 1, src: "/images/gallery/photo1.png", alt: "Волонтёры медицины" },
    { id: 2, src: "/images/gallery/photo2.png", alt: "Волонтеры экологии" },
    { id: 3, src: "/images/gallery/photo3.png", alt: "Волонтёры соцзащиты" },
    { id: 4, src: "/images/gallery/photo4.png", alt: "Гуманитарная помощь" },
    { id: 5, src: "/images/gallery/photo5.png", alt: "Обучениающие мероприятия" },
    { id: 6, src: "/images/gallery/photo6.png", alt: "Волонтёры - патриоты" },
    //{ id: 7, src: "/images/gallery/photo7.jpg", alt: "Экологическая акция" },
    //{ id: 8, src: "/images/gallery/photo8.jpg", alt: "Детский праздник" },
    //{ id: 9, src: "/images/gallery/photo9.jpg", alt: "Спортивное мероприятие" },
    //{ id: 10, src: "/images/gallery/photo10.jpg", alt: "Культурный фестиваль" },
    //{ id: 11, src: "/images/gallery/photo11.jpg", alt: "Волонтерский десант" },
    //{ id: 12, src: "/images/gallery/photo12.jpg", alt: "Образовательный форум" },
    //{ id: 13, src: "/images/gallery/photo13.jpg", alt: "Благотворительный концерт" },
    //{ id: 14, src: "/images/gallery/photo14.jpg", alt: "Экологический субботник" },
    //{ id: 15, src: "/images/gallery/photo15.jpg", alt: "Волонтерский сбор" },
    //{ id: 16, src: "/images/gallery/photo16.jpg", alt: "Международный форум" },
   //{ id: 17, src: "/images/gallery/photo17.jpg", alt: "Награждение партнеров" },
    //{ id: 18, src: "/images/gallery/photo18.jpg", alt: "Годовой отчет" },
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
      <section className="relative py-20 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 text-white animate-gradient shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
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
                <p className="italic mb-1 animate-fade-in animation-delay-400 text-shadow"> Президент Благотворительного фонда
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

                    <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <FaInfoCircle className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">О фонде</h2>
                <p className="text-gray-500 mt-1">Информация о деятельности и миссии фонда</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMedal className="text-indigo-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">Благотворительный фонд РВД Спутник Мира имени К. Э. Циолковского</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Поддерживает волонтёров-добровольцев со светлыми помыслами и благородным сердцем. Для Вас, наша команда разработала парадно-церемониальную, зимнюю и летнюю форму, с реестром специальных званий.</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaList className="text-indigo-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">Специальные звания и премии</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Каждый волонтёр имеет право на специальное звание, в зависимости от количества лет участия в волонтёрской организации. Ваше специальное звание определяет и ежемесячную спецпремию, доплату к пенсии.</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaNewspaper className="text-indigo-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">Как присоединиться</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Условия просты: Вы регистрируетесь на платформе Спутник Мира и один раз в неделю описываете благородный поступок в три строчки с фотоотчётом. Для пошива парадной формы и определения спецзвания необходимо подать заявку через Вашу организацию или лично на сайте спутникмира.рф</p>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-indigo-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">Наша миссия</h3>
                    <p className="text-gray-600 text-sm leading-relaxed italic">Развитие волонтерского движения, поддержка социальных инициатив и создание условий для реализации потенциала каждого человека.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>


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
                className={`flex items-center gap-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <FaChevronLeft />
                <span className="hidden sm:inline">Предыдущая</span>
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-300 ${
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
                className={`flex items-center gap-2 px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                <span className="hidden sm:inline">Следующая</span>
                <FaChevronRight />
              </button>
            </div>
          </Card>

          {/* Text Content Section */}

        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Official Appeals */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaFileAlt className="text-green-600 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Официальные обращения</h2>
                <p className="text-gray-500 mt-1">Важные сообщения и обращения к волонтерам и партнерам</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaVoteYea className="text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">Обращение к волонтерам</h3>
                    <p className="text-gray-600 text-sm mb-2">Присоединяйтесь к нашему движению и станьте частью большой семьи волонтеров</p>
                    <a href="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm">
                      Читать далее
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-green-200 hover:bg-green-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaHandshake className="text-green-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">Обращение к партнерам</h3>
                    <p className="text-gray-600 text-sm mb-2">Станьте партнером фонда и поддержите наши инициативы в развитии волонтерского движения</p>
                    <a href="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm">
                      Читать далее
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Fund Documents */}
          <Card className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaHandshake className="text-purple-600 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Документы Фонда</h2>
                <p className="text-gray-500 mt-1">Официальные документы и регламентирующие материалы</p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="text-purple-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">Устав фонда</h3>
                    <p className="text-gray-600 text-sm mb-2">Основные документы, регламентирующие деятельность фонда</p>
                    <a href="/files/ustav.pdf" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Скачать PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="text-purple-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">Свидетельство о регистрации</h3>
                    <p className="text-gray-600 text-sm mb-2">Свидетельство о регистрации некоммерческой организации</p>
                    <a href="/files/reg.pdf" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Скачать PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="text-purple-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">Договор оферты</h3>
                    <p className="text-gray-600 text-sm mb-2">Публичная оферта об осуществлении безвозмездной благотворительной деятельности</p>
                    <a href="/files/oferta.pdf" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Скачать PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="text-purple-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">ОГРН</h3>
                    <p className="text-gray-600 text-sm mb-2">Свидетельство о постановке на учёт в налоговом органе</p>
                    <a href="/files/ogrn.pdf" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Скачать PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-4 bg-white border border-gray-100 rounded-xl hover:border-purple-200 hover:bg-purple-50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFileAlt className="text-purple-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">Лист ЕГРЮЛ</h3>
                    <p className="text-gray-600 text-sm mb-2">Лист записи Единого государственного реестра юридических лиц</p>
                    <a href="/files/list.pdf" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Скачать PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}