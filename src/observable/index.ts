import { Observable } from './base/observable';
import { MockDocument } from './utils/mock-document';

console.log('\n\nCreating observables');
/**
 *                                                                                
 * .oPYo. 8                                        8      8                   d'b 
 * 8    8 8                                        8      8                   8   
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.    .oPYo. o8P  
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8    8    8  8   
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.        8    8  8   
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88 `YooP'  8   
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..::.....::..::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
const obs$: Observable<number> = Observable.of<number>(1, 2, 3, 4, 5, 6);
obs$.subscribe(console.log);


/**
 *                                                                                              
 * .oPYo. 8                                        8      8            d'b                      
 * 8    8 8                                        8      8            8                        
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.    o8P  oPYo. .oPYo. ooYoYo. 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8     8   8  `' 8    8 8' 8  8 
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.         8   8     8    8 8  8  8 
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88  8   8     `YooP' 8  8  8 
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..::..::..:::::.....:..:..:..
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */

const obsFrom$: Observable<string> = Observable.from(['Hello', 'dear', 'world', '!!']);
obsFrom$.subscribe(console.log);

/**
 *
 *                                                                                                                              
 * .oPYo. 8                                        8      8            d'b                      .oPYo.                       o  
 * 8    8 8                                        8      8            8                        8.                           8  
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.    o8P  oPYo. .oPYo. ooYoYo. `boo   o    o .oPYo. odYo.  o8P 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8     8   8  `' 8    8 8' 8  8 .P     Y.  .P 8oooo8 8' `8   8  
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.         8   8     8    8 8  8  8 8      `b..d' 8.     8   8   8  
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88  8   8     `YooP' 8  8  8 `YooP'  `YP'  `Yooo' 8   8   8  
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..::..::..:::::.....:..:..:..:.....:::...:::.....:..::..::..:
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 */
const document = new MockDocument();
const obsFromEvent$: Observable<any> =  Observable.fromEvent(document, 'click');
obsFromEvent$.subscribe((event: any) => console.log('1st subscriber for click event: ', event));
obsFromEvent$.subscribe((event: any) => console.log('2nd subscriber for click event: ', event));
console.log('Document will be clicked after a sec');
setTimeout(() => document.click(), 1000);
// click after 3secs
setTimeout(() => document.click(), 3000);
console.log('Document will be clicked again after 3sec');


/**
 *
 *                                                                                                                              
 * .oPYo. 8                                        8      8                                              o                      
 * 8    8 8                                        8      8                                              8                      
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.   .oPYo. .oPYo. .oPYo. oPYo. .oPYo.  o8P .oPYo. oPYo. .oPYo. 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8   8    8 8    8 8oooo8 8  `' .oooo8   8  8    8 8  `' Yb..   
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.       8    8 8    8 8.     8     8    8   8  8    8 8       'Yb. 
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo'   `YooP' 8YooP' `Yooo' 8     `YooP8   8  `YooP' 8     `YooP' 
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....::::.....:8 ....::.....:..:::::.....:::..::.....:..:::::.....:
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::8 ::::::::::::::::::::::::::::::::::::::::::::::::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */

/**
 *
 *                                                                                          
 * .oPYo. 8                                        8      8                                 
 * 8    8 8                                        8      8                                 
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.    ooYoYo. .oPYo. .oPYo. 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8    8' 8  8 .oooo8 8    8 
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.        8  8  8 8    8 8    8 
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88 8  8  8 `YooP8 8YooP' 
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..:..:..:..:.....:8 ....:
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::8 :::::
 * ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::..:::::
 *
 */

console.log('\n\nOperators');
console.log('Observable.map')
const ofNumMapToStringObs$: Observable<string> = Observable.of<number>(1, 2, 3, 4, 5)
  .map<string>((val: number) => `mapped to: ${val * 2}`);

const unsubscribe: () => void = ofNumMapToStringObs$.subscribe((val: string) => console.log(val))

/**
 *
 *                                                                                                
 * .oPYo. 8                                        8      8            d'b  o 8   o               
 * 8    8 8                                        8      8            8      8   8               
 * 8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.    o8P  o8 8  o8P .oPYo. oPYo. 
 * 8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8     8    8 8   8  8oooo8 8  `' 
 * 8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.         8    8 8   8  8.     8     
 * `YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88  8    8 8   8  `Yooo' 8     
 * :.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..::..:::....::..::.....:..::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 * :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */
console.log('\n\nObservable.filter');
const filteredPositivesOfNumObs$: Observable<number> = Observable.of<number>(-2, 1, -3, 5, 0,  2, -1)
  .filter((val: number) => val >= 0);

filteredPositivesOfNumObs$.subscribe(console.log);


/**
 *
                                                                                                                          
.oPYo. 8              o        o                                                          8    d'b  o 8   o               
8    8 8                                                                                  8    8      8   8               
8      8oPYo. .oPYo. o8 odYo. o8 odYo. .oPYo.   ooYoYo. .oPYo. .oPYo.   .oPYo. odYo. .oPYo8   o8P  o8 8  o8P .oPYo. oPYo. 
8      8    8 .oooo8  8 8' `8  8 8' `8 8    8   8' 8  8 .oooo8 8    8   .oooo8 8' `8 8    8    8    8 8   8  8oooo8 8  `' 
8    8 8    8 8    8  8 8   8  8 8   8 8    8   8  8  8 8    8 8    8   8    8 8   8 8    8    8    8 8   8  8.     8     
`YooP' 8    8 `YooP8  8 8   8  8 8   8 `YooP8   8  8  8 `YooP8 8YooP'   `YooP8 8   8 `YooP'    8    8 8   8  `Yooo' 8     
:.....:..:::..:.....::....::..:....::..:....8 ::..:..:..:.....:8 ....::::.....:..::..:.....::::..:::....::..::.....:..::::
:::::::::::::::::::::::::::::::::::::::::ooP'.:::::::::::::::::8 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::...:::::::::::::::::::..:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */
console.log('\n\nChaining map and filter');
const filteredMappedPositivesOfNumObs$: Observable<string> = Observable.of<number>(-2, 1, -3, 5, 0,  2, -1)
  .filter((val: number) => val >= 0)
  .map((val: number) => `Positive value: ${val}`);

filteredMappedPositivesOfNumObs$.subscribe(console.log);


/**
 *
                                                                                             
.oPYo. 8                                        8      8             o         8             
8    8 8                                        8      8             8         8             
8    8 8oPYo. .oPYo. .oPYo. oPYo. o    o .oPYo. 8oPYo. 8 .oPYo.     o8P .oPYo. 8  .o  .oPYo. 
8    8 8    8 Yb..   8oooo8 8  `' Y.  .P .oooo8 8    8 8 8oooo8      8  .oooo8 8oP'   8oooo8 
8    8 8    8   'Yb. 8.     8     `b..d' 8    8 8    8 8 8.          8  8    8 8 `b.  8.     
`YooP' `YooP' `YooP' `Yooo' 8      `YP'  `YooP8 `YooP' 8 `Yooo' 88   8  `YooP8 8  `o. `Yooo' 
:.....::.....::.....::.....:..::::::...:::.....::.....:..:.....:..:::..::.....:..::...:.....:
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *
 */
console.log('\n\nObservable.take');
const takeThreeOfNumberObs$ = Observable.of(1, 2, 3, 4, 5, 6)
  .take(2);
  
const unsubscribeFromTake = takeThreeOfNumberObs$.subscribe(
  console.log,
  console.error,
  () => console.log('Hello, completed'),
);
