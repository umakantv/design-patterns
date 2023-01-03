
# Strategy Pattern

The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.  
Strategy lets the algorithmm vary independently from the client that use it.


```ts

// Implementation code
abstract class Animal {}

class Dog extends Animal {
    bark(): void
}

const dog = new Dog();
dog.bark()

```

```ts
// Interface Code

interface SoundBehavior {
    performSound(): void
}

class Bark implements SoundBehavior {

    performSound(): void {
        console.log('Bhaw')
    }
}

class Animal {
    soundBehavior: SoundBehavior;

    makeSound(): void {
        this.soundBehavior.performSound();
    }
}


class Dog extends Animal {
    
    constructor() {
        this.soundBehavior = new Bark();
    }
}

function getAnimal(): Animal {
    return new Dog();
}


const animal = getAnimal();
animal.makeSound();

```