<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>

  <!-- child component içinde reaction-time eventi tetiklenirse endGame fonksiyonu çağrılıyor -->
  <Block v-if="isPlaying" :delay="delay" @reaction-time="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data(){
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000; // Random delay between 2 and 7 seconds
      this.isPlaying = true;
      this.showResults = false;
    },

    // reactionTime parametresi, child component'ten gelen değeri alır
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
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
button {
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
