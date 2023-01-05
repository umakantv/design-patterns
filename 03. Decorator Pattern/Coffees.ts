import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    description = "House Blend Coffee";

    cost(): number {
        return .89;
    }
}

export class Espressso extends Beverage {

    description = "Espresso";

    cost(): number {
        return 1.99;
    }
}

export class DarkRoast extends Beverage {

    description = "Dark Roast Coffee";

    cost(): number {
        return .99;
    }
}

export class Decaf extends Beverage {

    description = "Decaf";

    cost(): number {
        return 1.05;
    }
}