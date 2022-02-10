class Hero {
    hunger: number;
    health: number;

    attack() {
        console.log('I am attacking');
    }
    move() {
        console.log('I am moving');
    }
    eat() {
        console.log('I am eating');
    }
}

class Archer extends Hero {
    arrows : number

    attack() {
        super.attack()
        console.log('Firing an Arrow');
        this.arrows -= 1; //1 arrow used
    }
}

class Mage extends Hero {
    mana : number

    attack() {
        super.attack()
        console.log('Throwing a potion');
        this.mana -= 1; //1 mana used
    }
}

class Knight extends Hero {
    arrows : number

    attack() {
        super.attack()
        console.log('Swinging Sword');
    }
}

class Tribe {
    private heros : Hero[];

    setHeros(heros: Hero[]) {
        this.heros = heros;
    }

    attack() {
        for (let hero of this.heros){
            hero.attack();
        }
    }
}

//ask new thieves
class Thief extends Hero {
    attack() {
        super.attack();
        console.log('Pick Pocket');
    }
}

const archer:Hero  = new Archer();
const mage:Hero = new Mage();
const knight:Hero = new Knight();

// const heros: Hero[] = [archer, mage, knight];

// const tribe = new Tribe();
// tribe.setHeros(heros);

// tribe.attack();

const thief = new Thief();
const heros2 : Hero[] = [archer,knight,thief];
const tribe2  = new Tribe();
tribe2.setHeros(heros2);

tribe2.attack();