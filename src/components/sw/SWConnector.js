import axios from 'axios';
import { BASE_URL, SW_CATEGORY, DEFAULT_LOCALE } from '@/components/common/constants';

const LANGUAGES = {
    EN: 'English',
    CH: 'China',
    KO: 'Korea',
    PH: 'Philippin',
    GE: 'German',
    US: 'America',
    FR: 'France'
};
export class SWConnector {
    constructor() {
        this.super();
    }
    getFilm(title) {
        const url = `${BASE_URL.SW}/films/`;
        return axios.get(url, {
            params: {
                search: title,
                format: 'json'
            }
        }).then(res => res.data);
    }
}
export const getCategory = function () {
    return LANGUAGES[DEFAULT_LOCALE];
};
