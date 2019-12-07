import { Observable } from "./base/observable";

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
