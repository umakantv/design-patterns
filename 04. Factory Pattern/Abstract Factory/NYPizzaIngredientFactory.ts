import { Dough, Sauce, Cheese, Clams, ThinCrustDough, MarinaraSauce, ReggianoCheese, FreshClams } from "./Ingredients";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class NYPizzaIngredientFactory extends PizzaIngredientFactory {

    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new MarinaraSauce();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }
    createClam(): Clams {
        return new FreshClams();
    }

}