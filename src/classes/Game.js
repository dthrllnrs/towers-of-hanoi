import Tower from "./Tower";

// The game class to handle all game state
export default class {
    constructor(discs = 3, towers = 3) {

        // check if the tower and disc input are sufficient to start a valid game
        if (towers < 3 || discs < 2) {
            console.error('insufficient material');
            return;
        }

        // the total number of towers in the game
        this.towerCount = towers;
        // the total number of discs in the game
        this.discCount = discs;

        // the towers object
        this.towers = new Object();

        // the log of the moves made in the game
        this.moveLog = [];
        // the total number of moves made in the game
        this.moveCount = 0;
        // true if the game is solved
        this.isSolved = false;

        // generate the towers
        for (let i = 1; i <= towers; i++) {
            let size = i === 1 ? discs : 0;
            let isLast = i === towers ? true : false;

            this.towers[i] = new Tower(i, size, isLast);
        }
    }

    // called if a valid move is made in the game
    moveMade(from, to, disc) {
        const originTower = this.towers[from];
        const destinationTower = this.towers[to];

        this.moveLog.push(`disc ${disc.value} moved from tower ${originTower.id} to tower ${destinationTower.id}`);
        this.moveCount++;

        // check if the game is completed
        if (destinationTower.isLast && destinationTower.size === this.discCount) {
            this.moveLog.push(`Game solved in ${this.moveCount} moves`);
            this.isSolved = true;
        }
    }
}