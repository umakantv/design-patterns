
import { Observer } from "./Observer";
import { State } from "./State";
import { Subject } from "./Subject";

export class WeatherData extends Subject  {

    protected observers: Observer[];
    protected state: State;

    constructor() {

        super();

        this.observers = [];

        this.state = {
            temperature: 70,
            pressure: 1.0,
            humidity: 60,
        };
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers.splice(this.observers.findIndex((value) => observer === value), 1);
    }

    notifyObservers(): void {

        const state = this.getState();

        this.observers.forEach(observer => {
            observer.update(state);
        });
    }

    getState(): State {
        return this.state;
    }

    setState(state: State): void {
        this.state = state;
        this.notifyObservers();
    }
}