<template>
    <h1>Reaction Timing Game</h1>
    <button @click="startTimer" :disabled="isPlaying">Play</button>
    <ClickMe v-if="isPlaying" :delay="delay" @end="endGame" />
    <Results v-if="showResults" :score="score"></Results>
</template>

<script>
import ClickMe from "./components/ClickMe.vue";
import Results from "./components/Results.vue";

export default {
    name: "App",
    components: { ClickMe, Results },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false
        };
    },
    methods: {
        startTimer() {
            this.isPlaying = true;
            this.delay = 1000 + Math.random() * 3000;
            this.showResults = false;
        },
        endGame(reactionTime) {
            this.score = reactionTime;
            this.isPlaying = false;
            this.showResults = true;
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
