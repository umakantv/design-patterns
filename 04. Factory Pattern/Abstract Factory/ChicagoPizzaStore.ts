import { CheesePizza } from "./CheesePizza";
import { ChicagoPizzaIngredientFactory } from "./ChicagoPizzaIngredientFactory";
import { ClamPizza } from "./ClamPizza";
import { PizzaType, Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
    
    protected createPizza(type: PizzaType): Pizza {

        let pizza: Pizza;

        const pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();

        if (type === PizzaType.CHEESE) {
            pizza = new CheesePizza(pizzaIngredientFactory);
            pizza.setName('New York Style Cheese Pizza');
        } else if (type === PizzaType.CLAM) {
            pizza = new ClamPizza(pizzaIngredientFactory);
            pizza.setName('New York Style Clam Pizza');
        }

        return pizza;
    }

}