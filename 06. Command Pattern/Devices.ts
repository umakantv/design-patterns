
export abstract class Device {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

export class Light extends Device {

    on() {
        console.log(this.name, 'Light has been turned on.')
    }
    off() {
        console.log(this.name, 'Light has been turned off.')
    }
}

export class GarageDoor extends Device {
    open() {
        console.log('Garage Door has been opened.')
    }
    close() {
        console.log('Garage Door has been closed.')
    }
}

export class CeilingFan extends Device {
    speed: number = 1;
    on() {
        console.log(this.name, 'Ceiling Fan has been turned on.')
    }
    off() {
        console.log(this.name, 'Ceiling Fan has been turned off.')
    }
    high() {
        this.speed = 5;
        console.log(this.name, 'Ceiling Fan has been set to high.')
    }
    mid() {
        this.speed = 3;
        console.log(this.name, 'Ceiling Fan has been set to mid.')
    }
    low() {
        this.speed = 1;
        console.log(this.name, 'Ceiling Fan has been set to low.')
    }
    getSpeed() {
        return this.speed;
    }
}

export class Stereo extends Device {
    on() {
        console.log(this.name, 'Stereo has been turned on.')
    }

    off() {
        console.log(this.name, 'Stereo has been turned off.')
    }

    setCd() {
        console.log(this.name, 'Stereo has been switched to CD mode.')
    }

    setDvd() {
        console.log(this.name, 'Stereo has been switched to DVD mode.')
    }

    setRadio() {
        console.log(this.name, 'Stereo has been switched to radio mode.')
    }

    setVolume(volume: number) {
        console.log(this.name, 'Stereo volume set to', volume);
    }
}