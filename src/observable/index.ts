import { Observable } from "./base/observable";

const obs$: Observable<number> = Observable.of<number>(1, 2, 3, 4, 5, 6)
obs$.subscribe(console.log);
