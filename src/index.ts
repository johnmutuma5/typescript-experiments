import logNameAge, { NameAgeLogger, NamedWithAge } from './generic-logger';


interface Person extends NamedWithAge {};

const person: Person = {
  name  : 'Lazuli',
  age   : 1
}


const person2  = {
  name  : 'Sheelah',
}

const logPersonNameAndAge: NameAgeLogger<Person> = logNameAge;

logPersonNameAndAge(person);
logPersonNameAndAge(person2);


