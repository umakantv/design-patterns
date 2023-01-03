
import { Duck } from './Duck';
import { FlyWithWings } from './FlyBehavior';
import { Quack } from './QuackBehavior';

export class MallardDuck extends Duck {

    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display(): void {
        console.log('I am a real Mallard duck')
    }
}