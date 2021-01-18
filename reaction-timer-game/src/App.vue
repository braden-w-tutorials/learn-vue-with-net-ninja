<template>
    <h1>Reaction Timing Game</h1>
    <button @click="startTimer" :disabled="isPlaying">Play</button>
    <ClickMe v-if="isPlaying" :delay="delay" @end="endGame" />
    <p>Reaction Time: {{ score }} ms</p>
</template>

<script>
import ClickMe from "./components/ClickMe.vue";

export default {
    name: "App",
    components: { ClickMe },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null
        };
    },
    methods: {
        startTimer() {
            this.isPlaying = true;
            this.delay = 1000 + Math.random() * 3000;
        },
        endGame(reactionTime) {
            this.score = reactionTime;
            this.isPlaying = false;
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
}
</style>
