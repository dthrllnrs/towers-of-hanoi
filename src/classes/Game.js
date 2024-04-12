import Tower from "./Tower";

export default class {
    constructor(discs = 3, towers = 3) {
        if (towers < 3 || discs < 2) {
            console.error('insufficient material');
            // todo throw error;
        }

        this.towerCount = towers;
        this.discCount = discs;
        this.towers = new Object();
        this.moveLog = [];
        this.moveCount = 0;
        this.isSolved = false;

        for (let i = 1; i <= towers; i++) {
            let size = i === 1 ? discs : 0;
            let isLast = i === towers ? true : false;

            this.towers[i] = new Tower(i, size, isLast);
        }
    }

    moveMade(from, to, disc) {
        const originTower = this.towers[from];
        const destinationTower = this.towers[to];

        this.moveLog.push(`disc ${disc.value} moved from tower ${originTower.id} to tower ${destinationTower.id}`);
        this.moveCount++;

        if (destinationTower.isLast && destinationTower.size === this.discCount) {
            this.moveLog.push(`Game solved in ${this.moveCount} moves`);
            this.isSolved = true;
        }
    }
}