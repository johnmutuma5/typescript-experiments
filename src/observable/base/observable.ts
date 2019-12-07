interface Observer<T> {
  onNext: (val: T) => any,
  onError?: (error: any) => any,
  onCompleted?: (val?: any) => any,
}

/**
 *                                                                                                 
 * .oPYo. 8                                        8      8          .oPYo. 8                      
 * 8    8 8                                        8      8          8    8 8                      
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.   8      8 .oPYo. .oPYo. .oPYo. 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8   8      8 .oooo8 Yb..   Yb..   
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.       8    8 8 8    8   'Yb.   'Yb. 
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo'   `YooP' 8 `YooP8 `YooP' `YooP' 
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....::::.....:..:.....::.....::.....:
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */
export class Observable<T> {
  private _subscribe: any;

  constructor(subscribe?: (obs: Observer<T>) => () => any) {
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

  /**
   * @description create an observable from arguments
   *
   */
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
        onNext      : () => {},
        onError     : () => {},
        onCompleted : () => {},
      });
    });
  }

  /**
   * @description create an observable from an iterable object eg array
   *
   */
  static from<U>(values: any): Observable<U> {
    return new Observable<U>((obs: Observer<U>) => {
      for(let val of values)
        try{
          obs.onNext(val);
        } catch(error) {
          obs.onError && obs.onError(error);
        }

      obs.onCompleted && obs.onCompleted();
      return () => { // unsubscribe
        obs = {
          onNext      : () => {},
          onError     : () => {},
          onCompleted : () => {},
        }
      };
    });
  }
}