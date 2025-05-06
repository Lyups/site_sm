export const metadata = {
  title: 'Новости — sputnikmira.ru',
  description: 'Новости и события',
};

export default function News() {
  return (
    <>
      <section>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Новости и события</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Следите за новостями фонда "Спутник Мира", анонсами мероприятий и важными событиями
          </p>
        </div>
      </div>
      </section>
  
    {/* <!-- Анонсы мероприятий --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Предстоящие события</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Событие 1 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-center bg-blue-100 text-blue-800 font-bold rounded-lg px-3 py-2">
                                <div className="text-2xl">15</div>
                                <div className="text-xs uppercase">Мая</div>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Международное</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Всемирный диктант "Спутник Мира"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет анонс всемирного диктанта "Спутник Мира", который пройдет с 15 по 20 мая 2025 года
                            в странах БРИКС и других партнерских государствах.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>10:00 - 18:00 (по местному времени)</span>
                        </div>
                        <a href="event-detail.html?id=1" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                            Подробнее
                        </a>
                    </div>
                </div>
                
                {/* <!-- Событие 2 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-center bg-blue-100 text-blue-800 font-bold rounded-lg px-3 py-2">
                                <div className="text-2xl">12</div>
                                <div className="text-xs uppercase">Июня</div>
                            </div>
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Церемония</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Награждение лауреатов премии "Благородное сердце"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет анонс торжественной церемонии награждения лауреатов премии "Благородное сердце",
                            которая пройдет в Москве 12 июня 2025 года.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>17:00 МСК</span>
                        </div>
                        <a href="event-detail.html?id=2" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                            Подробнее
                        </a>
                    </div>
                </div>
                
                {/* <!-- Событие 3 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="text-center bg-blue-100 text-blue-800 font-bold rounded-lg px-3 py-2">
                                <div className="text-2xl">25</div>
                                <div className="text-xs uppercase">Апреля</div>
                            </div>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Образование</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Семинар "Развитие волонтерского движения"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет анонс образовательного семинара для руководителей волонтерских организаций
                            по вопросам развития и масштабирования волонтерских проектов.
                        </p>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>14:00 - 18:00 МСК</span>
                        </div>
                        <a href="event-detail.html?id=3" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-8">
                <a href="events.html" className="text-blue-600 font-medium">Смотреть все мероприятия</a>
            </div>
        </div>
    </section>


{/* новости ЗАГОЛОВОК И ТД */}
{/* bg-[url('/images/test-img.jpg')] */}
    <section className="py-12 bg-gray-50 ">
    <h2 className="text-3xl font-bold text-center mb-12 text-black">Горячие новости</h2>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Новость 1 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="h-48 bg-gray-200 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div><div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>28 марта 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Историческая конференция в Абхазии</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет новость о том, как фонд "Спутник Мира" провел историческую конференцию, посвященную 80-летию Победы и 
                            чествованию 22 Героев Советского Союза из Абхазии.
                        </p>
                        <a href="news-detail.html?id=1" className="text-blue-600 font-medium">Читать далее</a>
                    </div>
                </div>
                
                {/* <!-- Новость 2 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-gray-200 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>15 марта 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Первая гимназия Владивостока получила статус "Спутник Мира"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет новость о том, как по результатам голосования Первая гимназия Владивостока официально получила 
                            статус "Спутник Мира".
                        </p>
                        <a href="news-detail.html?id=2" className="text-blue-600 font-medium">Читать далее</a>
                    </div>
                </div>
                
                {/* <!-- Новость 3 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-gray-200 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>7 марта 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Объявлены даты всемирного диктанта "Спутник Мира"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет новость о том, как фонд анонсировал проведение всемирного диктанта "Спутник Мира" в странах БРИКС,
                            который пройдет с 15 по 20 мая 2025 года.
                        </p>
                        <a href="news-detail.html?id=3" className="text-blue-600 font-medium">Читать далее</a>
                    </div>
                </div>
                
                {/* <!-- Новость 4 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-gray-200 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>28 февраля 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Итоги конкурса "Поступок года 2024"</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет новость об итогах ежегодного конкурса "Поступок года", где были отмечены самые яркие 
                            примеры храбрости и смелости, проявленные гражданами в 2024 году.
                        </p>
                        <a href="news-detail.html?id=4" className="text-blue-600 font-medium">Читать далее</a>
                    </div>
                </div>
                
                {/* <!-- Новость 5 --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 bg-gray-200 bg-[url('/images/test-img.jpg')] bg-cover bg-center"></div>
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            <span>15 февраля 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-black">Подписано соглашение о сотрудничестве с Роскосмосом</h3>
                        <p className="text-gray-600 mb-4">
                            Здесь будет новость о том, как фонд "Спутник Мира" и Роскосмос подписали соглашение о стратегическом 
                            сотрудничестве в области образовательных программ и популяризации космической деятельности.
                        </p>
                        <a href="news-detail.html?id=5" className="text-blue-600 font-medium">Читать далее</a>
                    </div>
                </div>
              </div>
              </div>
            </section>

{/* <!-- Фильтры для новостей --> */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4">
    {/* Заголовок и фильтры */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-black mb-4 md:mb-0">Все новости</h2>
      
      <div className="flex flex-wrap gap-4">
        {/* Категория */}
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Все категории</option>
            <option>Мероприятия</option>
            <option>Голосования</option>
            <option>Награждения</option>
            <option>Международные новости</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter mr-1">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </svg>
          </div>
        </div>

        {/* Дата */}
        <div className="relative">
          <input 
            type="date" 
            className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          </div>
        </div>
      </div>
    </div>

    {/* Список новостей */}
    <ul className="space-y-6">
      {/* Пример новости */}
      <li className="bg-white shadow-md rounded-lg overflow-hidden transition-transform ">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Запущена программа "Молодые волонтеры"</h3>
          <p className="text-gray-600 mb-4">
            Здесь будет новость о запуске новой образовательной программы "Молодые волонтеры" для школьников 
            и студентов, которая будет реализована в 15 регионах России.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Читать далее</a>
        </div>
      </li>

      {/* Добавьте еще новости по аналогии */}
      <li className="bg-white shadow-md rounded-lg overflow-hidden transition-transform ">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Объявлены победители конкурса</h3>
          <p className="text-gray-600 mb-4">
            В рамках международного конкурса молодых исследователей были объявлены победители из 12 стран.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Читать далее</a>
        </div>
      </li>

      <li className="bg-white shadow-md rounded-lg overflow-hidden transition-transform ">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Проведен онлайн-форум</h3>
          <p className="text-gray-600 mb-4">
            Прошел онлайн-форум, где обсуждались вопросы цифровизации образования и инновационных технологий.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Читать далее</a>
        </div>
      </li>
    </ul>

    {/* Пагинация */}
    <div className="flex justify-center mt-12">
      <nav className="inline-flex rounded-md shadow-sm">
        <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-l-md">
          Предыдущая
        </a>
        <a href="#" className="py-2 px-4 bg-blue-600 border border-blue-600 text-sm font-medium text-white hover:bg-blue-700">
          1
        </a>
        <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
          2
        </a>
        <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
          3
        </a>
        <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-r-md">
          Следующая
        </a>
      </nav>
    </div>
  </div>
</section>

    {/* <!-- Подписка на новости --> */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
          <div className="flex flex-col md:flex-row">
            {/* Left side */}
            <div className="flex flex-col justify-center bg-blue-600 p-8 text-white md:w-2/5">
              <h2 className="mb-4 text-2xl font-bold">Подпишитесь на новости</h2>
              <p className="mb-0">
                Получайте свежие новости о деятельности фонда, анонсы мероприятий и информацию о голосованиях
                на вашу электронную почту
              </p>
            </div>

            {/* Right side - Form */}
            <div className="p-8 md:w-3/5">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm text-black"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="text-gray-600">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}