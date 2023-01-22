
import { Command } from "./Command";
import {  CeilingFan } from "./Devices";

export class CeilingFanOnCommand implements Command {

    private ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.on();
    }

}

export class CeilingFanOffCommand implements Command {

    private ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.off();
    }

}