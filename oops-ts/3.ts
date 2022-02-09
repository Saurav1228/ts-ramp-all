class Hero {
    hunger: number
    health: number

    attack() {
        console.log('Attacking');
    }

    move() {
        console.log('Moving');
    }

    eat() {
        console.log('Eating');
    }   
}

class Archer extends Hero {
    arrows : number

    attack() {
        super.attack()
        console.log('Attacking again');
        this.arrows -= 1; //1 arrow used
    }
}