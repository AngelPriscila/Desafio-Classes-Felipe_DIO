class heroi{
    constructor(name, age, type){
this.name = name;
this.age = age;
this.type = type;

    }

    toAttack(){

        let attack;
        
        switch(this.type){
           
            case "Mago":
            attack = "magia"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "Guerreiro":
            attack = "espada"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;

            case "Monge":
            attack = "artes marciais"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
            
            case "Ninja":
            attack = "shuriken"
            console.log(`O ${this.type} atacou usando ${attack}!\n`)
            break;
        }
    }
    
}

const heroi1 = new heroi("Merceus", 82, "Mago")
const heroi2 = new heroi("Raylander", 36, "Guerreiro")
const heroi3 = new heroi("Arcanjo", 139, "Monge")
const heroi4 = new heroi("Saydin", 28, "Ninja")

heroi1.toAttack()
heroi2.toAttack()
heroi3.toAttack()
heroi4.toAttack()