controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "right") {
        direction = "left"
        animation.runImageAnimation(
        mySprite,
        assets.animation`bee-flying-left`,
        50,
        true
        )
    }
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    if (mySprite2.x <= 80 && mySprite2.y <= 60) {
        x = randint(10, 150)
        if (x <= 80) {
            y = randint(60, 110)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x > 80 && mySprite2.y <= 60) {
        x = randint(10, 150)
        if (x > 80) {
            y = randint(60, 110)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x > 80 && mySprite2.y > 60) {
        x = randint(10, 150)
        if (x > 80) {
            y = randint(10, 60)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x <= 80 && mySprite2.y > 60) {
        x = randint(10, 150)
        if (x <= 80) {
            y = randint(10, 60)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    }
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == "left") {
        direction = "right"
        animation.runImageAnimation(
        mySprite,
        assets.animation`bee-flying-right`,
        50,
        true
        )
    }
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (mySprite2.x <= 80 && mySprite2.y <= 60) {
        x = randint(10, 150)
        if (x <= 80) {
            y = randint(60, 110)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x > 80 && mySprite2.y <= 60) {
        x = randint(10, 150)
        if (x > 80) {
            y = randint(60, 110)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x > 80 && mySprite2.y > 60) {
        x = randint(10, 150)
        if (x > 80) {
            y = randint(10, 60)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    } else if (mySprite2.x <= 80 && mySprite2.y > 60) {
        x = randint(10, 150)
        if (x <= 80) {
            y = randint(10, 60)
        } else {
            y = randint(10, 110)
        }
        mySprite2.setPosition(x, y)
    }
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let y = 0
let x = 0
let mySprite2: Sprite = null
let direction = ""
let mySprite: Sprite = null
game.setGameOverScoringType(game.ScoringType.HighScore)
scene.setBackgroundImage(assets.image`field`)
mySprite = sprites.create(assets.image`bee`, SpriteKind.Player)
direction = "right"
mySprite.setPosition(80, 110)
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`bee-flying-right`,
50,
true
)
mySprite2 = sprites.create(assets.image`flower`, SpriteKind.Food)
mySprite2.setPosition(80, 60)
controller.moveSprite(mySprite, 100, 100)
let mySprite3 = sprites.create(assets.image`bee enemy`, SpriteKind.Enemy)
mySprite3.setPosition(80, 10)
let enemydirection = "right"
mySprite3.follow(mySprite2, 25)
mySprite3.setStayInScreen(true)
animation.runImageAnimation(
mySprite3,
assets.animation`bee-enemy-flying-right`,
50,
true
)
x = 0
y = 0
info.setScore(0)
info.setLife(3)
info.startCountdown(30)
music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.LoopingInBackground)
// changing enemy image direction when enemy goes left/right
game.onUpdate(function () {
    if (enemydirection == "right" && mySprite3.vx < 0) {
        enemydirection = "left"
        animation.runImageAnimation(
        mySprite3,
        assets.animation`bee-enemy-flying-left`,
        50,
        true
        )
    } else if (enemydirection == "left" && mySprite3.vx > 0) {
        enemydirection = "right"
        animation.runImageAnimation(
        mySprite3,
        assets.animation`bee-enemy-flying-right`,
        50,
        true
        )
    }
})
