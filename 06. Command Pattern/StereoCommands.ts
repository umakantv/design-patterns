
import { Command } from "./Command";
import { Stereo } from "./Devices";

export class StereoOnWithCDCommand implements Command {

    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

}

export class StereoOffCommand implements Command {

    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
    }

}