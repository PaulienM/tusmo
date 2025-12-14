<template>
  <Game :word="dailyWord" />
</template>

<script lang="ts" setup>
import Game from "./components/Game.vue";

const { main: dailyWord } = useDailyWordsStore();
</script>