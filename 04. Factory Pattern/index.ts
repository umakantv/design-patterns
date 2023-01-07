import { ChicagoPizzaStore } from "./ChicagoPizzaStore";
import { NYPizzaStore } from "./NYPizzaStore";
import { PizzaType } from "./Pizza";


function main() {

    const nyStore = new NYPizzaStore();
    const chicagoStore = new ChicagoPizzaStore();

    let pizza = nyStore.orderPizza(PizzaType.CHEESE);

    console.log('Ethan ordered a', pizza.getName(), '\n');

    pizza = chicagoStore.orderPizza(PizzaType.CHEESE);
    console.log('Joel ordered a', pizza.getName(), '\n');
}

main();