<template>
  <Game :word="dailyWord" />
</template>

<script lang="ts" setup>
import Game from "./components/Game.vue";

const { main: dailyWord } = useDailyWordsStore();
</script>

<style>
body {
  --background: #084a5e;
  --text: #ffffff;
  --correct: #db3a34;
  --wrong-position: #f7b735;

  background-color: var(--background);
  color: var(--text);
  font-family: sans-serif;
  font-size: 30px;
}
</style>