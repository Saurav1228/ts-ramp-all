abstract class Character {
    hunger: number;
    health: number;

    abstract eat(): void 
}
//interfaces are pure abstract classes
interface Hero extends Character {
    heroId: number;
}

interface Enemy extends Character {
    enemyId: number;
}

class Spy implements Hero, Enemy {
    hunger: number;
    health: number;
    heroId: number;
    enemyId: number;

    eat() {
        this.hunger -= 1;
    }
}