
import { Command } from "./Command";
import { Light } from "./Devices";

export class LightOnCommand implements Command {

    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

}

export class LightOffCommand implements Command {

    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

}