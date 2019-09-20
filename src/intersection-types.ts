/**
 *
 * Intersection types are useful when we'd like to create a type that has
 * the combined properties of two or more types. We create intersection types
 * with the `&` operator
 */

function extend <T, U>(target: T, source: U): T & U {
  let result = {} as (T & U);

  for (let prop in target) {
    (result[prop] as any) = target[prop];
  }

  for (let prop in source) {
    if (!result.hasOwnProperty(prop)) {
      (result[prop] as any) = source[prop];
    }
  }
  return result;
}








class Extendable {
  public extend <T>(another: T): this & T {
    return extend(this, another);
  }
}



class MyFileReader extends Extendable {
  public read () {
    // ...
    console.log('Read the file');
  }

}

class MyFileWriter extends Extendable {
  public write () {
    // ...
    console.log('Wrote to file'); 
  }
}


const myReader: MyFileReader = new MyFileReader(); 
const myWriter: MyFileWriter = new MyFileWriter();

type ReaderWriter = MyFileReader & MyFileWriter;

const readerWriter: ReaderWriter = myReader.extend(myWriter);
readerWriter.read();
readerWriter.write();

const writerReader: ReaderWriter = myWriter.extend(myReader);
writerReader.read();
writerReader.write();
