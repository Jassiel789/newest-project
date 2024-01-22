controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump += 1
    if (jump <= 2) {
        mySprite.vy = -150
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 . 1 . f f f 1 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . f f 1 f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . . f f f f 1 f . . . . . 
            . . . . . f f f 1 1 f . . . . . 
            . . . . . f . f f 1 f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . f f f . . . 1 . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 1 f f f . 1 . . . 
            . . . . . . 1 1 1 1 1 1 . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f 1 f f . f . . . . . 
            . . . . . f 1 1 f f f . . . . . 
            . . . . . f 1 f f f f . . . . . 
            . . . . . f 1 f f f f f . . . . 
            . . . . . f 1 f f . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . 1 . 1 1 1 1 1 1 . . . . . . 
            . 1 . 1 . f f f 1 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(mySprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right)) {
        mySprite.vy = 30
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . 1 1 1 1 1 1 . 1 . . 
        . . . . . . f 1 f f f . 1 . 1 . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . 1 . 1 1 1 1 1 1 . . . . . . 
        . 1 . 1 . f f f 1 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let row = 0
let col = 0
let jump = 0
let mySprite: Sprite = null
scene.setBackgroundColor(14)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . 1 . 1 1 1 1 1 1 . . . . . . 
    . 1 . 1 . f f f 1 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
mySprite.setStayInScreen(true)
jump = 0
game.onUpdateInterval(100, function () {
    col = randint(0, 50)
    row = randint(5, 11)
    tiles.setTileAt(tiles.getTileLocation(col, row), sprites.castle.tilePath5)
    tiles.setWallAt(tiles.getTileLocation(col, row), true)
})
