input.onButtonPressed(Button.A, function () {
    if (loop1 == 0) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 113)
        basic.showLeds(`
            # # # . .
            . # # # .
            . . # # #
            . # # # .
            # # # . .
            `)
        loop1 = 1
    } else {
        motor.motorStop(motor.Motors.M1)
        basic.showIcon(IconNames.No)
        loop1 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    motor.servo(motor.Servos.S1, 0)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(1000)
    motor.servo(motor.Servos.S1, 80)
    basic.pause(500)
    motor.servo(motor.Servos.S1, 0)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Happy)
})
let loop1 = 0
loop1 = 0
motor.motorStopAll()
