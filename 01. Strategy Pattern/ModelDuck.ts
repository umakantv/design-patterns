
import { Duck } from './Duck';

export class ModelDuck extends Duck {

    constructor() {
        super();
    }

    public display(): void {
        console.log('I am a model duck')
    }
}