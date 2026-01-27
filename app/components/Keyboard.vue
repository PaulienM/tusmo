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
	["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
	["W", "X", "C", "V", "B", "N"],
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