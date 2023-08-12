const categories = [
    {
        id: null,
        name: 'Any',
        icon: 'fa-solid fa-layer-group'
    },
    {
        id: 9,
        name: 'General',
        icon: 'fa-solid fa-book-open'
    },
    {
        id: 10,
        name: 'Books',
        icon: 'fa-solid fa-book'
    },
    {
        id: 11,
        name: 'Film',
        icon: 'fa-solid fa-clapperboard'
    },
    {
        id: 12,
        name: 'Music',
        icon: 'fa-solid fa-headphones'
    },
    {
        id: 13,
        name: 'Musicals',
        icon: 'fa-solid fa-masks-theater'
    },
    {
        id: 14,
        name: 'Television',
        icon: 'fa-solid fa-tv'
    },
    {
        id: 15,
        name: 'VideoGames',
        icon: 'fa-solid fa-gamepad'
    },
    {
        id: 16,
        name: 'BoardGames',
        icon: 'fa-solid fa-chess-board'
    },
    {
        id: 17,
        name: 'Science',
        icon: 'fa-solid fa-brain'
    },
    {
        id: 18,
        name: 'Computers',
        icon: 'fa-solid fa-computer'
    },
    {
        id: 19,
        name: 'Maths',
        icon: 'fa-solid fa-calculator'
    },
    {
        id: 20,
        name: 'Mythology',
        icon: 'fa-solid fa-landmark'
    },
    {
        id: 21,
        name: 'Sports',
        icon: 'fa-solid fa-basketball'
    },
    {
        id: 22,
        name: 'Geography',
        icon: 'fa-solid fa-earth-europe'
    },
    {
        id: 23,
        name: 'History',
        icon: 'fa-solid fa-clock-rotate-left'
    },
    {
        id: 24,
        name: 'Politics',
        icon: 'fa-solid fa-handshake'
    },
    {
        id: 25,
        name: 'Art',
        icon: 'fa-solid fa-palette'
    },
    {
        id: 26,
        name: 'Celebrities',
        icon: 'fa-solid fa-star'
    },
    {
        id: 27,
        name: 'Animals',
        icon: 'fa-solid fa-paw'
    },
    {
        id: 28,
        name: 'Vehicles',
        icon: 'fa-solid fa-car'
    },
    {
        id: 29,
        name: 'Comics',
        icon: 'fa-solid fa-book-open-reader'
    },
    {
        id: 30,
        name: 'Gadgets',
        icon: 'fa-solid fa-gears'
    },
    {
        id: 31,
        name: 'Anime/Manga',
        icon: 'fa-brands fa-superpowers'
    },
    {
        id: 32,
        name: 'Cartoon',
        icon: 'fa-solid fa-newspaper'
    }
];

const levels = [null, 'easy', 'medium', 'difficult'];

const type = ['multiple', 'boolean'];

let params = {
    category: null,
    difficulty: 'difficulty=easy',
    type: 'type=multiple',
    amount: 'amount=10'
}

let url = '';