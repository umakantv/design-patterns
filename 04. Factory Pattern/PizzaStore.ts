import { Pizza, PizzaType } from "./Pizza";

export abstract class PizzaStore {

    abstract createPizza(type: PizzaType): Pizza | null;

    orderPizza(type: PizzaType): Pizza | null {

        const pizza = this.createPizza(type);

        if (pizza) {
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
    
            return pizza;
        }
        return null;

    }
}