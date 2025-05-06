export const metadata = {
  title: 'Профиль — sputnikmira.ru',
  description: 'Профиль пользователя',
};

export default function ProfilePage() {
  return (
    <section>
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Профиль волонтера</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Левая колонка - информация о пользователе */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col items-center text-center">
                <img 
                  src="/images/avatar_user.jpg" 
                  alt="Фото пользователя" 
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold">Имя Волонтера</h2>
                <p className="text-gray-500 mt-1">Волонтер</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">Рейтинг: 4.5</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Активен</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-3">О себе</h3>
              <p className="text-gray-600">
                Здесь можно написать краткое описание волонтера, его опыт, интересы и т.д.
              </p>
            </div>
          </div>

          {/* Правая колонка - активность/достижения */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Последние действия</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">📌</span>
                  <div>
                    <p>Участвовал в акции "Чистый город" 2025</p>
                    <span className="text-sm text-gray-500">12 марта 2025</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">📦</span>
                  <div>
                    <p>Доставил гуманитарную помощь в регион</p>
                    <span className="text-sm text-gray-500">5 апреля 2025</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Достижения</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-500">Сертификат участника</p>
                  <p className="font-medium">Городская акция 2024</p>
                </div>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-500">Медаль за волонтерство</p>
                  <p className="font-medium">Национальный конкурс</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Баннер нижний только для гостей. Когда юзер авторизуется, нужно убирать этот баннер, !продумать логику! */}
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

    

    

  );
}