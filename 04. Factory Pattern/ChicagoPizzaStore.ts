import { ChicagoStyleCheesePizza, ChicagoStyleClamPizza, ChicagoStylePepperoniPizza, ChicagoStyleVeggiePizza } from "./ChicagoStylePizzas";
import { Pizza, PizzaType } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {

    createPizza(type: PizzaType): Pizza | null {

        if (type === PizzaType.CHEESE) {
            return new ChicagoStyleCheesePizza();
        } else if (type === PizzaType.PEPPERONI) {
            return new ChicagoStylePepperoniPizza();
        } else if (type === PizzaType.VEGGIE) {
            return new ChicagoStyleVeggiePizza();
        } else if (type === PizzaType.CLAM) {
            return new ChicagoStyleClamPizza();
        }
        return null;
    };
}