import { Cheese, Clams, Dough, Sauce } from "./Ingredients";

export abstract class PizzaIngredientFactory {

    abstract createDough(): Dough
    abstract createSauce(): Sauce
    abstract createCheese(): Cheese
    abstract createClam(): Clams
}