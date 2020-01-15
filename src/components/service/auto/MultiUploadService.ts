import {catchError, concatMap, filter, map, mergeMap, pluck, switchMap, tap, take} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {from, of, interval, Observable} from 'rxjs';
import {injectable} from 'inversify';

@injectable()
export class MultiUploadService {
    private interval$!: Observable<number>;
    private excepts:Array<string> = [];

    constructor(){
    }
    load() {
        const querys: Array<string> = ['Luke', 'R2-D2', 'Darth', 'Leia','Owen', 'Beru', 'R5-D4', 'Biggs', 'Obi'];
        interval(500).pipe(take(10),filter(v => v % 2 === 0)).subscribe(
            v => {
                this.excepts.push(querys[v]);
                console.log('excepts = ', this.excepts);
            }
        );

        // const luke$: Observable<any> =
        return ajax.getJSON(`https://swapi.co/api/?format=json`).pipe(
            switchMap((res:any) => of(res.people)),
            switchMap(baseUrl => {
                return from(querys).pipe(
                    map((query => {
                        // if (['Owen', 'Biggs', 'Luke'].includes(query)) {
                        //     return `http://lsajfdaoij.${query}feiofdl`;
                        // }
                        // else {
                        //     return `${baseUrl}?search=${query}`;
                        // }
                        return `${baseUrl}?search=${query}`;
                    })),
                    concatMap(url => {
                        return of(url).pipe(
                            tap(() => console.log(this.excepts.includes(url.split('=')[1]))),
                            filter(() => this.excepts.includes(url.split('=')[1])),
                            mergeMap(() => ajax.getJSON(url)),
                            catchError(err => of(err.message)))
                    }),
                    pluck('results'),

                )
            }))
        //     .subscribe(
        //     v => console.log(v),
        //     err => console.error(err)
        // )
    }
}