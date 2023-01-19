import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { PizzaType, Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export  class NYPizzaStore extends PizzaStore {
    
    protected createPizza(type: PizzaType): Pizza {

        let pizza: Pizza;

        const pizzaIngredientFactory = new NYPizzaIngredientFactory();

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