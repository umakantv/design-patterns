import { State } from "./State";

export abstract class Observer {

    abstract update(state: State): void
}