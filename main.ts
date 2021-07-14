namespace SpriteKind {
    export const Task1 = SpriteKind.create()
    export const Task2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Task1, function (sprite, otherSprite) {
    question1()
    if (task1Answer == 1) {
        decision1A()
        welcomeToTheVillage()
        question2A()
        if (task2AnswerA == 1) {
        	
        } else if (false) {
        	
        } else {
            game.splash("invalid imput")
        }
    } else if (task1Answer == 2) {
        decision1B()
        welcomeToTheVillage()
        question2B()
        if (task2AnswerB == 1) {
        	
        } else if (false) {
        	
        } else {
            game.splash("invalid imput")
        }
    } else {
        game.splash("invalid imput")
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function create_player () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
function task_one () {
    task1 = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.Task1)
    task1.setPosition(112, 61)
}
function question2A () {
    task1.say("My king, I found this wanderer on the outskirts of town.", 6000)
    pause(5000)
    task1.say("He might be the one who destroyed the crops!", 5000)
    pause(3000)
    task2.say("hmmm, what do you have to say for yourself?", 5000)
    pause(3000)
    game.splash("you now have two options")
    game.splash("press 1 for \"Your majesty,", " I did no such thing!")
    game.splash("press 2 for \"This ", "questioning is quite unnecessary, can I please get settled down?")
    task2AnswerA = parseFloat(game.askForString("What is your choice?"))
}
function question1 () {
    task1.say("HEY YOU", 3000)
    pause(3000)
    task1.say("who are you and what are you doing here?", 5000)
    pause(5000)
    task1.say("are you the one who destroyed the crops?", 5000)
    pause(5000)
    task1.say("")
    game.splash("you now have two options")
    game.splash("press 1 for \"sir i don't ", "know what you're talking about, i just stumbled across this town.\"")
    game.splash("press 2 for \"who are you? ", "you have no right to talk to me like that, im just minding my own business.\"")
    task1Answer = parseFloat(game.askForString("What is your choice?"))
}
function task_two () {
    task2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 5 5 . . . 5 5 . . . 5 5 . . 
        . . . 5 5 . . 5 5 . . 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f 4 b f 4 4 f b 4 f . . . 
        . . . f 4 1 f d d f 1 4 f . . . 
        . . . f 4 d d d d d d 4 f . . . 
        . . . f f 4 4 4 4 4 4 f f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Task2)
    task2.setPosition(450, 75)
}
function intro () {
    game.splash("Welcome to Choose Your ", "Own Adventure!")
    game.splash("You will get to choose ", "your own path in this game")
    game.splash("However, there is only ", "one path to victory")
    game.splash("Choose wisely!")
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
})
function decision1B () {
    mySprite.say("who are you? you have no right to talk to me like that ", 8000)
    pause(8000)
    task1.say("you're right, my dearest apologises", 5000)
    pause(5000)
    task1.say("let me take you to my king, you can stay with us at our village.", 8000)
    pause(8000)
}
function welcomeToTheVillage () {
    task1.vx += 35
    pause(5000)
    task1.vx += -35
    task1.say("this is our village, my king is inside.", 5000)
    pause(5000)
    task1.vx += 35
    pause(5000)
    task1.vx += -35
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
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
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
function decision1A () {
    mySprite.say("sir i don't know what you're talking about, i just stumbled across this town.", 10000)
    pause(10000)
    task1.say("hmmm, fine then, let me take you to my king to see if he recognizes you", 8000)
    pause(8000)
}
function decision2A () {
    task2.say("hmm i think he seems like the trustworthy type", 4000)
    pause(4000)
    task2.say("i believe him", 2000)
    pause(2000)
    task1.say("very well, then should i have him stay in the village?")
}
function create_map () {
    tiles.setTilemap(tilemap`level1`)
}
function question2B () {
    task1.say("Your Majesty, this sir needs a place to stay.", 4000)
    pause(4000)
    task1.say("Perhaps the 5th ring?", 2000)
    pause(2000)
    task2.say("Have a guest stay in the 5th ring? No, that would be quite rude of us.", 8000)
    pause(8000)
    task2.say("You can stay in the 3rd ring", 2000)
    pause(2000)
    game.splash("you now have two ", "options")
    game.splash("press 1 for \"thank you,", "your majesty\"")
    // can you make more rows of text?
    game.splash("press 2 for \"if i may ask,", "what are the rings, your majesty?\"")
    task2AnswerB = parseFloat(game.askForString("What is your choice?"))
}
let task2: Sprite = null
let task1: Sprite = null
let mySprite: Sprite = null
let task2AnswerB = 0
let task2AnswerA = 0
let task1Answer = 0
create_map()
intro()
create_player()
task_one()
task_two()
