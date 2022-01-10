let barrier = 0
let distance = 0
let direction = false
let isblocked = 0
function backOff () {
    barrier = Tinybit.Ultrasonic_Car()
    if (barrier < 15) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(200)
        return 1
    } else {
        return 0
    }
}
basic.forever(function () {
    backOff()
    distance = randint(1, 10)
    direction = Math.randomBoolean()
    if (direction == true) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        basic.pause(200)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
    for (let index = 0; index < distance; index++) {
        isblocked = backOff()
        if (isblocked == 1) {
            break;
        }
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
        basic.pause(500)
    }
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
