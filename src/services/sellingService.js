export default class SellingService{
    constructor(){
        this.users=[]
        this.games=[]
    }
    ageControl(user,game){

        if(user.age < game.minAge){
            console.log("Bu oyun yaşınız için uygun değil.")
        }else{
            console.log("Oyun satın alındı")
        }
    }
    
    list(){
        return this.users+ this.games
    }
}