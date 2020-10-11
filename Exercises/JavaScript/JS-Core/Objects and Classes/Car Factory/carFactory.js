function solve(object) {
    let power;
    let volume;

    if (object.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (object.power <= 120) {
        power = 120;
        volume = 2400;
    } else {
        power = 200;
        volume = 3500;
    }
    let wheels = [0, 0, 0, 0];
    if (object.wheelsize % 2 === 0) {
        object.wheelsize -= 1;
    }
    wheels = wheels.map((w) => w = object.wheelsize);

    return {
        model: object.model,
        engine: {power, volume},
        carriage: {type: object.carriage, color: object.color},
        wheels
    }
}