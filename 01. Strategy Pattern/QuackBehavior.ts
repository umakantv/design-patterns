
export interface QuackBehavior {
    quack(): void
}

export class Quack implements QuackBehavior {
    quack(): void {
        console.log('Quack')
    }
}

export class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('<< Silence >>')
    }
}

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log('Squeak')
    }
}