input.onButtonPressed(Button.A, function () {
    if (loop1 == 0) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
        basic.showLeds(`
            . . # # #
            . # # # .
            # # # . .
            . # # # .
            . . # # #
            `)
        loop1 = 1
    } else if (loop1 == 2) {
        motor.motorStop(motor.Motors.M1)
        basic.pause(500)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
        basic.showLeds(`
            . . # # #
            . # # # .
            # # # . .
            . # # # .
            . . # # #
            `)
        loop1 = 1
    } else {
        motor.motorStop(motor.Motors.M1)
        basic.showIcon(IconNames.No)
        loop1 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (loop1 == 0) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
        basic.showLeds(`
            # # # . .
            . # # # #
            . . # # #
            . # # # .
            # # # . .
            `)
        loop1 = 2
    } else if (loop1 == 1) {
        motor.motorStop(motor.Motors.M1)
        basic.pause(500)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 100)
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # #
            . # # # .
            # # # . .
            `)
        loop1 = 2
    } else {
        motor.motorStop(motor.Motors.M1)
        basic.showIcon(IconNames.No)
        loop1 = 0
    }
})
let loop1 = 0
loop1 = 0
motor.motorStopAll()
