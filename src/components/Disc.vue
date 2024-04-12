<template>
    <div class="disc" :draggable="draggable" v-on:dragstart="handleDragStart">
        <svg width="100" height="20">
            <rect :width="100" height="20" :fill="disc.color" />
        </svg>
        <div class="disc-value">
            <span class="value">{{ disc.value }}</span>
        </div>
    </div>
</template>

<script>
import Disc from '@/classes/Disc';

export default {
    props: {
        disc: {
            required: true,
            type: Disc,
        },
        towerId: {
            required: true
        },
        draggable: {
            required: true,
        }
    },
    methods: {
        handleDragStart(e) {
            console.log('drag start')
            e.dataTransfer.setData('text', this.towerId);
        }
    }
}
</script>

<style scoped>
    .disc {
        height: min-content;
        width: min-content;
        position: relative;
    }

    .disc-value {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0
    }

    .value {
        color: white;
    }
</style>