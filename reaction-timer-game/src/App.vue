<template>
  <h1>Reaction Timing Game</h1>
  <button @click="startTimer">Play</button>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    startTimer() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      console.log(this.delay)
    },
  },
}
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
