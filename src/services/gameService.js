export default class GameService{
    constructor(){
        this.games=[]
    }
    add(game){
        if(typeof(game)=="object")
             // ürünü apiye(backa-end) yollarız
             this.games.push(game)
    }

    list(){
        //apiden gelen ürünleri listeleriz
        return this.games
    }
    remove(game){
        for(let i=0; i<this.games.length; i++)
        { 
            if(this.games[i].id===game.id)
            this.games.splice(i,1)
        }
    }
}