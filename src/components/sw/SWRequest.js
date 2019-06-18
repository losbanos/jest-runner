import axios from 'axios';
import { BASE_URL } from '@/components/common/constants';

const { log } = console;
export const getFilmName = title => {
    const url = `${BASE_URL.SW}films/`;
    return axios.get(url, {
        params: {
            format: 'json',
            title
        }
    });
};
export class SWRequest {
    constructor() {

    }
    init() {

    }
}
