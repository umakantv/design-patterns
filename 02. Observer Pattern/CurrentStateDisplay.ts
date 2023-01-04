import { Observer } from "./Observer";
import { State } from "./State";


export class CurrentStateDisplay extends Observer {
    update(state: State): void {
        console.log('Current State just got updated', state);
    }
}