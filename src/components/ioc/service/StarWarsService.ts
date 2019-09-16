import {injectable} from 'inversify';

@injectable()
export default class StarWarsService {
    private baseUrl: string = 'https://swapi.co/api/';

    constructor() {

    }
    getPeopleData() {
        fetch(`${this.baseUrl}people/?format=json`)
            .then((res: any) => {
                if(res.status === 200) {
                    return res.json();
                }
                else {
                    throw new Error('Error');
                }
            })
            .then((jsonData: any) => {
                document.querySelector('#users').innerHTML = this.getParsedJsonData(jsonData);
            })
    }
    getParsedJsonData(jsonData: Object): string {
        const htmls: Array<string> = [];
        for (const user of jsonData.results) {
            if (/male|female/.test(user.gender)) {
                let broca: string;
                let bmi: string;
                if (user.gender === 'male') {
                    broca = (user.height - 100 * 0.9).toFixed(2);
                    bmi = (user.height / 100 * user.height / 100 * 22).toFixed(2);
                } else {
                    broca = (user.height - 100 * 0.9).toFixed(2);
                    bmi = (user.height / 100 * user.height /100 * 21).toFixed(2);
                }
                const obesityUsingBroca: string = ((user.mass - Number(broca)) / Number(broca) * 100).toFixed(2);
                const obesityUsingBmi: string = ((user.mass - Number(bmi)) / Number(bmi) * 100).toFixed(2);
                htmls.push(
                    `<li class='card'>
                        <dl>
                            <dt>${user.name}</dt>
                            <dd><storng>키:</storng>${user.height} cm</dd>
                            <dd><strong>몸무게: </strong>${user.mass} kg</dd>
                            <dd><strong>BROCA 표준체중: </strong>${broca}</dd>
                            <dd><strong>BROCA 비만도: </strong>${obesityUsingBroca}</dd>
                            <dd><strong>BMI 표준체중: </strong>${bmi}</dd>
                            <dd><strong>BMI 비만도: </strong>${obesityUsingBmi}</dd></dl></li>`);
            };
        }
        return htmls.join('');
    }
}