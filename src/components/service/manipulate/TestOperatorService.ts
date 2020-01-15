import {injectable} from 'inversify';
import {
    interval,
    of,
    fromEvent,
    Observer,
    Subject,
    Observable,
    Subscriber,
    Subscription,
    MonoTypeOperatorFunction, OperatorFunction, Operator
} from 'rxjs';
import {take, find} from 'rxjs/operators';
import {takeUntil, tap, map, takeLast, takeWhile, filter, skip, skipUntil, skipWhile} from 'rxjs/internal/operators';
import {ValidateFileType} from '@/components/service/model/ValidateFileType';
import {TeardownLogic} from 'rxjs/src/internal/types';
import {ArgumentOutOfRangeError} from 'rxjs/src/internal/util/ArgumentOutOfRangeError';

interface ValidFileType{
    isValid?: boolean;
    file?: File;
    fileList?: FileList
}
interface ValidateRule {

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

    public validateImage<T>(rule: {maxSize: number, types: Array<string>}): MonoTypeOperatorFunction<T> {
        return (source: Observable<T>) => {
            return new Observable<any>((observer: Subscriber<any>) => {
                return source.pipe(
                    this.validateType(rule.types),
                    this.validateSize(rule.maxSize),
                ).subscribe(
                    (result: T) => {
                        observer.next(result);
                    },
                    (err: any) => {
                        console.log('에러야');
                        observer.error(err)
                    },
                    () => {
                        console.log('ValidateImage is Complete');
                    }
                );
            })
        }
    }

    public validateSize<T>(maxSize: number): MonoTypeOperatorFunction<T> {
        return (source: Observable<T>) => {
            return new Observable<T>((observer: Subscriber<T>) => {
                return source.pipe(take(1)).subscribe(
                    (fileList: T) => {
                        if ((fileList as any).item(0).size < maxSize) {
                            observer.next(fileList)
                        } else {
                            observer.error(new Error('File Size is Exceed'))
                        }
                    },
                    (err: any) => {
                        observer.error(err);
                    },
                    () => {
                        console.log('Validate Size Complete');
                        observer.complete()
                    }
                )
            });
        }
    }

    public validateType<T>(rules: Array<string>): MonoTypeOperatorFunction<T> {
        return (source: Observable<T>) => {
            return new Observable((observer: Subscriber<T>) => {
                return source.pipe(take(1)).subscribe(
                    (fileList: T) => {
                        const fileType: string = (fileList as any)[0].type;
                        if (rules.includes(fileType)) {
                            observer.next(fileList)
                        } else {
                            observer.error(new Error('JPG, PNG, GIF 만 지원한다.'));
                        }
                    },
                    (err: any) => observer.error(err),
                    () => {
                        console.log('ValidateType complete');
                        observer.complete()
                    }
                );
            })
        }
    }
}
// class TakeOperator<T> implements Operator<T, T> {
//     constructor(private total: number) {
//         if (this.total < 0) {
//             throw new ArgumentOutOfRangeError;
//         }
//     }
//
//     call(subscriber: Subscriber<T>, source: any): TeardownLogic {
//         return source.subscribe(new TakeSubscriber(subscriber, this.total));
//     }
// }
