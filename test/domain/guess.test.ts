import { describe, expect, test } from "vitest";
import { Guess } from "../../app/domain/Guess";
import { GuessLetterStatusEnum } from "../../app/domain/GuessLetterStatusEnum";

describe("Test du feedback des essais", () => {
	test("Les lettres bien placées sont ont le statut correct", () => {
		const guess = new Guess("solution", "soxxxxxx");
		expect(guess.feedback).toMatchObject([
			{ letter: "s", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "o", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
		]);
	});

	test("Les lettres au mauvais endroit ont le statut wrong_position", () => {
		const guess = new Guess("solution", "souxxxxx");
		expect(guess.feedback).toMatchObject([
			{ letter: "s", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "o", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "u", status: GuessLetterStatusEnum.WRONG_POSITION },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
		]);
	});

	test("Si une lettre est placé deux fois en mauvaise position mais présente une seule fois, elle est marquée une fois en wrong_position", () => {
		const guess = new Guess("solution", "souxuxxx");
		expect(guess.feedback).toMatchObject([
			{ letter: "s", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "o", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "u", status: GuessLetterStatusEnum.WRONG_POSITION },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "u", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
		]);
	});

	test("Si une lettre est placé une fois en mauvaise position et une fois correctement mais présente une seule fois, elle est marquée incorrect à la mauvaise position", () => {
		const guess = new Guess("solution", "souuxxxx");
		expect(guess.feedback).toMatchObject([
			{ letter: "s", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "o", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "u", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "u", status: GuessLetterStatusEnum.CORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
			{ letter: "x", status: GuessLetterStatusEnum.INCORRECT },
		]);
	});
});
