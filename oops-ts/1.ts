
//encapsulation
class Player {
    private health : number;
    private velocity : number;

    setHealth(health: number) {
        if(health < 0) {
            console.log('Invalid Health');
            return;
        }

        this.health = health;
    }
    getHealth() {
        return this.health;
    }
}


//Inheritance
const mario = new Player;
mario.setHealth(-10);
mario.getHealth();

console.log(`${mario.getHealth()}`);


