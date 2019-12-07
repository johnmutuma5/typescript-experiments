interface Observer<T> {
  onNext: (val: T) => any,
  onError?: (error: any) => any,
  onCompleted?: (val?: any) => any,
}

export class Observable<T> {
  private _subscribe: any;

  constructor(subscribe?: (obs: Observer<T>) => any) {
    if(!!subscribe)
      this._subscribe = subscribe;
  }

  subscribe(onNext: any, onError?: any, onComplete?: any) {
    if(typeof onNext === 'function')
      return this._subscribe({
        onNext,
        onError: onError || (() => {}),
        onComplete: onComplete || (() => {}),
      });
    else
      return this._subscribe(onNext); // if it's a subscriber object
  }

  static of<U>(...args: U[]): Observable<U> {
    return new Observable<U>((obs: Observer<U>) => {
      args.forEach((arg: U) => {
        try {
          obs.onNext(arg)
        } catch (err) {
          obs.onError && obs.onError(err);
        }
      });
      obs.onCompleted && obs.onCompleted();

      return () => obs = ({ // unsubscribe
        onNext: () => {},
        onError: () => {},
        onCompleted: () => {},
      });
    });
  }
}
