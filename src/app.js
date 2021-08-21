import Game from "./models/game.js" // Başka bir js dosyasını kullanmak istiyorsak onu import etmek gerekir
import GameService from "./services/gameService.js"

import User from "./models/user.js"
import UserService from "./services/userService.js"

import SellingService from "./services/sellingService.js"


let game1 = new Game(1, "AgeOfHistory",100,15)
let game2 = new Game(2, "ActionHalfLife",150,20)
let game3 = new Game(3, "CarMechanicSimulator",280,18)
let game4 = new Game(4, "LandOfTheDead", 295,18)
let game5 = new Game(5, "Langrisser",380,18)

let gameService = new GameService();
gameService.add(game1)
gameService.add(game2)
gameService.add(game3)
gameService.add(game4)
gameService.add(game5)

let user1 = new User(11, "SerhatK",25)
let user2 = new User(12, "Atacan",13)
let user3 = new User(13, "Şeymanur",20)
let user4 = new User(14, "SerhatU",15)

let userService = new UserService();
userService.add(user1)
userService.add(user2)
userService.add(user3)
userService.add(user4)


console.log(gameService.list())
gameService.remove(game1)
console.log(gameService.list())

console.log(userService.list())
userService.remove(user1)
console.log(userService.list())

let sellingService = new SellingService();
sellingService.ageControl(user1,game2)
sellingService.ageControl(user2,game5)
sellingService.ageControl(user3,game1)
sellingService.ageControl(user4,game4)

console.log(sellingService.list())


 