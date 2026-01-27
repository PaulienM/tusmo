<template>
  <h1 v-if="game.status === GameStatusEnum.WON">C'est gagné ! 🎉</h1>
  <h1 v-if="game.status === GameStatusEnum.LOST">C'est perdu ! 🙁</h1>
  <table>
    <tbody>
    <Row v-for="row in Game.MAX_ATTEMPTS" :length="word.length" :active="activeRow === (row - 1)"
         :guess="game.guesses[row - 1]" :new-guess="newGuess"></Row>
    </tbody>
  </table>
  <Keyboard @add-letter="addLetter" :correct-letters="game.keyboardFeedback.correct" :wrong-position-letters="game.keyboardFeedback.wrongPosition" :incorrect-letters="game.keyboardFeedback.incorrect"/>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import Keyboard from "~/components/Keyboard.vue";
import { GameStatusEnum } from "~/domain/GameStatusEnum";
import { Game } from "../domain/Game";
import Row from "./Row.vue";

const props = defineProps<{
	word: string;
}>();

const game = ref(new Game(props.word, []));

const activeRow: ComputedRef<number | null> = computed(() => {
	if (game.value.status === GameStatusEnum.NOT_STARTED) {
		return 0;
	} else if (game.value.status === GameStatusEnum.IN_PROGRESS) {
		return game.value.guesses.length;
	} else {
		return null;
	}
});

const newGuess = ref(props.word[0]);

onMounted(() => {
	window.addEventListener("keydown", onKey);
});

onBeforeUnmount(() => {
	window.removeEventListener("keydown", onKey);
});

const onKey = (event: KeyboardEvent) => {
	if (event.key.length === 1 && newGuess.value.length < props.word.length) {
		newGuess.value += event.key;
	}
	if (event.key === "Backspace") {
		newGuess.value = newGuess.value.slice(0, -1);
	}
	if (event.key === "Enter") {
		if (game.value.addGuess(newGuess.value)) {
			newGuess.value = props.word[0];
		}
	}
};

const addLetter = (letter: string) => {
	if (newGuess.value.length < props.word.length) {
		newGuess.value += letter;
	}
};
</script>

<style>
td {
  width: 2em;
  height: 2em;
  border: 1px solid var(--text);
  text-align: center;
  text-transform: capitalize;
  font-weight: bolder;
}

.correct {
  background-color: var(--correct);
}

.wrong-position {
  background-color: var(--wrong-position);
}
</style>