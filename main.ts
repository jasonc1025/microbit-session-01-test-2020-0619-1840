basic.showIcon(IconNames.Happy)
basic.pause(5000)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.forever(function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    basic.pause(5000)
    motor.motorStop(motor.Motors.M1)
})
basic.forever(function () {
    serial.writeValue("Sonar: ", sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    ))
    pins.servoWritePin(AnalogPin.P0, 180)
})
