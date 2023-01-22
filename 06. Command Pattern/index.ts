import { CeilingFanOffCommand, CeilingFanOnCommand } from "./CeilingFanCommands";
import { CeilingFan, GarageDoor, Light, Stereo } from "./Devices";
import { GarageDoorCloseCommand, GarageDoorOpenCommand } from "./GarageDoorCommands";
import { LightOffCommand, LightOnCommand } from "./LightCommands";
import { RemoteControl } from "./RemoteControl";
import { StereoOffCommand, StereoOnWithCDCommand } from "./StereoCommands";


function main() {
    const remoteControl = new RemoteControl();

    const kitchenLight = new Light('Kitchen');
    const livingRoomLight = new Light('Living Room');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor('Garage');
    const stereo = new Stereo('Living Room');

    const kitchenLightOnCommand = new LightOnCommand(kitchenLight);
    const kitchenLightOffCommand = new LightOffCommand(kitchenLight);

    const livingRoomLightOnCommand = new LightOnCommand(livingRoomLight);
    const livingRoomLightOffCommand = new LightOffCommand(livingRoomLight);

    const ceilingFanOnCommand = new CeilingFanOnCommand(ceilingFan);
    const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

    const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
    const garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

    const stereoOnWithCDCommand = new StereoOnWithCDCommand(stereo);
    const stereoOffCommand = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOnCommand, livingRoomLightOffCommand);
    remoteControl.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand);
    remoteControl.setCommand(2, ceilingFanOnCommand, ceilingFanOffCommand);
    remoteControl.setCommand(3, garageDoorOpenCommand, garageDoorCloseCommand);
    remoteControl.setCommand(4, stereoOnWithCDCommand, stereoOffCommand);

    console.log(remoteControl.toString());

    remoteControl.onButtonPressed(0);
    remoteControl.offButtonPressed(0);

    remoteControl.onButtonPressed(1);
    remoteControl.offButtonPressed(1);

    remoteControl.onButtonPressed(2);
    remoteControl.offButtonPressed(2);

    remoteControl.onButtonPressed(3);
    remoteControl.offButtonPressed(3);

    remoteControl.onButtonPressed(4);
    remoteControl.offButtonPressed(4);

}

main();