import { Cheese, Clams, Dough, Pepperoni, Sauce, Veggies } from "./Ingredients";

export enum PizzaType {
    CHEESE,
    PEPPERONI,
    VEGGIE,
    CLAM
}

export abstract class Pizza {
    name: string;

    dough: Dough;
    sauce: Sauce;
    cheese: Cheese;
    veggies: Veggies[];
    pepperoni: Pepperoni;
    clam: Clams;

    toppings = new Array<string>();

    abstract prepare(): void

    bake() {
        console.log('Bake for 25 minutes at 350');
    }

    cut() {
        console.log('Cutting the pizza into diagonal slices')
    }

    box()  {
        console.log('Place pizza in official PizzaStore box')
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}