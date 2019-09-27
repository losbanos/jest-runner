import {interval, Observer, Subject} from "rxjs/index";
import {take} from "rxjs/operators";

export class TestOperatorService {
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
        const observerC: Observer<any> = {
            next: x => log(`Observer C ${x}`),
            error: e => error(`Observer C ${e}`),
            complete: () => log('Observer C Complete')
        };

        intervalSubject.subscribe(observerA);
        intervalSubject.subscribe(observerB);
    }
}