/**
 * We can create types that are constrained by other types
 * PropGetter ensures that funtions of its type only accept propNames that the 
 * target object contains
 *
 **/

interface PropGetter <T, K extends keyof T> {
  (obj: T, propName: K): T[K]; 
}

interface NamedItems {
  name: string;
}

interface Person extends NamedItems {
  age?: number;
}

interface NameGetter <T>{
  (obj: T): string;
}





function getProperty (obj, propName) {
  return obj[propName];
}

function getNameGetter <T extends NamedItems> () : NameGetter<T> {
  const getName: PropGetter<T, 'name'> = getProperty;
  return (obj: T) => getName(obj, 'name');
}


const person: Person = {
  name: 'Lazuli',
  age: 1
}

const getPersonName: NameGetter<Person> = getNameGetter();
let _name: string = getPersonName(person);

console.log(_name);



