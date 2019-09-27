import {catchError, concatMap, map, mergeMap, pluck, switchMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {from, of} from 'rxjs';
import {injectable} from 'inversify';

@injectable()
export class MultiUploadService {
    constructor(){
    }
    load() {
        const querys: Array<string> = ['Luke', 'R2-D2', 'Darth', 'Leia','Owen', 'Beru', 'R5-D4', 'Biggs', 'Obi'];
        // const luke$: Observable<any> =
        ajax.getJSON(`https://swapi.co/api/?format=json`).pipe(
            switchMap(res => of(res.people)),
            switchMap(baseUrl => {
                return from(querys).pipe(
                    map((query => {
                        if (['Owen', 'Biggs', 'Luke'].includes(query)) {
                            return `http://lsajfdaoij.${query}feiofdl`;
                        }
                        else {
                            return `${baseUrl}?search=${query}`;
                        }
                    })),
                    concatMap(url => {
                        return of(url).pipe(
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