import {injectable} from 'inversify';
import {interval, of, fromEvent, Observer, Subject, Observable, Subscriber, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {takeUntil, tap, map, takeLast, takeWhile, filter, skip, skipUntil, skipWhile} from 'rxjs/internal/operators';
import {ValidateFileType} from '@/components/service/model/ValidateFileType';

interface ValidFileType{
    isValid?: boolean;
    file?: File;
    fileList?: FileList
}
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
        const sourceIntervalTime: number = 300;
        const inter2$: Observable<number> = interval(sourceIntervalTime);

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
        // log('observerA subscribe');
        hotObservable.subscribe(observerB);
        // log('observerB subscribe');

        // hotObservable.connect();
        // console.log('hotObservable connect');
        // setTimeout(() => {
        //     hotObservable.subscribe(observerC);
        //     log('observerC subscribe');
        // }, 2000);

        // inter2$.pipe(
        //     skipWhile(n => n < 7),
        //     take(4)
        // ).subscribe(observerA)
    }

    public validateImage<T>(rule: ValidFileType) {
        return (source: Observable<T>) => {
            return new Observable((observer: Subscriber) => {
                const subscription: Subscription =
            })
        }
    }

    private validateSize(maxSize: number) {
        return <T extends File>(source: Observable<T>) => {
            return new Observable<string>(observer => {
                return source.subscribe(
                    (file: T) => {
                        let result: string = 'File size is Passed';
                        if (file.size > maxSize) {
                            result = 'File size is Exceed';
                        }
                        observer.next(result)
                    },
                    (err: any) => observer.error(err),
                    () => observer.complete()
                )
            })
        }
    }

    private validateType(rules: Array<string>) {
        return <T extends File>(source: Observable<T>) => {
            return source.pipe(
                filter((source: T) => rules.includes(source.type))
            )
        }
    }
}