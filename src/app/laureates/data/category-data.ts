interface CategoryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Laureate {
  name: string;
  role: string;
  title: string;
  image: string;
}

interface NominationData {
  title: string;
  description: string;
  laureates: Laureate[];
}

type CategoryData = {
  [key: string]: NominationData;
};

const categoryData: CategoryData = {
  Culture: {
    title: 'Культура',
    description: 'Номинация культура определяет лауреата премии Спутник Мира в области театрального и кино искуства, живописи, композиторства, поэзии, изобразительного и вокального исскуства, определившего неоспоримое народное признание и любовь.',
    laureates: [
      { name: 'Александра Николаевна Пахмутова', role: 'Советский и Российский композитор', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/pahm.jpg' },
      { name: 'Никита Сергеевич Михалков', role: 'Советский и Российский кинорежиссёр', title: 'Сценарист, продюсер, киноактёр, телеведущий', image: '/images/laureates/culture/mihalkov.jpg' },
      { name: 'Лещенко Лев Валерьянович', role: 'Советский и Российский народный артист', title: 'Эстрадный певец', image: '/images/laureates/culture/leshenko.jpg' },
      { name: 'Петросян Евгений Ваганович', role: 'Советский и Российский народный артист', title: 'Писатель-юморист', image: '/images/laureates/culture/petrosan.jpg' },
      { name: 'Куклачёв Юрий Дмитриевич', role: 'Советский и Российский народный артист', title: 'Артист цирка', image: '/images/laureates/culture/kuklachev.jpg' },
      { name: 'Михайлов Александр Яковлевич', role: 'Советский и Российский народный артист', title: 'Актёр театра и кино', image: '/images/laureates/culture/mikhailov.jpg' },
      { name: 'Сигал Стивен Фредерик', role: 'Американский актёр, кинорежиссёр, сценарист', title: 'Кинопродюсер, музыкант, мастер Айкидо (7-й дан)', image: '/images/laureates/culture/segul.jpg' },
      { name: 'Джеки Чан', role: 'Актёр, каскадёр, кинорежисёр, кинопродюсер', title: 'Сценарист, певец, мастер боевых искусств', image: '/images/laureates/culture/chan.jpg' },
      { name: 'Мирей Матье', role: 'Французская певица', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/mathieu.jpg' },
      { name: 'Оливер Стоун', role: 'Американский кинорежиссёр', title: 'Сценарист, продюсер', image: '/images/laureates/culture/stone.jpg' },
      { name: 'Спиваков Владимир Теодорович', role: 'Российский дирижёр, скрипач-виртуоз', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/spivakov.jpg' },
      { name: 'Гергиев Валерий Абисалович', role: 'Советский и Российский дирижёр, художественный руководитель', title: 'Генеральный директор Мариинского Театра', image: '/images/laureates/culture/gergiev.jpg' },
      { name: 'Мысин Елисей', role: 'Композитор, пианист-виртуоз', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/elisei.jpg' },
      { name: 'Эмир Кустурица', role: 'Югославский и Сербский актёр, кинорежиссёр', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/emir.jpg' },
      { name: 'Пиотровский Михаил Борисович', role: 'Советский и Российский историк, профессор', title: 'Директор Государственного Эрмитажа', image: '/images/laureates/culture/piotrovski.jpg' },
      { name: 'Машков Владимир Львович', role: 'Советский и Российский актёр театра и кино', title: 'Кинорежиссёр, кинопродюсер, сценарист', image: '/images/laureates/culture/maskov.jpg' },
      { name: 'Гуцериев Михаил Сафарбекович', role: 'Российский Поэт', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/gutseriev.jpg' },
      { name: 'Ханс-Йоахим Фрай', role: 'Немецкий и Российский режисёр-постановщик', title: 'Художественный руководитель культурного центра "Сириус"', image: '/images/laureates/culture/hans.jpg' },
      { name: 'Людмила Михайловна Савельева', role: 'Советская и Российская народная актриса', title: 'Заслуженный деятель искусств', image: '/images/laureates/culture/savelieva.jpg' }
    ]
  },
  Space: {
    title: 'Космонавтика',
    description: 'Номинацию космонавтика определяет лауреата премии Спутник Мира как действующего или бывшего космонавта, работника космической отрасли или относящихся к ней, за оперативные действия в условиях космоса, уникальные технические решения, открытия во благо человека и общества.',
    laureates: [
      { name: 'Терешкова Велентина Владимировна', role: 'Летчик-космонавт', title: 'Герой Советского Союза', image: '/images/laureates/space/teresh.jpg' },
      //{ name: 'Гагарин Юрий Алексеевич', role: 'Летчик-космонавт', title: 'Герой Советского Союза', image: '/images/laureates/space/example.jpg' },
      //{ name: 'Леонов Алексей Архипович', role: 'Летчик-космонавт', title: 'Герой Советского Союза', image: '/images/laureates/space/example.jpg' }
    ]
  },
  Posmertno: {
    title: 'Посмертно',
    description: 'Из глубины столетий нас восхищают талантливые, благородные и духовные предки. Открытия и таланты, труды и благородная жертвенность напоминают будущим поколениям о смысле жизни и высокой миссии Человека. Президиум благотворительного фонда РВД  Спутник Мира имени К. Э. Циолковского утвердил премию Спутник Мира посмертно, ярким, талантливым, благородным и духовным просветителям в истории человеческой цивилизации, гражданам России и Мира, с уверенностью, что будущие поколения в своих устремлениях и поступках будут достойны Великих предков. Президент Благотворительного фонда РВД  Спутник Мира  имени К. Э. Циолковского Невский Сергей Владимирович',
    laureates: [
      { name: 'Мелитон Кантария', role: '', title: 'Герой Советского Союза', image: '/images/laureates/space/teresh.jpg' }
      //{ name: 'Гагарин Юрий Алексеевич', role: 'Летчик-космонавт', title: 'Герой Советского Союза', image: '/images/laureates/space/example.jpg' },
      //{ name: 'Леонов Алексей Архипович', role: 'Летчик-космонавт', title: 'Герой Советского Союза', image: '/images/laureates/space/example.jpg' }
    ]
  },
  Sport: {
    title: 'Спорт',
    description: 'Номинация спорт определяет лауреата премии Спутник Мира за достижения в спорте и тренерстве, как результат Олимпийские и международные победы.',
    laureates: [
      { name: 'Тарасова Татьяна Анатольевна', role: 'Советский и Российский Тренер по фигурному катанию', title: 'Мастер спорта СССР Международного класса', image: '/images/laureates/sport/tarasova.jpg' },
      { name: 'Карпов Анатолий Евгеньевич', role: 'Советский и Российский шахматист', title: 'Международный Гроссмейстер', image: '/images/laureates/sport/karpov.jpg' },
      { name: 'Мишин Алексей Николаевич', role: 'Советский и Российский Тренер по фигурному катанию', title: '', image: '/images/laureates/sport/mishin.jpg' },
      { name: 'Алина Кабаева', role: 'Российская спортсменка (художественная гимнастика)', title: 'Общественный и политический деятель, медиаменеджер', image: '/images/laureates/sport/kabaeva.jpg' },
      { name: 'Винер Ирина Александровна', role: 'Советский и Российский тренер по художественной гимнастике', title: 'Педагог, профессор', image: '/images/laureates/sport/viner.jpg' },
      { name: 'Тутберидзе Этери Георгиевна', role: 'Российский тренер по фигурному катанию', title: '', image: '/images/laureates/sport/tutbe.jpg' }
    ]
  },
  Medicine: {
    title: 'Медицина',
    description: 'Номинация медицина определяет лауреата премии Спутник Мира в области здравоохранения, за талант сбережения, укрепления, спасения, жизни и здоровья человека и общества.',
    laureates: [
      { name: 'Бокерия Лео Антонович', role: 'Советский и Российский врач-кардиохирург', title: 'Академик РАН, изобретатель', image: '/images/laureates/medicine/bokeria.jpg' },
      { name: 'Рошаль Леонид Михайлович', role: 'Советский и Российский хирург', title: 'Президент Национальной медицинской палаты, "Детский Доктор Мира"', image: '/images/laureates/medicine/roshal.jpg' },
      { name: 'Крашенюк Альберт Иванович', role: 'Вирусолог Советского Союза', title: 'Доктор медицинских наук', image: '/images/laureates/medicine/krashen.jpg' }
    ]
  },
  Science: {
    title: 'Наука',
    description: 'Номинация наука определяет премию Спутник Мира за открытия и успешные воплощения достижений науки и техники в гражданские, оборонные, медицинские и образовательные проекты  во благо людям, а также экосистем.',
    laureates: [
      { name: 'Дроздов Николай Николаевич', role: 'Советский и Российский учёный-зоолог', title: 'Биогеограф, профессор', image: '/images/laureates/science/drozdov.jpg' },
      { name: 'Лихачёв Алексей Евгеньевич', role: 'Генеральный директор государственной корпорации "Росатом"', title: 'Государственный деятель', image: '/images/laureates/science/lihachev.jpg' },
      { name: 'Ковальчук Михаил Валентинович', role: 'Советский и Российский физик', title: 'Директор НИЦ "Курчатовский институт"', image: '/images/laureates/science/koval.jpg' },
      { name: 'Чемезов Сергей Викторович', role: 'Генеральный директор корпорации "Ростех"', title: 'Герой Российской Федерации, политик', image: '/images/laureates/science/chemezov.jpg' }
    ]
  },
  Politics: {
    title: 'Политика',
    description: 'Номинация политика, определяет лауреата премии Спутник Мира как действующего или бывшего участника государственной и политической деятельности, внёсшего значительный и положительный вклад в развитие общества и духовное просвещение.',
    laureates: [
      { name: 'Кузнецова Анна Юрьевна', role: 'Российский Государственный Деятель', title: 'Политик', image: '/images/laureates/politics/kuznecova.jpg' },
      { name: 'Матвиенко Валентина Ивановна', role: 'Советский и Российский государственный деятель, дипломат, политик', title: 'Председатель Совета Федерации Федерального собрания РФ', image: '/images/laureates/politics/matvienko.jpg' },
      { name: 'Ван И', role: 'Китайский политический деятель', title: 'Министр иностранных дел КНР', image: '/images/laureates/politics/wan.jpg' },
      { name: 'Соловьёв Владимир Рудольфович', role: 'Российский журналист. радио и телеведущий', title: '', image: '/images/laureates/politics/solov.jpeg' },
      { name: 'Такер Карлсон', role: 'Американский журналист', title: 'Политический обозреватель', image: '/images/laureates/politics/tucker.jpg' },
      { name: 'Эдвард Сноуден', role: 'Американский IT-специалист', title: 'Сотрудник ЦРУ и АНБ США', image: '/images/laureates/politics/snowden.jpg' },
      { name: 'Джулиан Пол Ассанж', role: 'Австралийский интернет-журналист', title: 'Телеведущий, основатель WikiLeaks', image: '/images/laureates/politics/assange.jpg' },
      { name: 'Лавров Сергей Викторович', role: 'Советский и Российский государственный деятель, дипломат', title: 'Министр иностранных дел России', image: '/images/laureates/politics/lavrov.jpg' }
    ]
  },
  Collective: {
    title: 'Творческий коллектив',
    description: 'Номинацию космонавтика определяет лауреата премии Спутник Мира как действующего или бывшего космонавта, работника космической отрасли или относящихся к ней, за оперативные действия в условиях космоса, уникальные технические решения, открытия во благо человека и общества.',
    laureates: [
      { name: 'Академический дважды Краснознамённый, ордена Красной Звезды ансамбль песни и пляски Российской Армии имени А. В. Александрова', role: '', title: '', image: '/images/laureates/collective/ensemble.jpg' },
      { name: 'Кубанский казачий хор', role: 'Государственный академический орденов Дружбы народов и святого благоверного великого князя Димитрия Донского 1-й степени Кубанский казачий хор', title: 'Хоровой певческий коллектив, основанный в 1811 г.', image: '/images/laureates/collective/kuban.jpg' },
      { name: 'Студия имени М.Б. Грекова', role: 'Единственное в мире творческое объединение военных художников', title: '', image: '/images/laureates/collective/grekova.jpg' }
    ]
  },
  Economy: {
    title: 'Мировая экономика и безопасность',
    description: 'Номинация Мировая экономика и безопасность это единственная номинация определяет только государственного руководителя за выдающиеся достижения в области международной безопасности и международной экономики.',
    laureates: [
      { name: 'Путин Владимир Владимирович', role: 'Российский государственный и политический деятель', title: 'Президент России', image: '/images/laureates/economy/putin.jpg' },
      { name: 'Сааведра Даниэль Ортега', role: 'Революционер, государственный и политический деятель', title: 'Президент Никарагуа', image: '/images/laureates/economy/ortega.jpg' },
      { name: 'Си Цзиньпин', role: 'Китайский государственный политический и партийный деятель', title: 'Генеральный Секретарь ЦК Коммунистической партии Китая', image: '/images/laureates/economy/xi.jpg' }
    ]
  },
  Education: {
    title: 'Просветительная организация',
    description: 'Номинацию космонавтика определяет лауреата премии Спутник Мира как действующего или бывшего космонавта, работника космической отрасли или относящихся к ней, за оперативные действия в условиях космоса, уникальные технические решения, открытия во благо человека и общества.',
    laureates: [
      { name: 'Российское общество «Знание»', role: 'Общественно-государственная просветительная организация', title: '', image: '/images/laureates/education/znanie.jpg' }
    ]
  },
  Institution: {
    title: 'Образовательное учреждение',
    description: '',
    laureates: [
      { name: 'Московский государственный университет имени М. В. Ломоносова', role: 'Старейший и крупнейший классический университет России, один из центров российской науки и культуры', title: '', image: '/images/laureates/institution/mgulomo.jpg' },
      { name: 'Санкт-Петербургский горный университет императрицы Екатерины II', role: 'Один из крупнейших вузов по горному делу и первое высшее техническое учебное заведение России', title: '', image: '/images/laureates/institution/ekaterini.jpg' },
      { name: 'Московский государственный технический университет имени Н. Э. Баумана (МГТУ)', role: 'Российский национальный исследовательский университет, научный центр с 1830г', title: '', image: '/images/laureates/institution/bauman.jpg' },
      { name: 'Средняя общеобразовательная школа № 15 им. героя Советского Союза  М. М. Сурмача', role: 'Муниципальное бюджетное общеобразовательное учреждение городского округа город Дербент, Республика Дагестан', title: '', image: '/images/laureates/institution/n15.jpg' },
      { name: 'Морской государственный университет имени адмирала Г. И. Невельского', role: 'Первый в России Морской государственный университет, один из ведущих вузов в Азиатско-Тихоокеанском регионе, авторитетный научно-методический центр морского образования', title: '', image: '/images/laureates/institution/nevelskogo.jpg' },
      { name: 'Казанский университет', role: 'Один из старейших российских университетов (основан в 1804 году)', title: '', image: '/images/laureates/institution/kazan.jpg' }
    ]
  },
  Heritage: {
    title: 'Всемирное историческое наследие',
    description: 'Событие в формате праздника для общества одной или более стран.',
    laureates: [
      { name: 'Пасха (Светлое Христово Воскресение)', role: 'Самый почитаемый и радостный праздник церковного календаря', title: '', image: '/images/laureates/heritage/pasha.jpg' },
      { name: 'Китайский Новый год (Праздник весны)', role: 'Главный и самый продолжительный праздник в Китае и в других странах Восточной Азии', title: '', image: '/images/laureates/heritage/lunar.jpg' },
      { name: '80-летие Победы в Великой Отечественной войне', role: 'Символизирует триумф советского народа над фашизмом в 1941–1945 годах', title: '', image: '/images/laureates/heritage/pobeda.jpg' }
    ]
  },
  International: {
    title: 'Международная организация',
    description: 'Номинация международная организация определяет союз или обьединение  более 3 государств цели и задачи которых определяют сотрудничество во благо человека и общества, сохраняя идентичность, культуру, самобытность, традиции и обьективность исторической летописи.',
    laureates: [
      { name: 'БРИКС', role: '', title: '', image: '/images/laureates/international/brics.jpg' }
    ]
  },
  Corporation: {
    title: 'Корпорация',
    description: 'Номинация корпорация определяет предприятие как образцового организатора в области труда и социальной  заботой о работниках, с выпускаемой продукцией высокого качества как на внутренний так и на внешние рынки.',
    laureates: [
      { name: 'ПАО «Газпром»', role: '', title: '', image: '/images/laureates/corporation/gaz.jpg' },
      { name: 'ОАО «РЖД»', role: '', title: '', image: '/images/laureates/corporation/rzd.jpg' },
      { name: 'Банк «ВТБ»', role: '', title: '', image: '/images/laureates/corporation/vtb.jpg' },
      { name: 'Курчатовский институт', role: '', title: '', image: '/images/laureates/corporation/kurchat.jpg' },
      { name: 'Аэрофлот', role: '', title: '', image: '/images/laureates/corporation/aero.png' },
      { name: 'Ростех', role: '', title: '', image: '/images/laureates/corporation/rosteh.jpeg' },
      { name: 'Росатом', role: '', title: '', image: '/images/laureates/corporation/rosatom.jpg' },
      { name: 'ТАСС', role: '', title: '', image: '/images/laureates/corporation/tass.png' },
      { name: 'Мосфильм', role: '', title: '', image: '/images/laureates/corporation/mosfilm.png' },
      { name: 'Кубачи', role: '', title: '', image: '/images/laureates/corporation/kubachi.png' },
      { name: 'РГК Роскосмос', role: '', title: '', image: '/images/laureates/corporation/roscosmos.jpg' }
    ]
  }
};

export const getCategoryData = (category: string): NominationData | null => {
  return categoryData[category] || null;
};