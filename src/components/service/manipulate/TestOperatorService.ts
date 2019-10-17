import {injectable} from 'inversify';
import {interval, Observer, Subject, Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';

@injectable()
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
    public start() {
        const {log, error} = console;
        const inter$: Observable<number> = interval(1000).pipe(take(5), tap((n => log(`tap ${n}`))));
        const subject: Subject<number> = new Subject<number>();

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
        }
        const createHotObserable = (sourceObservable: Observable<any>, subject: Subject<any>) => {
            return {
                connect: () => sourceObservable.subscribe(subject),
                subscribe: subject.subscribe.bind(subject)
            }
        };

        const hotObservable: any = createHotObserable(inter$, subject);
        hotObservable.subscribe(observerA);
        log('observerA subscribe');
        hotObservable.subscribe(observerB);
        log('observerB subscribe');

        hotObservable.connect();
        console.log('hotObservable connect');
        setTimeout(() => {
            hotObservable.subscribe(observerC);
            log('observerC subscribe');
        }, 2000)
    }
}