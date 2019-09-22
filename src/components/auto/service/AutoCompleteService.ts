import {injectable} from 'inversify';
import {fromEvent, Observable, from} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {BASE_URL} from '@/components/common/constants';
import {StarWarsResponse} from '@/components/auto/model/StarWarsResponse';

@injectable()
export class AutoCompleteService {
    constructor() {

    }
    setTargetElement(input: HTMLElement): void {
        const keyup$: Observable<string> = fromEvent<KeyboardEvent>(input, 'keyup')
            .pipe(
                map((e: KeyboardEvent): string => e.target.value)
            );
        keyup$.subscribe(
            (v: string) => console.log(v)
        );

        const swUrl: string = BASE_URL.SW;
        const request$: Observable<StarWarsResponse> = from<StarWarsResponse>(fetch())
    }
}
