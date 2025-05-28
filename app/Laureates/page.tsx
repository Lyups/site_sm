'use client'

import { usePathname } from 'next/navigation'

// export const metadata = {
//   title: 'Лауреаты премии Спутник Мира',
//   description: 'Лауреаты премии Спутник Мира в номинации Космонавтика',
// };

const nominations = [
  { name: 'Культура', href: '/Laureates/Culture' },
  { name: 'Космонавтика', href: '/Laureates/Space' },
  { name: 'Спорт', href: '/Laureates/Sport' },
  { name: 'Медицина', href: '/Laureates/Medicine' },
  { name: 'Наука', href: '/Laureates/Science' },
  { name: 'Политика', href: '/Laureates/Politics' },
  { name: 'Творческий коллектив', href: '/Laureates/Collective' },
  { name: 'Мировая экономика и безопасность', href: '/Laureates/Economy' },
  { name: 'Просветительная организация', href: '/Laureates/Education' },
  { name: 'Образовательное учреждение', href: '/Laureates/Institution' },
  { name: 'Всемирное историческое наследие', href: '/Laureates/Heritage' },
  { name: 'Международная организация', href: '/Laureates/International' },
  { name: 'Корпорация', href: '/Laureates/Corporation' },
];

// Данные для каждой номинации
const nominationData = {
  Culture: {
    title: 'Культура',
    description: 'Номинацию культура определяет лауреата премии Спутник Мира как деятеля культуры, искусства или творческой личности, внесшего значительный вклад в развитие мировой культуры.',
    laureates: [
      { name: 'Иван Иванов', role: 'Художник', title: 'Заслуженный деятель искусств' },
      { name: 'Петр Петров', role: 'Музыкант', title: 'Народный артист' },
      { name: 'Сергей Сергеев', role: 'Писатель', title: 'Лауреат премии' }
    ]
  },
  Space: {
    title: 'Космонавтика',
    description: 'Номинацию космонавтика определяет лауреата премии Спутник Мира как действующего или бывшего космонавта, работника космической отрасли или относящихся к ней, за оперативные действия в условиях космоса, уникальные технические решения, открытия во благо человека и общества.',
    laureates: [
      { name: 'Терешкова Велентина Владимировна', role: 'Летчик-космонавт', title: 'Герой Советского Союза' },
      { name: 'Гагарин Юрий Алексеевич', role: 'Летчик-космонавт', title: 'Герой Советского Союза' },
      { name: 'Леонов Алексей Архипович', role: 'Летчик-космонавт', title: 'Герой Советского Союза' }
    ]
  },
  // Добавьте данные для остальных номинаций по аналогии
};

export default function Laureates() {
  const pathname = usePathname();
  const currentNomination = pathname.split('/').pop() || 'Space';
  const data = nominationData[currentNomination as keyof typeof nominationData] || nominationData.Space;

  return (
    <div className="min-h-screen bg-blue-800 text-white flex flex-col">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Лауреаты премии Спутник Мира в номинации</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
          {nominations.map((nom) => (
            <a
              key={nom.name}
              href={nom.href}
              className={
                nom.href === pathname
                  ? 'font-bold underline text-white px-2'
                  : 'text-blue-200 hover:underline cursor-pointer px-2'
              }
            >
              {nom.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
          {data.laureates.map((laureate, idx) => (
            <div
              key={idx}
              className="bg-white text-black rounded-3xl shadow-lg flex flex-col items-center px-6 py-8 w-full md:w-1/3 max-w-xs min-h-[350px]"
            >
              <div className="mb-6 w-full flex justify-center">
                <div className="border border-black rounded-lg w-32 h-32 flex items-center justify-center text-lg font-medium">
                  ФОТО
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg mb-2">{laureate.name}</div>
                <div className="text-sm font-medium mb-1">{laureate.role}</div>
                <div className="text-sm">{laureate.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-700 rounded-xl p-6 text-center text-white text-base max-w-3xl mx-auto">
          {data.description}
        </div>
      </div>
    </div>
  );
}