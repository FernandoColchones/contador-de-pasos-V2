input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(46 * steps)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    steps = 0
    basic.showNumber(0)
    basic.pause(2000)
    basic.clearScreen()
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        steps += 2
        basic.pause(250)
    }
})
