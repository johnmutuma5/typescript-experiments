interface Observer<T> {
  onNext: (val: T) => any,
  onError?: (error: any) => any,
  onCompleted?: (val?: any) => any,
}

type OnNextOrObserver<T> = (val: T) => void | Observer<T>;

interface EventSource {
  addEventListener: (eventType: string, handler: (event: any) => void) => void,
  removeEventListener: (callbackFn: (event: any) => void) => void,
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
  private _subscribe: (obs: Observer<T>) => () => void;

  constructor(subscribe?: (obs: Observer<T>) => () => void) {
    if(!!subscribe)
      this._subscribe = subscribe;
    else
      this._subscribe = (obs: Observer<T>) => (() => {});
  }

  subscribe(onNext: OnNextOrObserver<T>, onError?: any, onComplete?: any): () => void {
    if(typeof onNext === 'function')
      return this._subscribe({
        onNext,
        onError: onError || (() => {}),
        onCompleted: onComplete || (() => {}),
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
  
  /**
   *                                                           
   *  d'b                      .oPYo.                       o  
   *  8                        8.                           8  
   * o8P  oPYo. .oPYo. ooYoYo. `boo   o    o .oPYo. odYo.  o8P 
   *  8   8  `' 8    8 8' 8  8 .P     Y.  .P 8oooo8 8' `8   8  
   *  8   8     8    8 8  8  8 8      `b..d' 8.     8   8   8  
   *  8   8     `YooP' 8  8  8 `YooP'  `YP'  `Yooo' 8   8   8  
   * :..::..:::::.....:..:..:..:.....:::...:::.....:..::..::..:
   * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   *
   */
  static fromEvent<U>(eventSource: EventSource, eventType: string) {
    return new Observable((obs: Observer<U>) => {

      const callbackFn = (event: any) => {
        try {
          obs.onNext(event);
        } catch(error) {
          obs.onError && obs.onError(error);
        }
        obs.onCompleted && obs.onCompleted();
      }
      eventSource.addEventListener(eventType, callbackFn);

      return () => eventSource.removeEventListener(callbackFn);
    }); 
  }

  /**
   *
   *                                                                    
   * .oPYo.  .oPYo. .oPYo.  .oPYo.      .oo ooooo .oPYo.  .oPYo. .oPYo. 
   * 8    8  8    8 8.      8   `8     .P 8   8   8    8  8   `8 8      
   * 8    8 o8YooP' `boo   o8YooP'    .P  8   8   8    8 o8YooP' `Yooo. 
   * 8    8  8      .P      8   `b   oPooo8   8   8    8  8   `b     `8 
   * 8    8  8      8       8    8  .P    8   8   8    8  8    8      8 
   * `YooP'  8      `YooP'  8    8 .P     8   8   `YooP'  8    8 `YooP' 
   * :.....::..::::::.....::..:::....:::::..::..:::.....::..:::..:.....:
   * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
   *
   */
  /**
   *                                                                             
   *                         .oPYo.                              o               
   *                         8    8                              8               
   * ooYoYo. .oPYo. .oPYo.   8    8 .oPYo. .oPYo. oPYo. .oPYo.  o8P .oPYo. oPYo. 
   * 8' 8  8 .oooo8 8    8   8    8 8    8 8oooo8 8  `' .oooo8   8  8    8 8  `' 
   * 8  8  8 8    8 8    8   8    8 8    8 8.     8     8    8   8  8    8 8     
   * 8  8  8 `YooP8 8YooP'   `YooP' 8YooP' `Yooo' 8     `YooP8   8  `YooP' 8     
   * ..:..:..:.....:8 ....::::.....:8 ....::.....:..:::::.....:::..::.....:..::::
   * :::::::::::::::8 ::::::::::::::8 :::::::::::::::::::::::::::::::::::::::::::
   * :::::::::::::::..::::::::::::::..:::::::::::::::::::::::::::::::::::::::::::
   */
  map<U>(projectionFn: (val: T) => U): Observable<U> {
    return new Observable<U>((obs: Observer<U>) => {
      return this.subscribe(
        (val: T) => obs.onNext(projectionFn(val)),
        (error: any) => obs.onError && obs.onError(error),
        () => obs.onCompleted && obs.onCompleted(),
      );
    });
  }

  /**
   *
   *                                                                                   
   *  d'b  o 8   o                 .oPYo.                              o               
   *  8      8   8                 8    8                              8               
   * o8P  o8 8  o8P .oPYo. oPYo.   8    8 .oPYo. .oPYo. oPYo. .oPYo.  o8P .oPYo. oPYo. 
   *  8    8 8   8  8oooo8 8  `'   8    8 8    8 8oooo8 8  `' .oooo8   8  8    8 8  `' 
   *  8    8 8   8  8.     8       8    8 8    8 8.     8     8    8   8  8    8 8     
   *  8    8 8   8  `Yooo' 8       `YooP' 8YooP' `Yooo' 8     `YooP8   8  `YooP' 8     
   * :..:::....::..::.....:..:::::::.....:8 ....::.....:..:::::.....:::..::.....:..::::
   * :::::::::::::::::::::::::::::::::::::8 :::::::::::::::::::::::::::::::::::::::::::
   * :::::::::::::::::::::::::::::::::::::..:::::::::::::::::::::::::::::::::::::::::::
   *
   */
  filter(predicateFn: (val: T) => boolean): Observable<T> {
    return new Observable<T>((obs: Observer<T>) => {
      return  this.subscribe(
        (val: T) => { if(!!predicateFn(val)) obs.onNext(val); },
        (error: any) => obs.onError && obs.onError(error),
        () => obs.onCompleted && obs.onCompleted(),
      );
    });
  }

  /**
   *
   *                                                                                 
   *   o         8               .oPYo.                              o               
   *   8         8               8    8                              8               
   *  o8P .oPYo. 8  .o  .oPYo.   8    8 .oPYo. .oPYo. oPYo. .oPYo.  o8P .oPYo. oPYo. 
   *   8  .oooo8 8oP'   8oooo8   8    8 8    8 8oooo8 8  `' .oooo8   8  8    8 8  `' 
   *   8  8    8 8 `b.  8.       8    8 8    8 8.     8     8    8   8  8    8 8     
   *   8  `YooP8 8  `o. `Yooo'   `YooP' 8YooP' `Yooo' 8     `YooP8   8  `YooP' 8     
   * ::..::.....:..::...:.....::::.....:8 ....::.....:..:::::.....:::..::.....:..::::
   * :::::::::::::::::::::::::::::::::::8 :::::::::::::::::::::::::::::::::::::::::::
   * :::::::::::::::::::::::::::::::::::..:::::::::::::::::::::::::::::::::::::::::::
   *
   */
  take(countItems: number): Observable<T> {
    return new Observable<T>((observer: Observer<T>) => {
      let currentCount = 0;
      const unsubscribe =  this.subscribe(
        (val: T) => {
          if(currentCount < countItems)
            observer.onNext(val);
          else {
            observer.onCompleted && observer.onCompleted();
            observer = { onNext: () => {}, onError: () => {}, onCompleted: () => {}, }
          }
          ++currentCount;
        },
        (error: any) => observer.onError && observer.onError(error),
        () => observer.onCompleted && observer.onCompleted(),
      ); 

      return unsubscribe;
    });
  }

  /**
   *
   *                                                                                                                    
   *                   o   o         8      o     o                 .oPYo.                              o               
   *                       8         8      8b   d8                 8    8                              8               
   * .oPYo. o   o   o o8  o8P .oPYo. 8oPYo. 8`b d'8 .oPYo. .oPYo.   8    8 .oPYo. .oPYo. oPYo. .oPYo.  o8P .oPYo. oPYo. 
   * Yb..   Y. .P. .P  8   8  8    ' 8    8 8 `o' 8 .oooo8 8    8   8    8 8    8 8oooo8 8  `' .oooo8   8  8    8 8  `' 
   *   'Yb. `b.d'b.d'  8   8  8    . 8    8 8     8 8    8 8    8   8    8 8    8 8.     8     8    8   8  8    8 8     
   * `YooP'  `Y' `Y'   8   8  `YooP' 8    8 8     8 `YooP8 8YooP'   `YooP' 8YooP' `Yooo' 8     `YooP8   8  `YooP' 8     
   * :.....:::..::..:::..::..::.....:..:::....::::..:.....:8 ....::::.....:8 ....::.....:..:::::.....:::..::.....:..::::
   * ::::::::::::::::::::::::::::::::::::::::::::::::::::::8 ::::::::::::::8 :::::::::::::::::::::::::::::::::::::::::::
   * ::::::::::::::::::::::::::::::::::::::::::::::::::::::..::::::::::::::..:::::::::::::::::::::::::::::::::::::::::::
   *
   */
  switchMap<U>(switchFun: (val: T) => Observable<U>) {
    return new Observable<U>((observer: Observer<U>) => {
      let unsubscribePreviousInnerObserver = () => {};
      return this.subscribe(
        (outerVal) => {
          unsubscribePreviousInnerObserver();
          const innerObs$ = switchFun(outerVal);
          unsubscribePreviousInnerObserver = innerObs$.subscribe(
            (innerVal) => observer.onNext(innerVal),
            (error: any) => observer.onError && observer.onError(error),
            () => observer.onCompleted && observer.onCompleted(),
          );
        }
      );
    });
  }
}
