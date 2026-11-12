export const NB = ' '
export const HOURS = `08:00–23:00`
export const PRICE = `від${NB}1600${NB}грн`
export const ADDRESS = 'Київ, ВДНГ, проспект Академіка Глушкова, 1'
export const ADDRESS_SHORT = `пр.${NB}Академіка${NB}Глушкова,${NB}1`
export const NOT_CONNECTED =
  'Онлайн-бронювання ще не підключене до сервера, тому заявку не надіслано. Зв’яжіться з адміністратором залу: 067 779 93 58.'
export const NOT_CONNECTED_CONTACT =
  'Форма зворотного зв’язку ще не підключена до сервера, тому повідомлення не надіслано. Зв’яжіться з адміністратором залу: 067 779 93 58.'

export const NAV = [
  { href: '#home', label: 'Головна' },
  { href: '#about', label: 'Про зал' },
  { href: '#rent', label: 'Оренда' },
  { href: '#training', label: 'Тренування' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contacts', label: 'Контакти' },
]

export interface Photo {
  src: string
  alt: string
  caption: string
  w: number
  h: number
}

export const PHOTOS: Record<string, Photo> = {
  court: { src: 'img/court.jpg', alt: 'Порожній баскетбольний майданчик із паркетом і синіми стінами', caption: 'Баскетбольний майданчик', w: 585, h: 425 },
  dunk: { src: 'img/dunk.jpg', alt: 'Баскетболіст виконує данк', caption: 'Данк', w: 740, h: 555 },
  match: { src: 'img/match.jpg', alt: 'Двоє гравців борються за м’яч', caption: 'Боротьба за м’яч', w: 640, h: 580 },
  team: { src: 'img/team.jpg', alt: 'Групове фото команд на майданчику', caption: 'Команди на майданчику', w: 590, h: 425 },
  game: { src: 'img/game.jpg', alt: 'Любительська гра в залі', caption: 'Любительська гра', w: 520, h: 265 },
  cafe: { src: 'img/cafe.jpg', alt: 'Барна стійка кафе в залі', caption: 'Кафе', w: 470, h: 400 },
  lounge: { src: 'img/lounge.jpg', alt: 'Зона відпочинку з диваном', caption: 'Зона відпочинку', w: 510, h: 410 },
  lockers: { src: 'img/lockers.jpg', alt: 'Лавки в роздягальні', caption: 'Роздягальня', w: 500, h: 318 },
}

export const GALLERY_ORDER = ['dunk', 'court', 'match', 'team', 'game', 'lockers', 'cafe', 'lounge'] as const

export const ABOUT_CARDS = [
  { icon: 'Trophy', title: 'Баскетбол', text: 'Основний напрям залу' },
  { icon: 'Layers', title: 'Нове покриття', text: 'Нове якісне покриття майданчика' },
  { icon: 'CircleDot', title: 'Баскетбольні конструкції', text: 'Зручні баскетбольні конструкції' },
  { icon: 'Volleyball', title: 'Інші види спорту', text: 'Волейбол, бадмінтон та інше — за попередньою домовленістю' },
] as const

export const FORMATS = [
  { id: 'training', title: 'Тренування', text: 'Індивідуальні та командні тренування.', icon: 'Dumbbell' },
  { id: 'game', title: 'Гра / матч', text: 'Ігри для друзів, команд і колективів.', icon: 'Swords' },
  { id: 'event', title: 'Спортивна подія', text: 'Змагання, турніри — за попереднім погодженням.', icon: 'Medal' },
] as const

export const TRAINING = [
  { photo: 'game', title: 'Баскетбол', text: 'Зал створений передусім для баскетболу: нове якісне покриття та зручні баскетбольні конструкції для індивідуальних тренувань та ігор.' },
  { photo: 'team', title: 'Командні тренування', text: 'Підходить для командних тренувань. Волейбол, бадмінтон та інші активності — за попередньою домовленістю.' },
  { photo: 'match', title: 'Спортивні події', text: 'Ігри та спортивні події різного рівня — за попереднім погодженням.' },
] as const

export const INFRA = [
  { icon: 'Shirt', title: 'Роздягальні', text: 'Зручні роздягальні для гравців' },
  { icon: 'ShowerHead', title: 'Душові', text: 'Душові після тренування' },
  { icon: 'Coffee', title: 'Кафе', text: 'Зона кафе в залі' },
  { icon: 'Wifi', title: 'Wi-Fi', text: 'Безкоштовний' },
  { icon: 'Zap', title: 'Генератор', text: 'Безперебійне живлення' },
  { icon: 'Dumbbell', title: 'Спортивне обладнання', text: 'Баскетбольні конструкції, нове покриття' },
] as const

export const INFRA_PHOTOS = ['lockers', 'cafe', 'lounge'] as const
export const INFRA_PHOTO_LABELS: Record<string, string> = { lockers: 'Роздягальня', cafe: 'Кафе', lounge: 'Зона відпочинку' }

export const START_TIMES = Array.from({ length: 15 }, (_, i) => `${String(i + 8).padStart(2, '0')}:00`)
