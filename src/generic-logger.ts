export interface NamedWithAge {
  name: string;
  age?: number;
}


export interface NameAgeLogger <T extends NamedWithAge> {
  (arg: T): void;
}

function logNameAge <T extends NamedWithAge> (item: T): void {
  console.log(item.name, item.age);
}


export default logNameAge;
