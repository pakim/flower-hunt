def on_left_pressed():
    global direction
    if direction == "right":
        direction = "left"
        animation.run_image_animation(mySprite,
            assets.animation("""
                bee-flying-left
            """),
            50,
            True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    music.stop_all_sounds()
    game.game_over(False)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    mySprite2.set_position(randint(10, 150), randint(10, 110))
    info.change_life_by(-1)
    scene.camera_shake(2, 200)
    music.play(music.melody_playable(music.big_crash),
        music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.food, on_on_overlap)

def on_right_pressed():
    global direction
    if direction == "left":
        direction = "right"
        animation.run_image_animation(mySprite,
            assets.animation("""
                bee-flying-right
            """),
            50,
            True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_life_zero():
    music.stop_all_sounds()
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap2(sprite2, otherSprite2):
    mySprite2.set_position(randint(10, 150), randint(10, 110))
    info.change_score_by(1)
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

mySprite2: Sprite = None
direction = ""
mySprite: Sprite = None
game.set_game_over_scoring_type(game.ScoringType.HIGH_SCORE)
scene.set_background_image(assets.image("""
    field
"""))
mySprite = sprites.create(assets.image("""
    bee
"""), SpriteKind.player)
direction = "right"
mySprite.set_position(80, 110)
mySprite.set_stay_in_screen(True)
animation.run_image_animation(mySprite,
    assets.animation("""
        bee-flying-right
    """),
    50,
    True)
mySprite2 = sprites.create(assets.image("""
    flower
"""), SpriteKind.food)
mySprite2.set_position(80, 60)
controller.move_sprite(mySprite, 100, 100)
mySprite3 = sprites.create(assets.image("""
    bee
"""), SpriteKind.enemy)
mySprite3.set_position(80, 10)
enemydirection = "right"
mySprite3.follow(mySprite2, 25)
mySprite3.set_stay_in_screen(True)
animation.run_image_animation(mySprite3,
    assets.animation("""
        bee-enemy-flying-right
    """),
    50,
    True)
info.set_score(0)
info.set_life(3)
info.start_countdown(30)
music.play(music.melody_playable(music.wawawawaa),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
# changing enemy image direction when enemy goes left/right

def on_on_update():
    global enemydirection
    if enemydirection == "right" and mySprite3.vx < 0:
        enemydirection = "left"
        animation.run_image_animation(mySprite3,
            assets.animation("""
                bee-enemy-flying-left
            """),
            50,
            True)
    elif enemydirection == "left" and mySprite3.vx > 0:
        enemydirection = "right"
        animation.run_image_animation(mySprite3,
            assets.animation("""
                bee-enemy-flying-right
            """),
            50,
            True)
game.on_update(on_on_update)
