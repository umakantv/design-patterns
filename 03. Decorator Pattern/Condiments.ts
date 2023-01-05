import { CondimentDecorator } from "./CondimentDecorator";

export class SteamedMilk extends CondimentDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ', Steamed Milk';
    }

    cost(): number {
        return this.beverage.cost() + .1;
    }
}

export class Mocha extends CondimentDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha';
    }

    cost(): number {
        return this.beverage.cost() + .2;
    }
}

export class Soy extends CondimentDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy';
    }

    cost(): number {
        return this.beverage.cost() + .15;
    }
}

export class Whip extends CondimentDecorator {

    getDescription(): string {
        return this.beverage.getDescription() + ', Whip';
    }

    cost(): number {
        return this.beverage.cost() + .1;
    }
}