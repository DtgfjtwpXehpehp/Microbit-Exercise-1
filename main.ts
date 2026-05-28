input.onButtonPressed(Button.A, function () {
    playerAwins += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    playerTied += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    playerBwins += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Total rounds played: ")
    basic.showNumber(playerAwins + (playerBwins + playerTied))
    basic.showString("Wins!")
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showNumber(playerAwins)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.showNumber(playerBwins)
    basic.pause(1000)
    basic.showString("Tied")
    basic.showNumber(playerTied)
    basic.pause(1000)
    basic.clearScreen()
})
let playerTied = 0
let playerBwins = 0
let playerAwins = 0
playerAwins = 0
playerBwins = 0
playerTied = 0
basic.forever(function () {
	
})
