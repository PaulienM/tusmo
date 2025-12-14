<template>
  <tr>
    <template v-if="guess">
      <td v-for="feedback in guess.feedback"
          :class="{ 'correct': feedback.status === GuessLetterStatusEnum.CORRECT, 'wrong-position': feedback.status === GuessLetterStatusEnum.WRONG_POSITION }">
        {{ feedback.letter }}
      </td>
    </template>
    <template v-else-if="active">
      <td v-for="column in length">
        {{ newGuess[column - 1] }}
      </td>
    </template>
    <template v-else>
      <td v-for="_ in length" />
    </template>
  </tr>
</template>

<script setup lang="ts">
import {Guess} from "../domain/Guess";
import {GuessLetterStatusEnum} from "../domain/GuessLetterStatusEnum";

defineProps<{
  guess?: Guess;
  length: number;
  active: boolean;
  newGuess: string;
}>();
</script>

<style scoped>

</style>