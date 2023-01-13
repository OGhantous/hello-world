input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.playTone(Note.G, 10000000)
    music.setVolume(255)
})
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.showIcon(IconNames.Asleep)
