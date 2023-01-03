
import { FlyBehavior } from './FlyBehavior'
import { QuackBehavior } from './QuackBehavior'

export abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    public setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    public setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    public abstract display(): void

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public swim(): void {
        console.log('All ducks flow, even decoys!')
    }
}