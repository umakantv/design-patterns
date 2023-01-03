import { FlyRocketPowered } from "./FlyBehavior";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { Squeak } from "./QuackBehavior";

function main() {
    const mallard = new MallardDuck();

    mallard.display();
    mallard.swim();
    mallard.performFly();
    mallard.performQuack();

    const model = new ModelDuck();

    model.setFlyBehavior(new FlyRocketPowered());
    model.setQuackBehavior(new Squeak());

    model.display();
    model.swim();
    model.performFly();
    model.performQuack();
}

main();