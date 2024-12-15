let tropfen: game.LedSprite = null
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    tropfen = game.createSprite(2, 0)
    basic.pause(300)
    tropfen.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    tropfen.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    tropfen.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
    tropfen.change(LedSpriteProperty.Y, 1)
    basic.pause(300)
})
