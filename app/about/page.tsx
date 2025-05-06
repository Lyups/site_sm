
export const metadata = {
    title: 'О проекте — sputnikmira.ru',
    description: 'О проекте "Спутник Мира"',
  };

export default function About() {
  return (
    <>
      <section>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">О проекте "Спутник Мира"</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Здесь будет подзаголовок с кратким описанием основной миссии проекта "Спутник Мира" и его философии
          </p>
        </div>
      </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-black">Миссия и философия</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Здесь будет подробное описание миссии фонда "Спутник мира" как благотворительного фонда поддержки и развития волонтёрской деятельности имени К.Э. Циолковского, создающего инновационную экосистему для признания, мотивации и объединения волонтёров.
                    </p>
                    <p className="text-lg text-gray-700">
                        Здесь будет продолжение описания философии проекта, вдохновленной словами Циолковского: "Основной мотив моей жизни - сделать что-нибудь полезное для людей и наполнить достойным смыслом жизнь будущих поколений".
                    </p>
                </div>

                <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-12 text-xl italic text-gray-700">
                    "Каждый рождённый ребёнок - спутник мира... Время покажет."
                </blockquote>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center text-black">История создания</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Здесь будет описание истории создания фонда, начиная с 2006 года, его основных этапов развития и ключевых достижений за прошедшие годы.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Цели проекта</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Здесь будет первая цель проекта "Спутник Мира"</li>
                            <li>Здесь будет вторая цель проекта</li>
                            <li>Здесь будет третья цель проекта</li>
                            <li>Здесь будет четвертая цель проекта</li>
                            <li>Здесь будет пятая цель проекта</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-black">Ценности</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Здесь будет первая ценность проекта "Спутник Мира"</li>
                            <li>Здесь будет вторая ценность проекта</li>
                            <li>Здесь будет третья ценность проекта</li>
                            <li>Здесь будет четвертая ценность проекта</li>
                            <li>Здесь будет пятая ценность проекта</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Команда фонда --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Команда фонда</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4  bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-xl font-bold text-center mb-2 text-black">Иванов Иван Иванович</h3>
                    <p className="text-blue-600 text-center mb-4">Президент фонда</p>
                    <p className="text-gray-600 text-center">
                        Здесь будет краткая биография и описание роли человека в фонде "Спутник Мира"
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4  bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-xl font-bold text-center mb-2 text-black">Петрова Анна Сергеевна</h3>
                    <p className="text-blue-600 text-center mb-4">Исполнительный директор</p>
                    <p className="text-gray-600 text-center">
                        Здесь будет краткая биография и описание роли человека в фонде "Спутник Мира"
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4  bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-xl font-bold text-center mb-2 text-black">Сидоров Алексей Петрович</h3>
                    <p className="text-blue-600 text-center mb-4">Руководитель программ</p>
                    <p className="text-gray-600 text-center">
                        Здесь будет краткая биография и описание роли человека в фонде "Спутник Мира"
                    </p>
                </div>
            </div>
            
            <div className="text-center mt-10">
                <a href="team.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Узнать больше о команде</a>
            </div>
        </div>
    </section>

    {/* <!-- Президиум фонда --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Президиум фонда</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 bg-[url('/images/test-img.jpg')] bg-cover bg-center "></div>
                    <h3 className="text-lg font-bold text-center mb-1 text-black">Фамилия И.О.</h3>
                    <p className="text-blue-600 text-center text-sm mb-2">Должность</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-lg font-bold text-center mb-1 text-black">Фамилия И.О.</h3>
                    <p className="text-blue-600 text-center text-sm mb-2">Должность</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-lg font-bold text-center mb-1 text-black">Фамилия И.О.</h3>
                    <p className="text-blue-600 text-center text-sm mb-2">Должность</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <h3 className="text-lg font-bold text-center mb-1 text-black">Фамилия И.О.</h3>
                    <p className="text-blue-600 text-center text-sm mb-2">Должность</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Документы фонда --> */}
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Документы фонда</h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
                <a href="#" className=" bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between">
                    <span className="font-medium text-black">Устав фонда "Спутник Мира"</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
                
                <a href="#" className=" bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between">
                    <span className="font-medium text-black">Годовой отчет за 2024 год</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
                
                <a href="#" className=" bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between">
                    <span className="font-medium text-black">Положение о присвоении статуса "Спутник мира"</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
                
                <a href="#" className=" bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between">
                    <span className="font-medium text-black">Регламент использования парадной формы</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
            </div>
        </div>
    </section>

    {/* Баннер с рекрутингом */}
    <section>
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Присоединяйтесь к проекту "Спутник Мира"</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Станьте частью движения, которое меняет мир к лучшему. Вместе мы сможем создать будущее, которым будут гордиться наши дети. 
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
                <a href="register.html" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                    Зарегистрироваться
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