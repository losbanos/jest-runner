import {injectable} from 'inversify';
import {fromEvent, Observable, Subject, range, Observer, interval, of, partition} from 'rxjs';
import {map, pluck, filter, take, mergeMap, tap, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {BASE_URL} from '@/components/common/constants';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';

@injectable()
export class AutoCompleteService {
    private loadingBarSubject: Subject<boolean> = new Subject();
    private resetSubject: Subject<Array<any>> = new Subject<Array<any>>();

    constructor() {
        // this.showLoadingBar();
        console.log('init');
    }
    public getPeople(input: HTMLElement): Observable<any> {
        const {log, error} = console;

        const keyup$: Observable<string> = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
            debounceTime(1000),
            map((e: KeyboardEvent) => e.target.value),
            distinctUntilChanged()
        );

        let [user$, reset$] = partition(keyup$, (keyword: string) => keyword.trim().length > 0);

        user$ = user$.pipe(
            tap(() => this.loadingBarSubject.next(true)),
            mergeMap((keyword: string) => ajax.getJSON(`${BASE_URL.SW}people/?search=${keyword}&format=json`)),
            tap(() => this.loadingBarSubject.next(false)),
            pluck('results')
        );
        reset$.pipe(
            tap(() => {
                this.resetSubject.next([]);
            })
        ).subscribe();

        return user$;
    }
    public get loadingBar$(): Observable<boolean> {
        return this.loadingBarSubject.asObservable();
    }
    public get resetStaus$(): Observable<any> {
        return this.resetSubject.asObservable();
    }

}
