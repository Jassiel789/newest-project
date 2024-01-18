controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        mySprite.vy = -150
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f e f f f f f f . . . 
            . f f e 4 e e e f e f e f f . . 
            f f e d d e 4 4 f 2 f e e f . . 
            f f e d d e d 4 f 2 f e e e f . 
            . f f e e 4 4 e f 2 e f e e f . 
            . f 4 2 4 d 1 b f f e f e e f . 
            . f 4 2 4 d f f e f 2 e f e f . 
            f f 5 2 4 d d 4 e f 2 e 2 f f . 
            f f 5 2 e d d 4 e f 2 e 2 2 f . 
            f f f f f f e e f e 2 e 2 f . . 
            . f f . . . f e f 2 e f f . . . 
            . . . . . . . f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f . . . f f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f d d d d 4 e e e f . . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . f f f e e e f f f f f f f . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . . f e e e e f f e e e f . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . . f 2 f e e e e f f . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e 2 f e f . . . f f . 
            . . f 2 e 2 e f e e f f f f f f 
            . f 2 2 e 2 f e 4 d d e 2 5 f f 
            . f f 2 e 2 f e 4 d d 4 2 5 f f 
            . f e f e 2 f e f f d 4 2 4 f . 
            . f e e f e f f b 1 d 4 2 4 f . 
            . f e e f e 2 f e 4 4 e e f f . 
            . f e e e f 2 f 4 d e d d e f f 
            . . f e e f 2 f 4 4 e d d e f f 
            . . f f e f e f e e e 4 e f f . 
            . . . f f f f f f e f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        false
        )
    }
})
let jump = 0
let mySprite: Sprite = null
controller.moveSprite(mySprite)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
mySprite.setStayInScreen(true)
jump = 0
