//cannot be instanciated or implemented directly but can be extended
abstract class Hero {
    hunger: number;
    health: number;

    attack() {}

    move() {
        console.log('I am moving');
    }
    eat() {
        console.log('I am eating');
    }
}

//concrete classes can be instantitated
class Archer extends Hero {
    arrows : number

    attack() {
        // super.attack()
        console.log('Firing an Arrow');
        this.arrows -= 1; //1 arrow used
    }
}

class Mage extends Hero {
    mana : number

    attack() {
        // super.attack()
        console.log('Throwing a potion');
        this.mana -= 1; //1 mana used
    }
}

class Knight extends Hero {
    arrows : number

    attack() {
        // super.attack()
        console.log('Swinging Sword');
    }
}

const archer: Archer = new Archer();

