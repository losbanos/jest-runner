import {injectable} from 'inversify';
import {Observable, from, fromEvent, Subscription, Observer, of, range, empty, NEVER, never, EMPTY} from 'rxjs';
import {pluck, filter, first, map} from 'rxjs/operators';
import {UserResponse} from '@/components/ioc/response/UserResponse';
import {UserInfo} from '@/components/ioc/interface/UserInfo';

@injectable()
export default class RxjsService {
    public isClicked: boolean = true;
    public click$!: Observable<EventTarget>;
    constructor() {
        // tslint:disable:no-useless-constructor;
    }
    public setClicked(): Observable<EventTarget> | any {
        this.click$ = fromEvent<EventTarget>(document, 'click').pipe(
            first(),
            pluck('target'),
        );

        const subscription: Subscription = this.click$.subscribe(v => {
            console.log(v);
            subscription.unsubscribe();
        });
    }
    public setClickValue(): void {
        this.isClicked = false;
    }
    public secondExec(): void {
        const $user$: Observable<UserInfo> = from(UserResponse)
            .pipe(
                filter((user: UserInfo) => user.nationality === '촉')
            );
        // $user$.subscribe(
        //     (user: UserInfo) => console.log(user),
        //     (e: ErrorEvent) => console.log(e),
        //     () => console.log('complete')
        // );

        const numbers$: Observable<number> = new Observable<number>(function (observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.complete();
            }
            catch(e) {
                observer.error(e);
            }

        });
        // numbers$.subscribe(
        //     (v: number) => console.log(v),
        //     (e: any) => console.log(e),
        //     () => console.log('complete')
        // )

        const interval$: Observable<string> = new Observable<string>(function(observer: Observer<string>) {
            const interv:number = setInterval(() => {
                observer.next(new Date().toString());
            }, 1000);
            console.log('inter type = ', typeof interv);
            return function () {
                console.log('interval 제거');
                clearInterval(interv);
            }
        });
        // const subscription:Subscription = interval$.subscribe(
        //     v => console.log(v)
        // );
        // setTimeout(() => {
        //     subscription.unsubscribe()
        // }, 4000);

        const observerAll: Observer<any> = {
            next: (v: any): void => { console.log(v);},
            error: (e: any): void => { console.log(e);},
            complete: (): void => { console.log('-----complete-----')}
        };
        const of$:Observable<number> = of<number>(10, 20 ,30);
        // of$.subscribe(
        //     (v: number) => console.log(v),
        //     (e: any) => console.log(e),
        //     () => console.log('complete')
        // );
        const range$: Observable<number> = range(9, 10);
        // range$.subscribe(observerAll);
        console.log('----------empty -----------');
        const empty$:Observable<number | any> = of<number>(1, -1, 400)
            .pipe(
                map((n: number) => n < 0? never(): n)
            );
        // empty$.subscribe(
        //     observerAll
        // )
        const prom: Promise<number> = new Promise((resolve, reject) => {
            console.log('Create promise');
            try{
                let v: number = 0;
                setInterval(() => {
                    console.log(`is going ${v}`);
                    v++;
                    resolve(v);
                }, 1000)
            }
            catch(e) {
                reject(`error promise ${e}`);
            }
        });
        // setTimeout(()=> {
        //     console.log('add THEN');
        //     prom.then(
        //         v => console.log(`첫번째 primise is ${v}`),
        //         e => console.log(`두번째 error is ${e}`)
        //     );
        // }, 4000);
        // setTimeout(() => {
        //     prom.then(
        //         v => console.log(`두번째 primise is ${v}`),
        //         e => console.log(`두번째 error is ${e}`)
        //     );
        // }, 8000);

        const prom$: Observable<number> = new Observable(function(observer: Observer<number>) {
            console.log('create observable');
            let v: number = 0;
            const inter$: number = setInterval(() => {
                observer.next(v++);
            }, 1000);
            return function () {
                clearInterval(inter$);
            }
        });
        const sub: Subscription = prom$.subscribe(
            v => console.log(`첫번째 observable is ${v}`),
            e => console.log(`첫번째 observable error is ${e}`)
        );
        // setTimeout(() => {
        //     sub.unsubscribe();
        // }, 2000);
        prom$.subscribe(
            v => console.log(`두번째 observable is ${v}`),
            e => console.log(`두번째 observable error is ${e}`)
        );
    }
}