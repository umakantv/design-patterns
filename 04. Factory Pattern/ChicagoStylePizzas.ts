import { Pizza } from "./Pizza";

abstract class ChicagoStylePizza extends Pizza {
    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}

export class ChicagoStyleCheesePizza extends ChicagoStylePizza {
    constructor() {
        super();
        this.name = 'Chicago Style Deep Dish Cheese Pizza';
        this.dough = 'Extra Thick Crust Dough';
        this.sauce = 'Plum Tomato Sauce';

        this.toppings.push('Shredded Mozzarella Cheese');
    }
}

export class ChicagoStylePepperoniPizza extends ChicagoStylePizza {
    constructor() {
        super();
        this.name = 'NY Style Pepperoni Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Pepperoni');
    }
}

export class ChicagoStyleClamPizza extends ChicagoStylePizza {
    constructor() {
        super();
        this.name = 'NY Style Clam Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Clam');
    }
}

export class ChicagoStyleVeggiePizza extends ChicagoStylePizza {
    constructor() {
        super();
        this.name = 'NY Style Veggie Pizza';
        this.dough = 'Thin Crust Dough';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Veggie Feast');
    }
}