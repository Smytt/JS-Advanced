function solve(car) {

    let engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}]

    for (let engine of engines) {
        if(engine.power >= car.power) {
            car.engine = engine
            break;
        }
    }

    car.carriage = {
        type: car.carriage,
        color: car.color
    }

    delete car.color
    delete car.power

    while (car.wheelsize % 2 !== 1) {
        car.wheelsize = Math.ceil(car.wheelsize - 1)
    }

    car.wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize]
    delete car.wheelsize

    return car
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 13
}));