
import { Command } from "./Command";
import {  GarageDoor } from "./Devices";

export class GarageDoorOpenCommand implements Command {

    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.open();
    }

}

export class GarageDoorCloseCommand implements Command {

    private garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.close();
    }

}