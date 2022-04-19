input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(4 - X, 0)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(0, 4 - X)
        basic.pause(100)
    }
})
