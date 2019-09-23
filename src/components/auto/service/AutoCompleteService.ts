import {injectable} from 'inversify';
import {fromEvent, Observable, from} from 'rxjs';
import {map, pluck, filter, mergeAll, mergeMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {BASE_URL} from '@/components/common/constants';
import {StarWarsPeople} from '@/components/auto/model/StarWarsResponse';

@injectable()
export class AutoCompleteService {
    constructor() {

    }
    getPeople(input: HTMLElement): Observable<StarWarsPeople> {
        const people$: Observable<StarWarsPeople> = fromEvent<KeyboardEvent>(input, 'keyup')
            .pipe(
                debounceTime(1000),
                map((e: KeyboardEvent) => e.target.value),
                distinctUntilChanged(),
                filter((keyword: string) => keyword.trim().length > 0),
                mergeMap((keyword: string) => ajax.getJSON(`${BASE_URL.SW}people/?search=${keyword}&format=json`)
                ),
                pluck('results')
            );
        return people$;
    }
}
