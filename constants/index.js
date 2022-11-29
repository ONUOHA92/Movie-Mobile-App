import { movie1, movie2, frame3, movie4, movie5 } from '../constants/images'
import { PRIMARY_COLOR, BLACK } from '../constants/color'

export const slides = [
    {
        key: 'one',
        title: 'Welcome to search Movie app',
        text: 'Let start.\nSee something cool',
        image: movie4,
        backgroundColor: BLACK,
    },
    {
        key: 'two',
        title: 'The app is for list of Movies',
        text: 'Check the list of your favourite movies',
        image: movie5,
        backgroundColor: BLACK,
    },
    {
        key: 'three',
        title: 'Search your favourite',
        text: ' Check More fun for you Movies. you want to know ',
        image: frame3,
        backgroundColor: BLACK,
    }
];


export const API_KEYS = '0bca99e70230a6b62c245b6fb9b6e078';
export const API_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/'