// пустая и голая страница > копировать-вставить-наполнить/исправить

export const metadata = {
  title: 'EXAMPLE',
  description: 'desc example',
};

export default function About() {
  return (
    <>
      {/* вверх банер */}
      <section>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Название EXAMPLE"</h1>
          <p className="text-xl max-w-3xl mx-auto">
            описание EXAMPLE
          </p>
        </div>
      </div>
      </section>


    {/* ОСНОВА СТАРТ */}

    {/* ОСНОВА ФИНИШ */}

    {/* вниз баннер */}
    <section>
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Название EXAMPLE</h1>
          <p className="text-xl max-w-3xl mx-auto">
          описание EXAMPLE
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
                <a href="register.html" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                    Кнопка раз
                </a>
                <a href="volunteer.html" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition">
                    Кнопка два
                </a>
            </div>
      </div>
    </section>
    </>
  )
}