input.onButtonPressed(Button.A, function () {
    if (device == 0) {
        if (loop1 == 0) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
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
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
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
    } else {
        steer += -10
        motor.servo(motor.Servos.S1, steer)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (device == 0) {
        if (loop1 == 0) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
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
            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
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
    } else {
        steer += 10
        motor.servo(motor.Servos.S1, steer)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (device == 0) {
        device = 1
    } else {
        device = 0
    }
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onGesture(Gesture.ThreeG, function () {
    motor.motorStop(motor.Motors.M1)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . # # . .
            . . # # .
            . . . . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(10)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(10)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        loop1 = 0
    }
})
let steer = 0
let device = 0
let loop1 = 0
loop1 = 0
device = 0
steer = 90
motor.servo(motor.Servos.S1, steer)
motor.motorStopAll()
basic.forever(function () {
	
})
