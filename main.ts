namespace SpriteKind {
    export const Task1 = SpriteKind.create()
    export const Task2 = SpriteKind.create()
    export const Task3 = SpriteKind.create()
    export const Taco = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Task1, function (sprite, otherSprite) {
    question1()
    if (task1Answer == 1) {
        decision1A()
        welcomeToTheVillage()
        question2A()
        if (task2AnswerA == 1) {
            decision2A()
            question3A()
            if (task3AnswerA == 1) {
                decision3A()
            } else if (task3AnswerA == 2) {
                decision3B()
            } else {
                game.splash("invalid input")
            }
        } else if (task2AnswerA == 2) {
            // death
            decision2B()
        } else {
            game.splash("invalid input")
        }
    } else if (task1Answer == 2) {
        decision1B()
        welcomeToTheVillage()
        question2B()
        if (task2AnswerB == 1) {
            decision2C()
            create_map_2()
            question3C()
            if (task3AnswerC == 1) {
                decision3C()
            } else if (task3AnswerC == 2) {
                decision3D()
            } else {
                game.splash("invalid input")
            }
        } else if (task2AnswerB == 2) {
            decision2D()
            question3D()
            if (task3AnswerD == 1) {
                decision3E()
            } else if (task3AnswerD == 2) {
                decision3F()
            } else {
                game.splash("invalid input")
            }
        } else {
            game.splash("invalid input")
        }
    } else {
        game.splash("invalid input")
    }
})
sprites.onOverlap(SpriteKind.Task3, SpriteKind.Taco, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, true)
})
function decision2D () {
    mySprite.say("if i may ask, what are the levels, your majesty?", 5000)
    pause(5000)
    villager1.say("w-w-what? how could you say that to the king?", 5000)
    pause(5000)
    king.say("hahaha, its ok william. i like this guy's bravery", 5000)
    pause(5000)
    king.say("for your information, our town is split into levels ", 5000)
    pause(5000)
    king.say("level 1 being the wealthiest, and level 6 being the poorest", 5000)
    pause(5000)
    villager1.say("most newcomers stay in level 4", 3000)
    pause(3000)
    mySprite.say("i see, thank you, your majesty", 3000)
    pause(3000)
}
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
function question3A () {
    king.say("hmm that is up to him", 3000)
    pause(3000)
    game.showLongText("you know have two options", DialogLayout.Bottom)
    game.showLongText("press 1 for \"yes i would like to stay in the village", DialogLayout.Bottom)
    game.showLongText("press 2 for \"thank you for the kind offer, but i'll pass.", DialogLayout.Bottom)
    task3AnswerA = parseFloat(game.askForString("What is your choice?"))
}
function create_map_2 () {
    tiles.setTilemap(tilemap`level2`)
    king.setFlag(SpriteFlag.Invisible, true)
    villager2.setFlag(SpriteFlag.Invisible, false)
}
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
function villager () {
    villager1 = sprites.create(img`
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
    villager1.setPosition(112, 61)
}
function question2A () {
    villager1.say("My king, I found this wanderer on the outskirts of town.", 7000)
    pause(7000)
    villager1.say("He might be the one who destroyed the crops!", 6000)
    pause(6000)
    king.say("hmmm, what do you have to say for yourself?", 6000)
    pause(6000)
    game.showLongText("you now have two options", DialogLayout.Bottom)
    game.showLongText("press 1 for \"Your majesty, I did no such thing!", DialogLayout.Bottom)
    game.showLongText("press 2 for \"This questioning is quite unnecessary, can I please get settled down?", DialogLayout.Bottom)
    task2AnswerA = parseFloat(game.askForString("What is your choice?"))
}
function theKing () {
    king = sprites.create(img`
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
    king.setPosition(450, 75)
}
function question1 () {
    villager1.say("HEY YOU", 3000)
    pause(3000)
    villager1.say("who are you? do you even live here?", 5000)
    pause(5000)
    villager1.say("are you the one who destroyed the crops?", 5000)
    pause(5000)
    villager1.say("")
    game.showLongText("you now have two options", DialogLayout.Bottom)
    game.showLongText("press 1 for \"sir i don't know what you're talking about, i just stumbled across this town.\"", DialogLayout.Bottom)
    game.showLongText("press 2 for \"who are you? im just minding my own business.\"", DialogLayout.Bottom)
    task1Answer = parseFloat(game.askForString("What is your choice?"))
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
function decision3F () {
    mySprite.say("thank you, your majesty for the offer, but I'll pass", 6000)
    pause(6000)
    king.say("*raises eyebrows* very well", 3000)
    pause(3000)
    king.say("william, you know what you have to do", 4000)
    pause(4000)
    game.showLongText("the king orders william to kill you for refusing the offer \\n \\n number one rule: don't piss the king off", DialogLayout.Full)
    game.showLongText("oh well, you can always try again :D", DialogLayout.Full)
    game.over(false)
}
function decision1B () {
    mySprite.say("who are you? im just minding my own business", 8000)
    pause(8000)
    villager1.say("you're right, my *dearest* apologies", 5000)
    pause(5000)
    villager1.say("let me take you to my king, you can stay with us at our village.", 8000)
    pause(8000)
}
function welcomeToTheVillage () {
    villager1.vx += 35
    pause(5000)
    villager1.vx += -35
    villager1.say("this is our village, my king is inside.", 5000)
    pause(5000)
    villager1.vx += 35
    pause(5000)
    villager1.vx += -35
}
function decision2C () {
    mySprite.say("thank you, your majesty", 3000)
    pause(3000)
    king.say("william, show this man to his new home", 5000)
    pause(5000)
    villager1.say("yes, your majesty", 2000)
    pause(2000)
    villager1.say("follow me", 1000)
    pause(1000)
    villager1.vx += -35
    pause(3500)
    villager1.vx += 35
    villager1.vy += 35
    pause(2000)
    villager1.vy = 0
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
function question3C () {
    villager1.say("now, we are in the 5th level", 3000)
    pause(3000)
    villager1.say("in front of us, there is the 4th level", 4000)
    pause(4000)
    villager1.say("and in front of that is the 3rd level", 4000)
    pause(4000)
    mySprite.say("what about the 6th level?", 3000)
    pause(3000)
    villager1.say("the 6th level is on a island far away. you don't want to end up there", 7000)
    pause(7000)
    villager2.vx += -50
    pause(2000)
    villager2.vx += 50
    villager2.say("hello kind sir! do you have any food?", 4000)
    pause(4000)
    game.showLongText("You now have two options.", DialogLayout.Bottom)
    game.showLongText("press 1 for \"um yes, here's a taco\"", DialogLayout.Bottom)
    game.showLongText("press 2 for \"no i don't\" *death glare*", DialogLayout.Bottom)
    task3AnswerC = parseFloat(game.askForString("What is your choice?"))
}
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
function decision3E () {
    mySprite.say("that sounds wonderful, yes, I would like to join", 5000)
    pause(5000)
    king.say("wonderful, then i'll have you get started right away!", 6000)
    pause(6000)
    villager1.say("hmpf *glare*", 1000)
    pause(1000)
    game.showLongText("you now have a high status, as you are part of the king's personal army. you are showered in riches and are living your best life.", DialogLayout.Full)
    game.showLongText("however, the security guard is quite jealous of you. so, one day he murders you in your sleep", DialogLayout.Full)
    game.showLongText("you lived a short but great life", DialogLayout.Full)
    game.showLongText("(honestly i dont know if this counts as a win or a lose...)", DialogLayout.Full)
    game.over(true)
}
function question3D () {
    king.say("you know, you seem like the perfect person i should add to my personal army", 10000)
    pause(10000)
    king.say("straightforward, but not rude", 3000)
    pause(3000)
    king.say("brave, but not stupid", 2000)
    pause(2000)
    king.say("would you like to join my personal army?", 4000)
    pause(4000)
    game.showLongText("you now have two options", DialogLayout.Bottom)
    game.showLongText("press 1 for \"that sounds wonderful, yes, I would like to join", DialogLayout.Bottom)
    game.showLongText("press 2 for \"thank you, your majesty for the offer, but I'll pass\"", DialogLayout.Bottom)
    task3AnswerD = parseFloat(game.askForString("What is your choice?"))
}
function decision1A () {
    mySprite.say("sir i don't know what you're talking about, i just stumbled across this town.", 10000)
    pause(10000)
    villager1.say("hmmm, fine then, let me take you to my king to see if he recognizes you", 8000)
    pause(8000)
}
function decision2A () {
    king.say("hmm i think he seems like the trustworthy type", 4000)
    pause(4000)
    king.say("i believe him", 2000)
    pause(2000)
    villager1.say("very well, then should i have him stay in the village?", 5000)
    pause(5000)
}
function create_map () {
    tiles.setTilemap(tilemap`level1`)
}
function decision3B () {
    mySprite.say("thank you for the kind offer, but i'll pass")
    king.say("fine, william please show this young man out")
    game.showLongText("you leave the village and try to survive on your own. you also try scouting for other villages.", DialogLayout.Full)
    game.showLongText("however, one day you get attacked by a wild creature and die from your injuries.", DialogLayout.Full)
    game.over(false)
}
function decision3A () {
    mySprite.say("yes i would like to stay in the village", 4000)
    pause(4000)
    game.showLongText("congrats! you have finished this adventure. you now live a peaceful and happy life at the village.", DialogLayout.Full)
    game.showLongText("you are on good terms with everyone, and have many friends at the village. Yyu eventually die of old age.", DialogLayout.Full)
    game.showLongText("a bit boring? you can always go back and try some riskier routes", DialogLayout.Full)
    game.over(true)
}
function villager3 () {
    villager2 = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Task3)
    villager2.setPosition(460, 40)
    villager2.setFlag(SpriteFlag.Invisible, true)
}
function question2B () {
    villager1.say("Your Majesty, this sir needs a place to stay.", 5000)
    pause(5000)
    villager1.say("Perhaps the 5th ring?", 2000)
    pause(2000)
    king.say("Have a guest stay in the 5th ring? No, that would be quite rude of us.", 8000)
    pause(8000)
    king.say("You can stay in the 3rd ring", 3000)
    pause(3000)
    game.showLongText("you now have two options ", DialogLayout.Bottom)
    game.showLongText("press 1 for \"thank you, your majesty", DialogLayout.Bottom)
    game.showLongText("press 2 for \"if i may ask, what are the rings, your majesty?\"", DialogLayout.Bottom)
    task2AnswerB = parseFloat(game.askForString("What is your choice?"))
}
function decision2B () {
    king.say("WHAT", 500)
    pause(500)
    king.say("YOU DARE SAY THAT TO ME?!?!?", 3000)
    pause(3000)
    king.say("EXECUTE HIM IMMEDIATELY", 2000)
    pause(2000)
    game.showLongText("umm yea pissing off the king isn't a good idea unless you have a death wish", DialogLayout.Full)
    game.showLongText("its ok you can always try again :)", DialogLayout.Full)
    game.over(false, effects.splatter)
}
function decision3D () {
    mySprite.say("no i don't\" *death glare*")
    villager2.say("oh...ok....")
    mySprite.vx += -40
    game.showLongText("wow you managed to piss off the security guard and the villagers. nice going", DialogLayout.Full)
    game.showLongText("everyone at the village hates you and you live a lonely and miserable life", DialogLayout.Full)
    game.showLongText("try to make some friends next time ;)", DialogLayout.Full)
    game.over(false)
}
function decision3C () {
    mySprite.say("um yes, here's a taco", 3000)
    pause(3000)
    taco = sprites.createProjectileFromSprite(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, mySprite, 0, -50)
    taco.setKind(SpriteKind.Taco)
    taco.follow(villager2, 50)
    villager2.say("thank you very much!", 3000)
    pause(3000)
    villager2.say("us villagers will remember your kindness!", 5000)
    pause(5000)
    game.showLongText("the villagers all like you, but the security guard (william) doesn't", DialogLayout.Full)
    game.showLongText("so, you live in the third level your entire life and have no chance of leveling up because of william.", DialogLayout.Full)
    game.showLongText("your situation could be worse (pstt check out some of the other routes), so i suppose you won.", DialogLayout.Full)
    game.over(true)
}
let taco: Sprite = null
let villager2: Sprite = null
let king: Sprite = null
let villager1: Sprite = null
let mySprite: Sprite = null
let task3AnswerD = 0
let task3AnswerC = 0
let task2AnswerB = 0
let task3AnswerA = 0
let task2AnswerA = 0
let task1Answer = 0
create_map()
intro()
create_player()
villager()
theKing()
villager3()
