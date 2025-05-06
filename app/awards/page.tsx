export const metadata = {
    title: 'Премии и конкурсы — sputnikmira.ru',
    description: 'Премии и конкурсы',
  };


export default function Awards() {
  return (
    <>
      <section>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Премии и конкурсы</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Здесь будет подзаголовок с кратким описанием системы премий и конкурсов фонда "Спутник Мира" для признания выдающихся достижений 
          </p>
        </div>
      </div>
      </section>
      
      {/* <!-- Общая информация о премиях --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-black">Система премий и признания</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Здесь будет общее описание системы премий и признания достижений, реализуемой фондом "Спутник Мира", ее целей и принципов.
                    </p>
                    <p className="text-lg text-gray-700">
                        Здесь будет продолжение описания значимости признания выдающихся поступков и достижений для формирования позитивных социальных ценностей.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Премия "Благородное сердце" --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 bg-red-500 text-white p-8 flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            <h2 className="text-3xl font-bold mb-4 text-center">Благородное сердце</h2>
                            <p className="text-center mb-2">Премия за яркие примеры благородства и героические поступки</p>
                        </div>
                        <div className="md:w-3/5 p-8">
                            <p className="text-gray-700 mb-6">
                                Здесь будет подробное описание премии "Благородное сердце", ее истории, цели и миссии. Премия вручается не только волонтёрам, но и любым гражданам, совершившим выдающиеся поступки.
                            </p>
                            
                            <h4 className="font-bold text-lg mb-4 text-black">Категории премии:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Спасение жизни</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание категории, критериев и примеров</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Помощь нуждающимся</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание категории, критериев и примеров</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Волонтёрство</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание категории, критериев и примеров</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Образование и просвещение</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание категории, критериев и примеров</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h4 className="font-bold text-lg mb-1 text-black">Награждение:</h4>
                                    <p className="text-gray-700">Ежегодно, 12 апреля</p>
                                </div>
                                <a href="noble-heart.html" className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition">Узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Конкурс "Поступок года" --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 bg-blue-500 text-white p-8 flex flex-col justify-center items-center order-1 md:order-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-white"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                            <h2 className="text-3xl font-bold mb-4 text-center">Поступок года</h2>
                            <p className="text-center mb-2">Конкурс для отбора самых ярких примеров храбрости и смелости</p>
                        </div>
                        <div className="md:w-3/5 p-8 order-2 md:order-1">
                            <p className="text-gray-700 mb-6">
                                Здесь будет подробное описание конкурса "Поступок года", его истории, цели и процедуры проведения. Конкурс направлен на выявление и общественное признание выдающихся поступков граждан.
                            </p>
                            
                            <h4 className="font-bold text-lg mb-4 text-black">Этапы конкурса:</h4>
                            <div className="space-y-4 mb-6">
                                <div className="p-4 bg-gray-100 rounded-lg flex">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-black">Сбор номинаций</h5>
                                        <p className="text-sm text-gray-700">Здесь будет описание этапа и критериев</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg flex">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-black">Отбор финалистов</h5>
                                        <p className="text-sm text-gray-700">Здесь будет описание этапа и критериев</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg flex">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-black">Народное голосование</h5>
                                        <p className="text-sm text-gray-700">Здесь будет описание этапа и критериев</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg flex">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-black">Награждение победителей</h5>
                                        <p className="text-sm text-gray-700">Здесь будет описание этапа и критериев</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h4 className="font-bold text-lg mb-1 text-black">Проведение:</h4>
                                    <p className="text-gray-700">Ежегодно, февраль-март</p>
                                </div>
                                <a href="act-of-year.html" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Всемирный конкурс "Русский язык - Спутник мира" --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 bg-green-500 text-white p-8 flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-white"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                            <h2 className="text-3xl font-bold mb-4 text-center">Русский язык - Спутник мира</h2>
                            <p className="text-center mb-2">Всемирный конкурс для иностранных граждан</p>
                        </div>
                        <div className="md:w-3/5 p-8">
                            <p className="text-gray-700 mb-6">
                                Здесь будет подробное описание всемирного конкурса "Русский язык - Спутник мира", его истории, миссии и международного значения. Конкурс направлен на популяризацию русского языка и культуры во всем мире.
                            </p>
                            
                            <h4 className="font-bold text-lg mb-4 text-black">Направления конкурса:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Литературное творчество</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание направления и требований</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Художественное чтение</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание направления и требований</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Научные исследования</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание направления и требований</p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h5 className="font-bold mb-2 text-black">Медиапроекты</h5>
                                    <p className="text-sm text-gray-700">Здесь будет описание направления и требований</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h4 className="font-bold text-lg mb-1 text-black">Проведение:</h4>
                                    <p className="text-gray-700">Ежегодно, сентябрь-декабрь</p>
                                </div>
                                <a href="russian-language.html" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition">Узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Всемирный диктант --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 bg-purple-500 text-white p-8 flex flex-col justify-center items-center order-1 md:order-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-white"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                            <h2 className="text-3xl font-bold mb-4 text-center">Всемирный диктант</h2>
                            <p className="text-center mb-2">Просветительская акция для всех желающих</p>
                        </div>
                        <div className="md:w-3/5 p-8 order-2 md:order-1">
                            <p className="text-gray-700 mb-6">
                                Здесь будет подробное описание всемирного диктанта "Спутник Мира", его цели, миссии и формата проведения. Диктант является просветительской акцией, направленной на популяризацию грамотности и культуры речи.
                            </p>
                            
                            <h4 className="font-bold text-lg mb-4 text-black">Особенности диктанта:</h4>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p className="text-gray-700">Здесь будет первая особенность всемирного диктанта "Спутник Мира"</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p className="text-gray-700">Здесь будет вторая особенность всемирного диктанта "Спутник Мира"</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p className="text-gray-700">Здесь будет третья особенность всемирного диктанта "Спутник Мира"</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>
                                    <p className="text-gray-700">Здесь будет четвертая особенность всемирного диктанта "Спутник Мира"</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h4 className="font-bold text-lg mb-1 text-black">Проведение:</h4>
                                    <p className="text-gray-700">15-20 мая 2025 года</p>
                                </div>
                                <a href="dictation.html" className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition">Узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Архив премий --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Архив премий</h2>
            
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-4 text-black">Лауреаты премии "Благородное сердце" 2024</h3>
                        
                        <div className="space-y-6">
                            <div className="border-b border-gray-200 pb-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h4 className="font-bold text-lg text-black">Иванов Александр Петрович</h4>
                                        <p className="text-green-600">Категория "Спасение жизни"</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            Золотая медаль
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    Здесь будет краткое описание подвига или заслуг лауреата премии
                                </p>
                            </div>
                            
                            <div className="border-b border-gray-200 pb-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h4 className="font-bold text-lg text-black">Петрова Мария Ивановна</h4>
                                        <p className="text-green-600">Категория "Помощь нуждающимся"</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            Серебряная медаль
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    Здесь будет краткое описание подвига или заслуг лауреата премии
                                </p>
                            </div>
                            
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h4 className="font-bold text-lg text-black">Благотворительный фонд "Луч надежды"</h4>
                                        <p className="text-green-600">Категория "Волонтёрство"</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            Бронзовая медаль
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    Здесь будет краткое описание подвига или заслуг лауреата премии
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-6 py-4 text-right">
                        <a href="noble-heart-2024.html" className="text-blue-600 font-medium">Смотреть все результаты 2024 года</a>
                    </div>
                </div>
                
                <div className="text-center">
                    <a href="awards-archive.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Полный архив премий и конкурсов</a>
                </div>
            </div>
        </div>
    </section>

    {/* Баннер */}
    <section>
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Стань частью наших премий и конкурсов</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Выдвигайте кандидатов, участвуйте в голосованиях или станьте волонтером в организации наших мероприятий. Вместе мы можем отметить тех, кто делает мир лучше.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
                <a href="register.html" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                    Выдвинуть кандидата
                </a>
                <a href="volunteer.html" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                    Стать волонтером
                </a>
            </div>
      </div>
    </section>
    </>
  )
}