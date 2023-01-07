
export enum PizzaType {
    CHEESE,
    PEPPERONI,
    VEGGIE,
    CLAM
}

export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;

    toppings = new Array<string>();

    prepare() {
        console.log('Preparing', this.name);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings...');

        for (const topping of this.toppings) {
            console.log('    ', topping);
        }
    }

    bake() {
        console.log('Bake for 25 minutes at 350');
    }

    cut() {
        console.log('Cutting the pizza into diagonal slices')
    }

    box()  {
        console.log('Place pizza in official PizzaStore box')
    }

    getName(): string {
        return this.name;
    }
}