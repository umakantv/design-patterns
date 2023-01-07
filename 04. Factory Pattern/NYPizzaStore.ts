import { NYStyleCheesePizza, NYStyleClamPizza, NYStylePepperoniPizza, NYStyleVeggiePizza } from "./NYStylePizzas";
import { Pizza, PizzaType } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore {

    createPizza(type: PizzaType): Pizza | null {

        if (type === PizzaType.CHEESE) {
            return new NYStyleCheesePizza();
        } else if (type === PizzaType.PEPPERONI) {
            return new NYStylePepperoniPizza();
        } else if (type === PizzaType.VEGGIE) {
            return new NYStyleVeggiePizza();
        } else if (type === PizzaType.CLAM) {
            return new NYStyleClamPizza();
        }
        return null;
    };
}