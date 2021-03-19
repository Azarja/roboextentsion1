input.onPinPressed(TouchPin.P0, function () {
    motor.servo(motor.Servos.S1, 0)
    basic.showIcon(IconNames.SmallSquare)
    motor.servo(motor.Servos.S1, 180)
})
input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 113)
    basic.showLeds(`
        # # # . .
        . # # # .
        . . # # #
        . # # # .
        # # # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    motor.motorStop(motor.Motors.M1)
    basic.showIcon(IconNames.No)
})
let loop1 = 0
basic.forever(function () {
	
})
