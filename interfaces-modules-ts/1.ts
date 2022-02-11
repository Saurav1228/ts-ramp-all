interface GameObject {
    x: number
    y: number
    z: number
}

class Player implements GameObject {
    //static type only available to that class
    static PlayerCount = 0;
    name: string
    x: number = 0;
    y: number = 0;
    z: number;

    constructor(name: string) {
        Player.PlayerCount++;
        this.name = name;
    }

    display(prefix: string): void {
        console.log(prefix+
            "Player " +this.name + " is at ("
            + this.x + ", " + this.y + ")"
            );
        
    }
}


let p1 = new Player("Mukul");
let p2 = new Player("Mukul");
let p3 = new Player("Mukul");
let p4 = new Player("Mukul");
let p5 = new Player("Mukul");
let p6 = new Player("Mukul");
p1.x = 10;
p1.y = 20;
// p1.display(" === ");
// console.log(p1)
console.log(Player.PlayerCount);