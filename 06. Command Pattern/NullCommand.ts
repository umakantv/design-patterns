
import { Command } from "./Command";
import { Device } from "./Devices";

export class NullCommand implements Command {
    execute(): void {
        
    }
}