import axios from 'axios';
import { BASE_URL, SW_CATEGORY } from '../common/constants';
import { getCategory } from '@/components/sw/SWConnector';

export const CallStarWars = function (keyword) {
    const category = getCategory();
    const url = `${BASE_URL.SW}${SW_CATEGORY[category]}/`;
    console.log(url);
    console.log('keyword = ', keyword);
    return axios.get(url, {
        params: {
            format: 'json',
            search: keyword
        }
    }).then(res => res.data).catch(e => console.log(e));
};
export const Users = function (name) {
    const str = `My Name is ${name}`;
    return function (companyName) {
        return `${str} and My Company is ${companyName}`;
    };
};

// export default class Users {
//     constructor(name) {
//         console.log('this is User Name = ', name);
//     }
//     init(message) {
//         console.log(`${message} is message call by init function `);
//     }
// };
