class Animal {
    move() { }
}

class Snake extends Animal {
    hiss() { }
}

const anonAnimal: Animal = new Animal();

const animalTypeCastIntoSnake: Snake = <Snake>anonAnimal;
console.log(animalTypeCastIntoSnake.hiss());
console.log(animalTypeCastIntoSnake.move());

/**
 * the following would not work since we can not assign an instance of a super
 * type to a variable of its subtype. See the error
 */
const anonSnake: Animal = new Snake();
const snakeTypeCastIntoAnimal: Snake = <Animal>anonSnake;

console.log(snakeTypeCastIntoAnimal.hiss());
