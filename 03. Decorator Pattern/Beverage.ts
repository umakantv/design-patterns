
export abstract class Beverage {
    description: string;

    getDescription() {
        return this.description;
    }

    abstract cost(): number;
}