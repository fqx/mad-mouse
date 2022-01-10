barrier = 0
distance = 0
direction = False

def on_forever():
    global barrier, distance, direction
    barrier = Tinybit.Ultrasonic_Car()
    if barrier < 15:
        basic.show_leds("""
            . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
        """)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_BACK, 80)
    distance = randint(1, 3)
    direction = Math.random_boolean()
    if direction == True:
        basic.show_leds("""
            . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
        """)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_LEFT)
    else:
        basic.show_leds("""
            . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
        """)
        Tinybit.car_ctrl(Tinybit.CarState.CAR_RIGHT)
    basic.pause(1000)
    for index in range(distance):
        basic.show_leds("""
            . . # . .
                        . . # . .
                        # . # . #
                        . # # # .
                        . . # . .
        """)
        Tinybit.car_ctrl_speed(Tinybit.CarState.CAR_RUN, 60)
    basic.pause(1000)
basic.forever(on_forever)
