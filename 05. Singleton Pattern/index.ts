import { ChocolateBoiler } from "./ChocolateBoiler";


function main() {

    const boiler = ChocolateBoiler.getInstance();

    boiler.fill();

    // malicious code
    const boiler2 = ChocolateBoiler.getInstance();
    boiler2.drain();

    console.log('Is Boiler empty:', boiler.isEmpty());
    console.log('Is boiler2 same as boiler', boiler === boiler2);

    boiler.boil();

    boiler.drain();

}

main();