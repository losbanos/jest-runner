import axios from 'axios';
import {BASE_URL, currentLanguage, DEFAULT_LOCALE } from '@/components/common/constants';

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
// export const getCategory = function () {
//     return LANGUAGES[DEFAULT_LOCALE];
// };
// export const getCurrentLanguage = function () {
//     return LANGUAGES[currentLanguage()];
// };
