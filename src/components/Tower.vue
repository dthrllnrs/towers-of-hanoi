<template>
    <div class="tower-container" :style="{ 'backgroundImage': `url(${towerImage})` }" v-on:dragover.prevent v-on:drop="handleDrop">
        <div class="tower-id">
            {{ tower.id }}
        </div>
        <div class="discs-container">
            <Disc v-for="(disc, index) in discs" :disc="disc" :key="disc.value" :towerId="tower.id" :draggable="index === 0"/>
        </div>
    </div>
</template>

<script>
import Tower from '@/classes/Tower';
import towerImage from '@/assets/tower.png';
import Disc from '@/components/Disc.vue';

export default {
    components: {
        Disc,
    },
    props: {
        tower: {
            required: true,
            type: Tower,
        },
    },
    data() {
        return {
            towerImage: towerImage,
        }
    },
    computed: {
        discs() {
            if (this.tower.head === null) return [];

            let currentNode = this.tower.head;
            const discs = [currentNode];
            while(currentNode.next !== null) {
                discs.push(currentNode.next);
                currentNode = currentNode.next;
            }

            return discs;
        }
    },
    methods: {
        handleDrop(e) {
            this.$emit('discDropped', e.dataTransfer.getData('text'), this.tower.id);
        }
    },
}
</script>

<style scoped>
    .tower-container {
        width: calc(15% - 15px);
        min-height: 400px;
        background-position: bottom center;
        background-repeat: no-repeat;
        display: flex;
        align-items: end;
        padding-bottom: 20px;
    }

    .discs-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>