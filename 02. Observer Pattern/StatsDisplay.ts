import { Observer } from "./Observer";
import { State } from "./State";

export class StatsDisplay extends Observer {
    
    protected minTemp: number;
    protected maxTemp: number;

    constructor() {
        super();
        this.minTemp = Infinity;
        this.maxTemp = 0;
    }

    update(state: State): void {

        this.minTemp = Math.min(this.minTemp, state.temperature);
        this.maxTemp = Math.max(this.maxTemp, state.temperature);
        
        console.log('Min Temperature', this.minTemp);
        console.log('Max Temperature', this.maxTemp);
    }
}