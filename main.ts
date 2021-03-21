input.onButtonPressed(Button.A, function () {
    if (loop1 == 0) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 113)
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
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
})
let loop1 = 0
loop1 = 0
motor.motorStopAll()
