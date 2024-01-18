input.onButtonPressed(Button.A, function () {
    throttle += -10
})
input.onButtonPressed(Button.AB, function () {
    if (arm) {
        arm = 0
    } else {
        arm = 1
    }
    throttle = 0
})
input.onButtonPressed(Button.B, function () {
    throttle += 10
})
input.onGesture(Gesture.Shake, function () {
    throttle = 0
    roll = 0
})
let roll = 0
let arm = 0
let throttle = 0
let radioChannel = 252
basic.showNumber(radioChannel)
radio.setGroup(radioChannel)
basic.forever(function () {
    roll = 0
    basic.clearScreen()
    if (arm) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(Math.map(roll, -45, 45, 0, 4), 2)
    radio.sendValue("\"A\"", arm)
    radio.sendValue("\"R\"", roll)
    radio.sendValue("\"T\"", throttle)
})
