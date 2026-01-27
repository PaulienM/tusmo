<template>
  <div v-for="row in letters">
    <button v-for="letter in row" @click="$emit('addLetter', letter)" :class="{
      'incorrect': incorrectLetters.includes(letter),
      'correct': correctLetters.includes(letter),
      'wrong-position': wrongPositionLetters.includes(letter),
    }" :disabled="incorrectLetters.includes(letter)">{{letter}}</button>
  </div>
</template>

<script setup lang="ts">
const letters = [
	["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
	["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
	["w", "x", "c", "v", "b", "n"],
];

defineProps<{
	correctLetters: string[];
	wrongPositionLetters: string[];
	incorrectLetters: string[];
}>();

defineEmits<{
	addLetter: [letter: string];
}>();
</script>

<style scoped>
button {
  text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--text);
  padding: 2px 4px;
  margin: 8px;
  cursor: pointer;

  &:not(.correct, .wrong-position) {
    background-color: transparent;
  }

  &.incorrect {
    opacity: 0.5;
    cursor: auto;
  }
}
</style>