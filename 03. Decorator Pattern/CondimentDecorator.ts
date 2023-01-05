import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {

    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    abstract getDescription(): string;
    abstract cost(): number;
}