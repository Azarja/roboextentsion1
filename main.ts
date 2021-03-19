input.onButtonPressed(Button.A, function () {
    loop1 += 1
    basic.showNumber(loop1)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 113)
    basic.showString("motor started")
})
input.onButtonPressed(Button.B, function () {
    motor.motorStop(motor.Motors.M1)
    basic.showString("motor stopped")
})
let loop1 = 0
loop1 = 0
basic.forever(function () {
	
})
