
export class ChocolateBoiler {

    private static uniqueInstance: ChocolateBoiler;

    private boiled: boolean;
    private empty: boolean;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    public static getInstance(): ChocolateBoiler {

        if (!this.uniqueInstance) {
            this.uniqueInstance = new ChocolateBoiler();
        }

        return this.uniqueInstance;
    }

    public fill(): void {
        if(this.isEmpty()) {
            this.empty = false;
            console.log('Open the inlet valve');
            this.boiled = false;
        }
    }

    public boil(): void {
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
            console.log('Raise the temperature to 300°C');
        }
        
    }

    public drain(): void {
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
            console.log('Open the outlet valve');
        }
    }

    public isEmpty(): boolean {
        return this.empty;
    }

    public isBoiled(): boolean {
        return this.boiled;
    }
}