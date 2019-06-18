import axios from 'axios';
import { BASE_URL } from '@/components/common/constants';

const { log } = console;
export const getFileName = title => {
    const url = `${BASE_URL.SW}`;
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: {
                format: 'json',
                title
            }
        }).then(res => {
            resolve(res.data);
        }).catch(e => reject(e));
    });
};
export class SWRequest {
    constructor() {

    }
    init() {

    }
}
