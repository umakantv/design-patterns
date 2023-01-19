import { NYPizzaStore } from "./NYPizzaStore";
import { PizzaType } from "./Pizza";

function main() {
    const nyPizzaStore = new NYPizzaStore();

    nyPizzaStore.orderPizza(PizzaType.CHEESE);

    
}

main();