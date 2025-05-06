export const metadata = {
    title: 'Система званий — sputnikmira.ru',
    description: 'Система званий и наград',
  };

export default function Ranks() {
  return (
    <>
      <section>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Система званий</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Здесь будет подзаголовок с кратким описанием уникальной системы признания волонтёрской деятельности через специальные звания и их философии 
          </p>
        </div>
      </div>
      </section>

      {/* <!-- Общая информация о системе званий --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-black">Философия системы</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Здесь будет описание философской основы системы званий, ее символическое значение и ценностные ориентиры, которые она представляет. 
                    </p>
                    <p className="text-lg text-gray-700">
                        Здесь будет продолжение описания того, как система званий мотивирует волонтеров к долгосрочной деятельности и создает сообщество единомышленников.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Уровни системы званий --> */}
    <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-black">Уровни системы званий</h2>
            
            {/* <!-- Зеленые погоны --> */}
            <div className="max-w-5xl mx-auto mb-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-green-500 text-white p-8 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold mb-4 text-center">Зеленые погоны</h3>
                            <p className="text-center mb-2">1-3 года волонтёрства</p>
                            <div className="w-32 h-8 bg-green-600 border-2 border-white rounded-lg mt-4"></div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h4 className="text-xl font-bold mb-4 text-green-700">Начало волонтерского пути</h4>
                            <p className="text-gray-700 mb-4">
                                Здесь будет описание первого уровня системы званий - Зеленых погон. Символ роста и энергии новой жизни.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Ежегодное повышение в звании</li>
                                <li>Здесь будет второе отличительное свойство этого уровня</li>
                                <li>Здесь будет третье отличительное свойство</li>
                            </ul>
                            <h5 className="font-bold mt-6 mb-2 text-black">Звания этого уровня:</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <span className="font-medium text-black">Младший волонтер — 1 год</span>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <span className="font-medium text-black">Волонтер — 2 года </span>
                                </div>
                                <div className="p-3 bg-green-50 rounded-lg">
                                    <span className="font-medium text-black">Старший волонтер — 3 года</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Серебряные погоны --> */}
            <div className="max-w-5xl mx-auto mb-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-gray-400 text-white p-8 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold mb-4 text-center">Серебряные погоны</h3>
                            <p className="text-center mb-2">4-12 лет волонтёрства</p>
                            <div className="w-32 h-8 bg-gray-500 border-2 border-white rounded-lg mt-4"></div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h4 className="text-xl font-bold mb-4 text-gray-700">Второй этап развития</h4>
                            <p className="text-gray-700 mb-4">
                                Здесь будет описание второго уровня системы званий - Серебряных погон. Символ чистой воды, питающей жизнь.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Повышение в звании каждые 3 года</li>
                                <li>Здесь будет второе отличительное свойство этого уровня</li>
                                <li>Здесь будет третье отличительное свойство</li>
                            </ul>
                            <h5 className="font-bold mt-6 mb-2 text-black">Звания этого уровня:</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <span className="font-medium text-black">Младший эксперт — 4-6 лет</span>
                                </div>
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <span className="font-medium text-black">Эксперт — 7-9 лет</span>
                                </div>
                                <div className="p-3 bg-gray-100 rounded-lg">
                                    <span className="font-medium text-black">Старший эксперт — 10-12 лет</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Бирюзовые погоны --> */}
            <div className="max-w-5xl mx-auto mb-24">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-blue-500 text-white p-8 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold mb-4 text-center">Бирюзовые погоны</h3>
                            <p className="text-center mb-2">13-27 лет волонтёрства</p>
                            <div className="w-32 h-8 bg-blue-600 border-2 border-white rounded-lg mt-4"></div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h4 className="text-xl font-bold mb-4 text-blue-700">Третий этап развития</h4>
                            <p className="text-gray-700 mb-4">
                                Здесь будет описание третьего уровня системы званий - Бирюзовых погон. Символ небес, стремление к высоким целям.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Повышение в звании каждые 5 лет</li>
                                <li>Здесь будет второе отличительное свойство этого уровня</li>
                                <li>Здесь будет третье отличительное свойство</li>
                            </ul>
                            <h5 className="font-bold mt-6 mb-2 text-black">Звания этого уровня:</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <span className="font-medium text-black">Младший наставник — 13-17 лет</span>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <span className="font-medium text-black">Наставник — 18-22 года</span>
                                </div>
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <span className="font-medium text-black">Старший наставник — 23-27 лет</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Золотые погоны --> */}
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-yellow-500 text-white p-8 flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-bold mb-4 text-center">Золотые погоны</h3>
                            <p className="text-center mb-2">28-42 года волонтёрства</p>
                            <div className="w-32 h-8 bg-yellow-600 border-2 border-white rounded-lg mt-4"></div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h4 className="text-xl font-bold mb-4 text-yellow-700">Высший этап развития</h4>
                            <p className="text-gray-700 mb-4">
                                Здесь будет описание высшего уровня системы званий - Золотых погон. Символ солнца, достижение вершины.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Статус "Спутник мира" после 42 лет волонтёрской деятельности</li>
                                <li>Здесь будет второе отличительное свойство этого уровня</li>
                                <li>Здесь будет третье отличительное свойство</li>
                            </ul>
                            <h5 className="font-bold mt-6 mb-2 text-black">Звания этого уровня:</h5>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <span className="font-medium text-black">Младший мастер — 28-32 года</span>
                                </div>
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <span className="font-medium text-black">Мастер — 33-37 лет</span>
                                </div>
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    <span className="font-medium text-black">Гранд-мастер — 38-42 года</span>
                                </div>
                                <div className="p-3 bg-red-50 rounded-lg border-2 border-yellow-500">
                                    <span className="font-medium text-red-700">Спутник мира</span><span className="font-medium text-black"> — после 42 лет</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Парадная форма --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Парадная форма</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div>
                    <div className="mb-6 bg-gray-200 h-96 rounded-lg bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-xl font-bold mb-3 text-black">Парадная форма волонтёра</h3>
                    <p className="text-gray-700 mb-4">
                        Здесь будет описание парадной формы волонтёров, её особенностей, символики и регламента ношения.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Строгий регламент использования формы</li>
                        <li>Запрет на ношение в ресторанах и развлекательных заведениях</li>
                        <li>Использование только в особые дни и на официальных мероприятиях</li>
                    </ul>
                </div>
                
                <div>
                    <div className="mb-6 bg-gray-200 h-96 rounded-lg  bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-xl font-bold mb-3 text-black">Отличительные знаки и символика</h3>
                    <p className="text-gray-700 mb-4">
                        Здесь будет описание отличительных знаков, погон, нашивок и другой символики, используемой на парадной форме волонтёров.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Погоны соответствующего цвета уровня</li>
                        <li>Нашивки за особые заслуги и достижения</li>
                        <li>Эмблемы проектов, в которых участвовал волонтёр</li>
                    </ul>
                </div>
            </div>
            
            <div className="text-center mt-10">
                <a href="uniform-regulation.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Регламент ношения формы</a>
            </div>
        </div>
    </section>

    {/* <!-- Часто задаваемые вопросы --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Часто задаваемые вопросы</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-3 text-black">Как происходит повышение в звании?</h3>
                    <p className="text-gray-700">
                        Здесь будет ответ на вопрос о процедуре повышения в звании, требованиях и критериях оценки.
                    </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-3 text-black">Как получить парадную форму?</h3>
                    <p className="text-gray-700">
                        Здесь будет ответ на вопрос о процедуре получения парадной формы, её стоимости и возможностях финансирования.
                    </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-3 text-black">Что происходит при перерыве в волонтёрской деятельности?</h3>
                    <p className="text-gray-700">
                        Здесь будет ответ на вопрос о том, как учитывается стаж при перерывах в волонтёрской деятельности.
                    </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-bold text-lg mb-3 text-black">Как учитывается добровольческий опыт до вступления в систему "Спутник Мира"?</h3>
                    <p className="text-gray-700">
                        Здесь будет ответ на вопрос о зачете волонтёрского стажа, полученного в других организациях.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Спутник будущего для молодежи --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-blue-600 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-bold mb-4 text-center">Спутник будущего</h2>
                        <p className="text-center mb-2">Для молодежи 12-18 лет</p>
                    </div>
                    <div className="md:w-2/3 p-8">
                        <p className="text-gray-700 mb-6">
                            Здесь будет описание особой программы для молодежи "Спутник будущего", отличий от взрослой системы и особенностей участия.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-bold mb-2 text-black">Современная атрибутика</h4>
                                <p className="text-sm text-gray-700">Здесь будет описание современной одежды и атрибутики для молодежи</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h4 className="font-bold mb-2 text-black">Образовательная программа</h4>
                                <p className="text-sm text-gray-700">Здесь будет описание образовательных возможностей для молодых волонтеров</p>
                            </div>
                        </div>
                        
                        <a href="future.html" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">Подробнее о программе</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Баннер с рекрутингом */}
    <section>
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Начните свой путь волонтера сегодня</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Присоединяйтесь к проекту "Спутник Мира" и пройдите уникальный путь развития
          от начинающего волонтера до обладателя высших званий.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
                <a href="register.html" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                    Зарегистрироваться
                </a>
                <a href="volunteer.html" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                    Узнать больше о волонтерстве
                </a>
            </div>
      </div>
    </section>
    </>
  )
}