import axios from 'axios';
import { BASE_URL } from '@/components/common/constants';

export const getFilmName = title => {
    const url = `${BASE_URL.SW}films/`;
    return axios.get(url, {
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Credentials': 'true',
            // contentType: 'application/x-www-form-urlencoded'
        },
        params: {
            format: 'json',
            title
        }
    });
};
export const getPokemonInfo = name => {
    const url = `${BASE_URL.POKE}${name}/`;
    return axios.get(url);
};
export class SWRequest {
    constructor() {

    }
    init() {

    }
}
