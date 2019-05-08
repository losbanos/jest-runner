import axios from 'axios';
import { BASE_URL, DEFAULT_LOCALE } from '@/components/common/constants';
import { LANGUAGES } from '@/components/common/constants-mini';

// export class SWConnector {
//     constructor() {
//         this.super();
//     }
//     getFilm(title) {
//         const url = `${BASE_URL.SW}/films/`;
//         return axios.get(url, {
//             params: {
//                 search: title,
//                 format: 'json'
//             }
//         }).then(res => res.data);
//     }
// }
export const getCategory = function () {
    const lang = LANGUAGES[DEFAULT_LOCALE];
    return lang;
};
export const getLanguages = function () {
    return LANGUAGES;
};
