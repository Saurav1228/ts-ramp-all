class Animal {
    private hunger: number = 10
    health: number
    coordX: number
    coordY: number

    eat() {
        console.log('Eating');
    }

    sleep() {
        console.log('Sleeping');
    }

}

//inheritance
class Dog extends Animal {
}

//Overriding eat function after inheritance
class Cat extends Animal {
    eat() {
        console.log('No i am jumping');
    }
}

const dog = new Dog;
dog.sleep();
dog.eat();
console.log(dog.hunger);


const cat = new Cat;
cat.sleep();
cat.eat();