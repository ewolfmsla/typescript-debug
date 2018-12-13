export interface SpeedControllable {
    increaseSpeed(): void;
    decreaseSpeed(): void;
    stop(): void;
}

export interface InclineControllable {
    lift(): void;
    drop(): void;
}

export function isSpeedControllable(treadmill: SpeedControllable | any): treadmill is SpeedControllable {
    if (treadmill.increaseSpeed && treadmill.decreaseSpeed && treadmill.stop) {
        return true;
    }
    return false;
}

export function customTypeGuardExample(treadmill: SpeedControllable | InclineControllable) {
    if (isSpeedControllable(treadmill)) {
        treadmill.stop();
    } else {
        treadmill.lift();
    }
}

export class UltraTreadmill implements SpeedControllable {
    increaseSpeed(): void {
        console.log("increasing speed...");
    }    
    decreaseSpeed(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        console.log("stopping...");
    }
}

customTypeGuardExample(new UltraTreadmill());