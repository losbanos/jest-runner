import {injectable} from 'inversify';
import {Observable, from, fromEvent} from 'rxjs';
import {pluck, filter} from 'rxjs/operators';
import {UserResponse} from '@/components/common/UserResponse';

@injectable()
export default class RxjsService {
    constructor() {

    }
    public setClicked(): void {
        const click$: Observable<HTMLElement> = fromEvent<HTMLElement>(document, 'click').pipe(
            pluck('target')
        );
        click$.subscribe(v => {
            console.log(v);
        });
    }
}