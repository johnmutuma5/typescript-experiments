export class Observable<T> {
  _subscribe: any;

  constructor(subscribe: any) {
    if(!!subscribe)
      this._subscribe = subscribe;
  }

  subscribe(onNext: any, onError: any, onComplete: any) {
    if(typeof onNext === 'function')
      return this._subscribe({
        onNext,
        onError: onError || (() => {}),
        onComplete: onComplete || (() => {}),
      });
    else
      return this._subscribe(onNext); // if it's a subscriber object
  }
}
