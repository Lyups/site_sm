export const metadata = {
  title: 'Голосования — sputnikmira.ru',
  description: 'Система голосования',
};


export default function Voting() {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Голосования</h1>
            <p className="text-xl max-w-3xl mx-auto">
                Примите участие в присвоении статуса «Спутник мира» достойным кандидатам. Ваш голос важен для справедливого признания заслуг. 
            </p>
            </div>
        </div>
      </section>
      {/* Фильтры голосований */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold mb-4 md:mb-0 text-black">Текущие голосования</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Все категории</option>
                  <option>Личности</option>
                  <option>Организации</option>
                  <option>Города</option>
                  <option>Проекты</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Все регионы</option>
                  <option>Москва</option>
                  <option>Санкт-Петербург</option>
                  <option>Владивосток</option>
                  <option>Международные</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Сортировка</option>
                  <option>По популярности</option>
                  <option>По дате завершения</option>
                  <option>По алфавиту</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Текущие голосования */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Голосование 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">Александр Овечкин</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  За выдающиеся спортивные заслуги
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Здесь будет описание голосования за присвоение статуса «Спутник мира» выдающемуся российскому хоккеисту
                Александру Овечкину за его спортивные достижения мирового уровня.
              </p>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>316,842 голосов</span>
                  <span>Осталось 83 дня</span>
                </div>
              </div>
              <a href="voting-detail.html?id=1" className="block w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition text-center">
                Голосовать
              </a>
            </div>
            {/* Голосование 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">Город Сухум</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Первый город-спутник мира
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Здесь будет описание голосования за присвоение городу Сухум статуса «Спутник мира» в признание вклада
                его жителей и абхазского народа в общее дело мира и развития.
              </p>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full" style={{ width: '52%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>128,756 голосов</span>
                  <span>Осталось 156 дней</span>
                </div>
              </div>
              <a href="voting-detail.html?id=2" className="block w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition text-center">
                Голосовать
              </a>
            </div>
            {/* Голосование 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">Первая гимназия Владивостока</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Образовательное учреждение
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Здесь будет описание голосования за присвоение Первой гимназии Владивостока статуса «Спутник мира» 
                за выдающиеся достижения в сфере образования и воспитания молодежи.
              </p>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-600 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>89,125 голосов</span>
                  <span>Осталось 42 дня</span>
                </div>
              </div>
              <a href="voting-detail.html?id=3" className="block w-full bg-yellow-600 text-white py-2 rounded-lg font-medium hover:bg-yellow-700 transition text-center">
                Голосовать
              </a>
            </div>
            {/* Голосование 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">Благотворительный фонд "Подари жизнь"</h3>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Организация
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Здесь будет описание голосования за присвоение благотворительному фонду "Подари жизнь" 
                статуса «Спутник мира» за многолетнюю деятельность по спасению детей с онкологическими заболеваниями.
              </p>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between mt-1 text-sm text-gray-500">
                  <span>62,438 голосов</span>
                  <span>Осталось 201 день</span>
                </div>
              </div>
              <a href="voting-detail.html?id=4" className="block w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition text-center">
                Голосовать
              </a>
            </div>
          </div>
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
      {/* Информация о голосовании */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">О процедуре голосования</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">1</div>
                      <div className='text-black'><span>Кто может голосовать</span></div>
                    </h3>
                    <p className="text-gray-700 ml-11">
                      Здесь будет описание того, кто может принимать участие в голосованиях, 
                      требования к участникам и процедура верификации.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">2</div>
                      <div className='text-black'><span>Как проходит голосование</span></div>
                    </h3>
                    <p className="text-gray-700 ml-11">
                      Здесь будет описание процедуры голосования, ее этапов, сроков проведения
                      и механизмов обеспечения прозрачности.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">3</div>
                      <div className='text-black'><span>Результаты голосования</span></div>
                    </h3>
                    <p className="text-gray-700 ml-11">
                      Здесь будет описание процедуры подведения итогов, верификации результатов
                      и дальнейших действий после завершения голосования.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">4</div>
                      <div className='text-black'><span>Правила и этические принципы</span></div>
                    </h3>
                    <p className="text-gray-700 ml-11">
                      Здесь будет описание правил и этических принципов проведения голосований,
                      требований к поведению участников и меры по предотвращению злоупотреблений.
                    </p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a href="voting-rules.html" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Подробные правила голосования
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Архив голосований */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Архив голосований</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex justify-between text-black">
                  <span>Школа имени Героя Советского Союза Сурмача</span>
                  <span className="text-green-600 text-base">Завершено</span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div className="text-gray-600 mb-2 sm:mb-0">
                    Дербент, Дагестан
                  </div>
                  <div className="text-sm text-gray-500">
                    Завершено 15 января 2025 г.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">Итоговый результат: 89% (142,583 голосов)</div>
                  </div>
                  <a href="voting-result.html?id=101" className="text-blue-600 font-medium">Подробнее о результатах</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 flex justify-between text-black">
                  <span>Иннокентий Смоктуновский</span>
                  <span className="text-green-600 text-base">Завершено</span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div className="text-gray-600 mb-2 sm:mb-0">
                    Посмертное присвоение статуса
                  </div>
                  <div className="text-sm text-gray-500">
                    Завершено 28 ноября 2024 г.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '93%' }}></div>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">Итоговый результат: 93% (218,956 голосов)</div>
                  </div>
                  <a href="voting-result.html?id=102" className="text-blue-600 font-medium">Подробнее о результатах</a>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="voting-archive.html" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Смотреть полный архив голосований
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Выдвижение кандидатов */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-blue-600 text-white p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 ">Выдвиньте своего кандидата</h2>
                <p className="mb-0">
                  Вы можете предложить кандидата на присвоение статуса «Спутник мира». 
                  Это может быть выдающаяся личность, организация, учебное заведение или город.
                </p>
              </div>
              <div className="md:w-3/5 p-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nomination-type" className="block text-sm font-medium text-gray-700 mb-1">Тип кандидата</label>
                    <select id="nomination-type" className="block w-full  text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border">
                      <option>Выберите тип</option>
                      <option>Личность</option>
                      <option>Организация</option>
                      <option>Учебное заведение</option>
                      <option>Город</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nomination-name" className="block text-sm font-medium text-gray-700 mb-1">Имя/название</label>
                    <input type="text" id="nomination-name" className="block w-full  text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border" placeholder="Введите имя или название кандидата" />
                  </div>
                  <div>
                    <label htmlFor="nomination-reason" className="block text-sm font-medium text-gray-700 mb-1">Обоснование</label>
                    <textarea id="nomination-reason" rows={4} className="block w-full  text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border" placeholder="Опишите заслуги и достижения, почему этот кандидат достоин статуса"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                      Отправить заявку
                    </button>
                    <p className="text-xs text-gray-500 mt-2">
                      Все заявки проходят модерацию перед публикацией
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Баннер */}
      <section>      
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Ваш голос имеет значение</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Принимайте участие в голосованиях, поддерживайте достойных кандидатов и помогайте создавать справедливую систему признания заслуг.           </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
            <a href="register.html" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Зарегистрироваться
            </a>
            <a href="volunteer.html" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                Правила голосования
            </a>
        </div>
        </div>
      </section>
    </>
  )
}