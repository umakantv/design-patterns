
# Strategy Pattern

The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.  
Strategy lets the algorithmm vary independently from the client that use it.


```ts

// Implementation code
abstract class Animal {}

class Dog extends Animal {
    bark(): void {
        console.log('Bhaw')
    }
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

It is now much easier to add multiple behaviors in the "family of algorithms".  


## Typescript Learnings

We need to use the following compiler option to compile Abstract Duck Class to avoid error without initializing.  
[Refer](https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc)

```json
    "compilerOptions": {
        "strictPropertyInitialization": false,
        ...
    }
```

