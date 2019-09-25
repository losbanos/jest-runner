import {injectable} from 'inversify';
import {fromEvent, Observable, from, Subject, range, concat, Observer, interval, of} from 'rxjs';
import {map, pluck, filter, take, mergeAll, mergeMap, tap, debounceTime, distinctUntilChanged, catchError, switchMap, concatMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {BASE_URL} from '@/components/common/constants';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';

@injectable()
export class AutoCompleteService {
    private loadingBarSubject: Subject<boolean> = new Subject();

    constructor() {
        // this.showLoadingBar();
        console.log('?? = ', this.loadingBarSubject);
    }
    public getPeople(input: HTMLElement): Observable<StarWarsPeople> {
        const {log, error} = console;

        const people$: Observable<StarWarsPeople> = fromEvent<KeyboardEvent>(input, 'keyup')
            .pipe(
                debounceTime(1000),
                map((e: KeyboardEvent) => e.target.value),
                distinctUntilChanged(),
                tap(() => this.loadingBarSubject.next(true)),
                filter((keyword: string) => keyword.trim().length > 0),
                mergeMap((keyword: string) => ajax.getJSON(`${BASE_URL.SW}people/?search=${keyword}&format=json`)),
                tap(() => this.loadingBarSubject.next(false)),
                pluck('results'),
            );
        return people$;
    }
    public get loadingBar$(): Observable<boolean> {
        return this.loadingBarSubject.asObservable();
    }
    public testSubject() {
        const {log, error} = console;
        const interval$ = interval(500).pipe(take(5));
        const intervalSubject: Subject<number> = new Subject<number>();

        const observerA: Observer<any> = {
            next: x => log(`Observer A ${x}`),
            error: e => error(`Observer A ${e}`),
            complete: () => log('Observer A Complete')
        }
        const observerB: Observer<any> = {
            next: x => log(`Observer B ${x}`),
            error: e => error(`Observer B ${e}`),
            complete: () => log('Observer B Complete')
        }
        // intervalSubject.subscribe(observerA);
        // interval$.subscribe(intervalSubject);
        // setTimeout(() => intervalSubject.subscribe(observerB), 2000);

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
            })
        ).subscribe(
            v => console.log(v),
            err => console.error(err)
        )

    }
}
