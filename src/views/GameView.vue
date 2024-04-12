<template>
    <div class="game-info">
        <div class="info-wrapper">
            <span>Moves: {{ game.moveCount }}</span>
        </div>
        <div class="info-wrapper" v-if="game.isSolved">
            <h1>Congratualations! Game solved.</h1>
            <button type="button" @click="handleNewGame">New Game</button>
        </div>
        <div class="info-wrapper game-log">
            <p v-for="log in game.moveLog">
                {{ log }}
            </p>
        </div>
    </div>
    <div class="game-container">
        <Tower v-for="tower in game.towers" :key="tower.id" :tower="tower" @discDropped="discDropped"/>
    </div>

    <div class="game-controls">
        <div>
            <label for="discCount"># of disks:</label>
            <input type="number" name="discCount" id="discCount" v-model="discs">
        </div>
        <div>
            <label for="towerCount"># of towers:</label>
            <input type="number" name="towerCount" id="towerCount" v-model="towers">
        </div>
        <button type="button" @click="handleNewGame">New Game</button>
    </div>
</template>

<script>
import Game from '@/classes/Game';
import Tower from '@/components/Tower.vue';

export default {
    components: {
        Tower,
    },
    data() {
        return {
            game: new Game(),
            discs: 3,
            towers: 3,
        }
    },
    methods: {
        discDropped(from, to) {
            const originTower = this.game.towers[from];
            const destinationTower = this.game.towers[to];
            const disc = originTower.head;
            if (destinationTower.isDroppable(disc)) {
                originTower.detachHead();
                destinationTower.setHead(disc);
                this.game.moveMade(from, to, disc);
            }
        },
        handleNewGame() {
            this.game = new Game(this.discs, this.towers);
        }
    },
}
</script>

<style scoped>
    .game-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .game-info {
        position: relative;
    }

    .game-info .game-log {
        position: absolute;
        top: 0;
        right: 0;
    }
</style>