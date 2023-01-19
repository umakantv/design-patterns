import { Dough, Sauce, Cheese, Clams, PlumTomatoSauce, MozzarellaCheese, FrozenClams, ThickCrustDough } from "./Ingredients";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class ChicagoPizzaIngredientFactory extends PizzaIngredientFactory {

    createDough(): Dough {
        return new ThickCrustDough();
    }
    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
    createCheese(): Cheese {
        return new MozzarellaCheese();
    }
    createClam(): Clams {
        return new FrozenClams();
    }

}