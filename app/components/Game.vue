<template>
  <table>
    <tbody>
    <Row v-for="row in Game.MAX_ATTEMPTS" :length="word.length" :active="activeRow === (row - 1)"
         :guess="game.guesses[row - 1]" :new-guess="newGuess"></Row>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import {Game} from "../domain/Game";
import Row from "./Row.vue";

const props = defineProps<{
  word: string;
}>();

const game = ref(new Game(props.word, ['couver', 'crampe']));

const activeRow = computed(() => game.value.guesses.length);

const newGuess = ref(props.word[0]);

onMounted(() => {
  window.addEventListener('keydown', onKey)
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
})

const onKey = (event: KeyboardEvent) => {
  if (event.key.length === 1 && newGuess.value.length < props.word.length) {
    newGuess.value += event.key
  }
  if (event.key === 'Backspace') {
    newGuess.value = newGuess.value.slice(0, -1)
  }
  if (event.key === 'Enter') {
    if (game.value.addGuess(newGuess.value)) {
      newGuess.value = props.word[0];
    }
  }
}
</script>

<style>
td {
  width: 2em;
  height: 2em;
  border: 1px solid black;
  text-align: center;

  &.correct {
    background-color: red;
  }

  &.wrong-position {
    background-color: yellow;
  }
}
</style>