export const LAYOUT_TYPES = {
    DEFAULT: 1,
    MAIN: 2
};
export const EVENT_TYPES = {
    MOUSE_DOWN: 'mouse-down',
    MOUSE_MOVE: 'mouse-move'
};

export const BASE_URL = {
    HACKERS_NEWS: '//hn.algolia.com/api/v1/search_by_date/',
    SW: 'https://swapi.co/api/',
    POKE: 'https://pokeapi.co/api/v2/pokemon/'
};

export const currentLanguage = function () {
    return 'EN';
};
export const SW_CATEGORY = {
    FILMS: '/films',
    PEOPLE: '/people',
    PLANTS: '/planets',
    SPECIES: '/species',
    STARSHIPS: '/starships',
    VEHICLES: '/vehicles'
};
export const DEFAULT_LOCALE = 'EN';
export const LANGUAGES = {
    EN: 'English',
    CN: 'China',
    KR: 'Korean',
    PH: 'Philippin',
    GE: 'German',
    US: 'America',
    FR: 'France'
};

export const products = [
    {is_selected: true, name: '반팔티', price: 15000, quantity: 1},
    {is_selected: false, name: '긴팔티', price: 24000, quantity: 2},
    {is_selected: false, name: 'T셔츠', price: 30000, quantity: 3},
    {is_selected: true, name: '반바지', price: 17000, quantity: 4},
    {is_selected: false, name: '핸드폰케이스', price: 25000, quantity: 5}
];
