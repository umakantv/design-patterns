import { Command } from "./Command";
import { NullCommand } from "./NullCommand";

export class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];

    size = 7;

    public constructor() {
        this.onCommands = new Array<Command>(this.size);
        this.offCommands = new Array<Command>(this.size);

        for (let i = 0; i < this.size; i++) {
            this.onCommands[i] = new NullCommand();
            this.offCommands[i] = new NullCommand();
        }
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonPressed(slot: number) {
        this.onCommands[slot].execute();
    }

    public offButtonPressed(slot: number) {
        this.offCommands[slot].execute();
    }

    public toString() {
        let result = '\n---------Remote Control---------\n';
        for (let i = 0; i < this.size; i++) {

            result += `[slot ${i}]\t${this.onCommands[i].constructor.name}\t\t${this.offCommands[i].constructor.name}\n`
        }

        return result;
    }
}