import { Pizza } from "./Pizza";

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Grated Reggiano Cheese');
    }
}

export class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Style Pepperoni Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Pepperoni');
    }
}

export class NYStyleClamPizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Style Clam Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Clam');
    }
}

export class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = 'NY Style Veggie Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Veggie Feast');
    }
}