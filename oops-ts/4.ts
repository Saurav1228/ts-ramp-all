class Character {
    //lives on the class only
    static CharacterCount = 0;
    private hunger: number;
    private health: number;

    //constructor
    constructor(hunger: number, health: number) {
        this.hunger = hunger;
        this.health = health; 
    }

    getHunger():number {
        return this.hunger;
    }

    getHealth():number {
        return this.health;
    }
}

// const character = new Character(800, 900);
// console.log(character.getHunger());
// console.log(character.getHealth());

class Hero extends Character {
    private heroId: number;

    constructor(heroId: number,hunger: number,health: number) {
        super(hunger, health);
        this.heroId = heroId;
    }

    setheroId(heroId: number) {
        this.heroId = heroId;
    }

    getHeroId():number {
        return this.heroId;
    }
}

const opal = new Hero(10,20,30);
console.log(opal.getHeroId());

