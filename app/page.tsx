export const metadata = {
    title: 'Главная — sputnikmira.ru',
    description: 'Главная страница проекта — sputnikmira.ru',
  };

export default function Home() {
  return (
    <>
      {/* <!-- Hero блок --> */}
    <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white animate-gradient shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 opacity-20 bg-cover bg-black bg-center"></div>
        <div className="absolute right-[-50px] top-0 bottom-0 w-[30%] min-w-[400px] hidden md:block flex items-center">
            <img 
                src="/images/hero/space.png" 
                alt="Циолковский" 
                className="w-full h-auto max-h-full object-contain opacity-80" 
            />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-shadow-lg">Волонтёры — Элита XXI века</h1>
                <p className="text-xl mb-8 animate-fade-in animation-delay-200 text-shadow">
                    «Основной мотив моей жизни — сделать что-нибудь полезное для людей,
                    продвинуть человечество хоть немного вперед»
                </p>
                <p className="italic mb-8 animate-fade-in animation-delay-400 text-shadow">— К.Э. Циолковский</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
                    <a href="/404" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-lg">
                        Стать волонтёром
                    </a>
                    <a href="/404" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition shadow-lg">
                        Узнать больше
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Счетчик статистики --> */}
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-700 mb-2">13 753 000</div>
                    <div className="text-gray-600">Волонтёров</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-700 mb-2">137 080 966</div>
                    <div className="text-gray-600">Волонтёрских часов</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-700 mb-2">112 735</div>
                    <div className="text-gray-600">Организаций</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-700 mb-2">89</div>
                    <div className="text-gray-600">Регионов</div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Ключевые направления --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Флагманские проекты фонда</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-indigo-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal text-indigo-500"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Система званий волонтёров</h3>
                        <p className="text-gray-600 mb-4">
                            Уникальная система признания волонтёрской деятельности через специальные звания, 
                            награды и парадную форму.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-rose-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy text-rose-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Номинации и премии</h3>
                        <p className="text-gray-600 mb-4">
                            Премия «Благородное сердце», конкурс «Поступок года», другие для признания 
                            выдающихся поступков и достижений.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-cyan-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake text-cyan-500"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/><path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h6.26a2.13 2.13 0 0 0 0-3L12 5.36"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Международное сотрудничество</h3>
                        <p className="text-gray-600 mb-4">
                            Развитие волонтёрского движения через международные инициативы 
                            и сотрудничество со странами БРИКС.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-purple-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-line-chart text-purple-500"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Рейтинг</h3>
                        <p className="text-gray-600 mb-4">
                            организаций, корпораций,
                            учреждений и городов 
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-amber-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-amber-500"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Всемирный конкурс «Русский язык - Спутник Мира»</h3>
                        <p className="text-gray-600 mb-4">
                            Всемирный диктант по
                            русскому языку.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-emerald-100 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-megaphone text-emerald-500"><path d="m3 11 18-5v12l-18-5z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">Время твоего голоса</h3>
                        <p className="text-gray-600 mb-4">
                            Открытое народное голосование
                            за номинантов премии.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                            Подробнее 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a> */}
                    </div>
                </div>

                

            </div>
        </div>
    </section>

    {/* <!-- Текущие голосования --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-black">Текущие голосования</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Голосуй за лучших из первых «Спутников Мира».
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col mb-4">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-black">Александр Овечкин</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                За выдающиеся спортивные заслуги
                            </span>
                        </div>
                        <div className="h-72 bg-gray-200 bg-[url('/images/img5.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                    </div>
                    <p className="text-gray-600 mb-4">
                        За присвоение статуса «Спутник мира» выдающемуся российскому хоккеисту
                        Александру Овечкину за его спортивные достижения мирового уровня.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">Старт голосования - осень 2025г</p>
                    <a href="/404" className="block w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition text-center">
                        Голосовать
                    </a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col mb-4">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-black">Город-герой Сталинград</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Всемирное историческое наследие
                            </span>
                        </div>
                        <div className="h-72 bg-gray-200 bg-[url('/images/img6.jpg')] bg-cover bg-center rounded-lg mb-4"></div>
                    </div>
                    <p className="text-gray-600 mb-4">
                        За присвоение городу-герою Сталинград статуса Спутник Мира в номинации Всемирное историческое наследие.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">Старт голосования - осень 2025г</p>
                    <a href="/404" className="block w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition text-center">
                        Голосовать
                    </a>
                </div>
            </div>
            
            {/* <div className="text-center mt-8">
                <a href="/404" className="text-blue-600 font-medium">Смотреть все голосования</a>
            </div> */}
        </div>
    </section>

    {/* <!-- Новости и события --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-black">Новости и события</h2>
                {/* <a href="/404" className="text-blue-600 font-medium flex items-center">
                    Все новости 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a> */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden ">
                    <div className="h-72 bg-gray-200 bg-[url('/images/img1.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>28 марта 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 not-first:text-black">Историческое решение Президиума Фонда</h3>
                        <p className="text-gray-600 mb-4">
                            Благотворительный Фонд РВД Спутник Мира имени К.Э. Циолковского решением Президиума утвердил премию Спутник Мира Михаилу Егорову и Мелитону Кантарии посмертно.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium">Читать далее</a> */}
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-72 bg-gray-200 bg-[url('/images/img2.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>9 декабря 2024</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Первая в мире школа в статусе Спутник Мира</h3>
                        <p className="text-gray-600 mb-4">
                            Школа №15 города Дербента - Спутник Мира.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium">Читать далее</a> */}
                    </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-72 bg-gray-200 bg-[url('/images/img3.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>7 ноября 2024</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Всемирный диктант "Спутник Мира"</h3>
                        <p className="text-gray-600 mb-4">
                            Дата, время иместо проведения диктанта будут обьявлены осенью 2025 года.
                        </p>
                        {/* <a href="/404" className="text-blue-600 font-medium">Читать далее</a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Путь волонтера --> */}
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-black">Мечта волонтера</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                В добрый путь к великой судьбе Спутника Мира
            </p>
            
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    {/* Зеленые погоны */}
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                1
                            </div>
                            <div className="ml-6 flex-grow">
                                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-24 h-12 bg-gradient-to-b from-green-600 to-green-500 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 to-green-600"></div>
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-700 to-green-600"></div>
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-700 to-green-600"></div>
                                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-green-700 to-green-600"></div>
                                                <span className="relative z-10 text-base">1-4</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-green-700">Зеленые погоны</h3>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            1-4 года
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-lg">
                                        Зеленый цвет - символ кедра и жизни. Ежегодное повышение в звании.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Серебряные погоны */}
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                2
                            </div>
                            <div className="ml-6 flex-grow">
                                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-24 h-12 bg-gradient-to-b from-gray-500 to-gray-400 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-600 to-gray-500"></div>
                                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-gray-600 to-gray-500"></div>
                                                <span className="relative z-10 text-base">4-12</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-700">Серебряные погоны</h3>
                                        </div>
                                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                            4-12 лет
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-lg">
                                        Серебряный цвет - символ воды и энергии. Повышение в звании каждые 3 года.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Бирюзовые погоны */}
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                3
                            </div>
                            <div className="ml-6 flex-grow">
                                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-24 h-12 bg-gradient-to-b from-blue-600 to-blue-500 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-600"></div>
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-blue-600"></div>
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-700 to-blue-600"></div>
                                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-blue-700 to-blue-600"></div>
                                                <span className="relative z-10 text-base">13-27</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-blue-700">Бирюзовые погоны</h3>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                            13-27 лет
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-lg">
                                        Бирюзовый цвет - небесный символ. Повышение в звании каждые 5 лет.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Золотые погоны */}
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                4
                            </div>
                            <div className="ml-6 flex-grow">
                                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-24 h-12 bg-gradient-to-b from-yellow-500 to-yellow-400 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-500"></div>
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-500"></div>
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-600 to-yellow-500"></div>
                                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-600 to-yellow-500"></div>
                                                <span className="relative z-10 text-base">28-42</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-yellow-700">Золотые погоны</h3>
                                        </div>
                                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                            28-42 года
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-lg">
                                        Золотой цвет - символизирует солнце. Повышение в звании каждые 5 лет.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 40+ лет волонтерства */}
                    <div className="relative">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                                5
                            </div>
                            <div className="ml-6 flex-grow">
                                <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-24 h-12 bg-gradient-to-b from-red-600 to-red-500 rounded-md flex items-center justify-center text-white font-bold text-sm shadow-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-600"></div>
                                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-600"></div>
                                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-700 to-red-600"></div>
                                                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-red-700 to-red-600"></div>
                                                <span className="relative z-10 text-base">40+</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-red-700">Спутник Мира</h3>
                                        </div>
                                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                            Вершина судьбы волонтера
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-lg">
                                        После 40+ лет волонтерства присваивается международный статус Спутник Мира.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="/404" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                    Начать свой путь
                </a>
            </div>
        </div>
    </section>

    {/* <!-- Партнеры --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Кандидаты в партнеры и попечители Фонда Спутник Мира имени К.Э. Циолковского</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                    <div className="text-xl font-bold text-gray-400">РЖД</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                    <div className="text-xl font-bold text-gray-400">Газпром</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                    <div className="text-xl font-bold text-gray-400">ВТБ</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                    <div className="text-xl font-bold text-gray-400">Роскосмос</div>
                </div>
            </div>
            
            <div className="text-center mt-8">
                <a href="/404" className="text-blue-600 font-medium">Стать партнером проекта</a>
            </div>
        </div>
    </section>

    {/* <!-- Призыв к действию --> */}
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white animate-gradient shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow-lg">Присоединяйтесь к проекту "Спутник Мира"</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-shadow">
                Станьте частью движения, которое меняет мир к лучшему. 
                Вместе мы сможем создать будущее, которым будут гордиться наши дети.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/404" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition shadow-lg">
                    Зарегистрироваться
                </a>
                <a href="/404" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition shadow-lg">
                    Узнать больше
                </a>
            </div>
        </div>
    </section>
    </>
  )
}