let barrier = 0
let distance = 0
let direction = false
basic.forever(function () {
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
    }
    distance = randint(1, 3)
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
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
    }
    basic.pause(1000)
    for (let index = 0; index < distance; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 60)
    }
    basic.pause(1000)
})
