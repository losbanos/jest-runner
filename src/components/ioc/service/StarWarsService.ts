import {injectable} from 'inversify';

interface User {
    height?: number;
    mass?: number;
    broca: number;
    bmi: number;
    obesityUsingBorca: number;
    obesityUsingBmi: number;
    gender?: string;
    name?: string;
}
interface StarWarsResponse {
    results: Array<object>;
}
@injectable()
export default class StarWarsService {
    private baseUrl: string = 'https://swapi.co/api/';
    public getPeopleData() {
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
                (document as any).querySelector('#users').innerHTML = this.getParsedJsonData(jsonData);
            })
    }
    private getParsedJsonData(jsonData: StarWarsResponse): string {
        const htmls: Array<string> = [];
        return jsonData.results
            .filter((user: any) => /male|female/.test(user.gender))
            .map((user: any) => Object.assign(user, this.calc(user.height, user.mass, user.gender)))
            .reduce((acc: Array<string>, u: User): Array<string> => {
                acc.push(this.makeHtml(u));
                return acc;
            }, []).join('');
    }
    private calc(height: number, mass: number, gender: string): User {
        let broca: number = (height - (gender === 'male' ? 100 : 105)) * 0.9;
        let bmi: number = height / 100 * height / 100 * (gender === 'male'? 22 : 21);
        if (gender === 'male') {
            broca = Number((height - 100 * 0.9).toFixed(2));
            bmi = Number((height / 100 * height / 100 * 22).toFixed(2));
        }
        else {
            broca = Number((height - 100 * 0.9).toFixed(2));
            bmi = Number((height / 100 * height /100 * 21).toFixed(2));
        }
        const obesityUsingBorca: number = Number(((mass - broca) / broca * 100).toFixed(2));
        const obesityUsingBmi: number = Number(((mass - bmi) / bmi * 100).toFixed(2));
        return {
            broca,
            bmi,
            obesityUsingBorca,
            obesityUsingBmi
        }
    }
    private makeHtml(user: User): string {
        return `<li class='card'>
                    <dl>
                        <dt>${user.name}</dt>
                        <dd><storng>키:</storng>${user.height} cm</dd>
                        <dd><strong>몸무게: </strong>${user.mass} kg</dd>
                        <dd><strong>BROCA 표준체중: </strong>${user.broca}</dd>
                        <dd><strong>BROCA 비만도: </strong>${user.obesityUsingBorca}</dd>
                        <dd><strong>BMI 표준체중: </strong>${user.bmi}</dd>
                        <dd><strong>BMI 비만도: </strong>${user.obesityUsingBmi}</dd>
                    </dl>
                </li>`;
    }
}