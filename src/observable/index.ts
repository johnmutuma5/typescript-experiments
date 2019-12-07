import { Observable } from './base/observable';
import { MockDocument } from './utils/mock-document';

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
// click after 3secs
setTimeout(() => document.click(), 3000);
console.log('Document will be clicked after 3sec');


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

const fromNumMapToStringObs$: Observable<string> = Observable.of<number>(1, 2, 3, 4, 5)
  .map<string>((val: number) => `mapped to: ${val * 2}`);

const unsubscribe: () => void = fromNumMapToStringObs$.subscribe((val: string) => console.log(val))
