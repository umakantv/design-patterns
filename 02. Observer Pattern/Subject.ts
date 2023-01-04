
import { Observer } from "./Observer";

export abstract class Subject {

    abstract registerObserver(observer: Observer): void
    abstract removeObserver(observer: Observer): void
    abstract notifyObservers(): void
}